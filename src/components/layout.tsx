/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";

import Navbar from "./ui/navbar";
import ThemeLoader from "./themeLoader";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className="fixed inset-0 overflow-y-scroll">
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
