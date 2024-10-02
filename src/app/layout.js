export const dynamic = "force-dynamic";
import "./styles/globals.css";
import { Inter } from "next/font/google";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EmpowHER Balanced",
  description: "For Impressive Members of Society"
};

function Header() {
  return (
    <header className="header flex p-4 bg-[#A1356E]"> {/* Updated Header Background */}
      <div className="column1 flex-1 text-white">
        <Image
          alt="balanced citizen logo"
          src="/xoxo.png"
          width={100}
          height={100}
        />
      </div>
      <div>
        <div className="column2 flex-1 text-white flex justify-end">
          <SignedOut>
            <Link href="/sign-in" className="text-[#E4B8D4] hover:text-[#FF4F00]"> {/* Updated Link Color */}
              Sign In
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <section>{children}</section>
        </body>
      </html>
    </ClerkProvider>
  );
}
