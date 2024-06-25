import { Inter,Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "FinTrack",
  description: "A expense tracker app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <Toaster/>
      <body className={outfit.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
