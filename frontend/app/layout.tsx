import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/hooks/use-auth";
import { ReactQueryProvider } from "@/components/providers";
import { Header } from "@/components/tasks/header";

export const metadata: Metadata = {
  title: "Todo App",
  description: "A simple todo application with authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="font-sans antialiased"
        suppressHydrationWarning
      >
        <ReactQueryProvider>

          <AuthProvider>
            <Header />
            <div>
            {children}
            </div>
            </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
