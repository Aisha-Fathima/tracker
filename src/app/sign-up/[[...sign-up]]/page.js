import { SignIn, SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FEE3E3] p-4"> {/* Changed background to light pink */}
      <div className="mb-6">
        <Image
          src="/xoxo.png" // Ensure to replace with your logo path
          alt="Your Logo"
          width={150}
          height={50}
        />
      </div>
      <h1 className="text-3xl font-bold mb-4 text-[#333333]">Welcome!</h1>
      <p className="mb-6 text-center text-[#555555]">
        Please create your account and track your activities.
      </p>
      <div className="w-full max-w-md">
        <SignUp
          path="/sign-up" // Ensures the path is correct
          routing="path"   // Use path routing to keep the URL in sync
          appearance={{
            elements: {
              rootBox: "bg-white rounded-lg shadow-md p-6", // Add background and shadow
              button: "bg-[#FF6F91] text-white rounded py-2 px-4 hover:bg-[#D5006D] transition", // Button styling
              // Add more customizations as needed
            },
          }}
        />
      </div>
      <p className="mt-4 text-center text-sm text-[#777777]">
        Already have an account?{" "}
        <a href="/sign-in" className="text-[#FF6F91] hover:underline">
          Sign in here
        </a>
      </p>
    </div>
  );
}
