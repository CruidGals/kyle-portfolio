import { easeInOut } from "framer-motion";
import type { ReactNode } from "react";
import { motion } from "framer-motion"

type FadeUpClassProps = {
  className?: string;
  children?: ReactNode;
};

type FadeUpAProps = {
  href: string;
  className?: string;
  children?: ReactNode;
}

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: {ease: easeInOut, duration: 0.6 } },
};

export const FadeUpH1 = ( { className, children }: FadeUpClassProps ) => {
  return (
    <motion.h1
      className={className}
      initial='hidden'
      whileInView='visible'
      viewport={ { once: true } }
      variants={fadeUpVariant}
    >
      {children}
    </motion.h1>
  )
}

export const FadeUpH2 = ( { className, children }: FadeUpClassProps ) => {
  return (
    <motion.h2
      className={className}
      initial='hidden'
      whileInView='visible'
      viewport={ { once: true } }
      variants={fadeUpVariant}
    >
      {children}
    </motion.h2>
  )
}

export const FadeUpDiv = ( { className, children }: FadeUpClassProps ) => {
  return (
    <motion.div
      className={className}
      initial='hidden'
      whileInView='visible'
      viewport={ { once: true } }
      variants={fadeUpVariant}
    >
      {children}
    </motion.div>
  )
}

export const FadeUpP = ( { className, children }: FadeUpClassProps ) => {
  return (
    <motion.p
      className={className}
      initial='hidden'
      whileInView='visible'
      viewport={ { once: true } }
      variants={fadeUpVariant}
    >
      {children}
    </motion.p>
  )
}

export const FadeUpA = ( { href, className, children }: FadeUpAProps ) => {
  return (
    <motion.a
      href={href}
      className={className}
      initial='hidden'
      whileInView='visible'
      viewport={ { once: true } }
      variants={fadeUpVariant}
    >
      {children}
    </motion.a>
  )
}

export const FadeUpLi = ( { className, children }: FadeUpClassProps ) => {
  return (
    <motion.li
      className={className}
      initial='hidden'
      whileInView='visible'
      viewport={ { once: true } }
      variants={fadeUpVariant}
    >
      {children}
    </motion.li>
  )
}

export const FadeUpUl = ( { className, children }: FadeUpClassProps ) => {
  return (
    <motion.ul
      className={className}
      initial='hidden'
      whileInView='visible'
      viewport={ { once: true } }
      variants={fadeUpVariant}
    >
      {children}
    </motion.ul>
  )
}