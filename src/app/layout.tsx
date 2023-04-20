import "@/styles/tailwind.css";

import ThemeChange from "@/components/themeLoader";
import Navbar from "@/components/ui/navbar";

export const metadata = {
  title: "JKinsight",
  description: "My personal and blazingly fast portfolio website!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="night"
      className="transition-all duration-500 ease-in-out"
    >
      <body>
        <ThemeChange />
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
