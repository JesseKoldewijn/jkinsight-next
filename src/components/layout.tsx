/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";

import Navbar from "./ui/navbar";
import ThemeLoader from "./themeLoader";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgba(200,200,200,0.75)] via-gray-400 to-[rgba(200,200,200,0.75)] dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-gray-900 dark:via-gray-700 dark:to-gray-600">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 20,
        }}
      >
        <ThemeLoader />
        {children}
      </motion.div>
    </div>
  );
};
export default Layout;
