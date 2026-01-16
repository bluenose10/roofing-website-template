import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "../WhatsAppFloat";
import { CustomCursor } from "../ui/CustomCursor";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <Header />
      <main className="flex-1 pt-[73px]">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
