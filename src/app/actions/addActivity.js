"use server";
import { revalidatePath } from "next/cache";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { v4 as uuidv4 } from "uuid";
import { cookies } from "next/headers";

const addActivity = async (data) => {
  const title = data.get("title");
  const category = data.get("category");
  const length = data.get("length");
  console.log("Adding activity:", { title, category, length }); // Log the data being added

  const supabase = createServerActionClient({ cookies });
  const { error } = await supabase
    .from("activities")
    .insert({ id: uuidv4(), title, category, length });

  if (error) {
    console.error("Error adding activity:", error); // Log any errors
  }
  revalidatePath("/");
};

export default addActivity;
