export const dynamic = "force-dynamic";
import { SignedIn, SignedOut, ClerkLoading } from "@clerk/nextjs";
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { StriveBox } from "./components/StriveBox";
import { ThriveBox } from "./components/ThriveBox";
import { WorkBox } from "./components/WorkBox";
import Form from "./components/Form";
import { BalanceBoard } from "./components/BalanceBoard";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: activities, error } = await supabase.from("activities").select();
  
  // Debug logging
  console.log("Supabase query result:", { activities, error });
  
  // Handle potential errors
  if (error) {
    console.error("Error fetching activities:", error);
  }

  function calculateTotal(category) {
    if (!Array.isArray(activities)) {
        return 0;
    }
    return activities
        .filter((activity) => activity.category === category)
        .reduce((a, c) => a + (c.length || 0), 0);
  }

  const strive = calculateTotal("strivin");
  const work = calculateTotal("workin");
  const thrive = calculateTotal("thrivin");

  const total = strive + work + thrive;
  const hoursLeft = 24 - total;

  return (
    <main className="bg-image main-content-wrapper">
      <div className="content-card">
        <ClerkLoading>
          <div className="text-[#333333] clerk-loading">
            <h1 className="text-3xl font-bold mb-4">Find More Balance</h1>
            <p className="animate-pulse">Loading your balance...</p>
          </div>
        </ClerkLoading>
        
        <SignedOut>
          <div className="text-[#333333]">
            <h1 className="text-3xl font-bold mb-4">Find More Balance</h1>
            <p className="mb-3">
              Already a balanced citizen?{" "}
              <Link href="/sign-in" className="text-[#F08080] font-bold hover:underline">
                Sign In
              </Link>
            </p>
            <p>
              Want to be a balanced citizen?{" "}
              <Link href="/sign-up" className="text-[#F08080] font-bold hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </SignedOut>
        
        <SignedIn>
          <div className="loose-leading text-[#A1356E]">
            <h2 className="text-2xl font-semibold mb-4">ADD A NEW ACTIVITY</h2>
            
            <p className="mb-4 text-sm text-[#777777]">
              Choose an activity that reflects how you're using your time. Whether it's work, self-improvement, or leisure.<br />
              Tracking your activities helps you maintain balance and focus on your goals.
            </p>
            
            <div className="flex justify-between items-start space-x-4 mb-6">
              <Form />
              <div className="flex-col flex-1 text-right">
                <p className="mb-2">hours used: {total}</p>
                <p>hours left: {hoursLeft}</p>
              </div>
            </div>
            
            <div className="flex space-x-6 mb-6">
              <WorkBox className="flex-1" total={work} />
              <StriveBox className="flex-1" total={strive} />
              <ThriveBox className="flex-1" total={thrive} />
            </div>
            
            <BalanceBoard activities={activities || []} />
          </div>
        </SignedIn>
      </div>
    </main>
  );
}