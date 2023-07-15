import ThemeLoader from "@/components/themeLoader";
import Navbar from "@/components/ui/navbar";
import { JetBrains_Mono } from "next/font/google";

const JetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const NotFound = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `:root { --font-jb-mono: ${JetbrainsMono.style.fontFamily} }`,
        }}
      />
      <>
        <ThemeLoader />
        <div className="fixed inset-0 overflow-y-scroll">
          <Navbar />
          <main>
            <div className="flex min-h-screen items-center justify-center">
              <h1 className="text-2xl font-semibold text-white">
                404 | Page Not Found
              </h1>
            </div>
          </main>
        </div>
      </>
    </>
  );
};
export default NotFound;
