import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stagger } from "./constants";

export default function Section({ children, className = "", id = "", style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section id={id} ref={ref} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"} className={className} style={style}>
      {children}
    </motion.section>
  );
}
