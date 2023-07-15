import "@/styles/globals.css";

import { cookies } from "next/headers";
import { type Metadata } from "next/types";

import { JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/ui/navbar";
import ThemeLoader from "@/components/themeLoader";

export const metadata: Metadata = {
  title: {
    default: "",
    template: "%s | JKinsight by Jesse Koldewijn",
  },
  description: "Welcome to JKinsight - My personal portfolio website!",
};

const JetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const cookieJar = cookies();
  const defaultTheme = cookieJar.get("theme")
    ? String(cookieJar.get("theme")?.value)
    : "night";

  return (
    <html lang="en" data-theme={defaultTheme}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="application-name" content="JKinsight" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#0f172a" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
        <style
          dangerouslySetInnerHTML={{
            __html: `:root { --font-jb-mono: ${JetbrainsMono.style.fontFamily} }`,
          }}
        />
      </head>
      <body>
        <>
          <ThemeLoader />
          <div className="fixed inset-0 overflow-y-scroll">
            <Navbar />
            <main>
              <div className="mx-4 flex min-h-screen flex-col items-center justify-center gap-6 text-black dark:text-white">
                {children}
              </div>
            </main>
          </div>
        </>
      </body>
    </html>
  );
};
export default RootLayout;
