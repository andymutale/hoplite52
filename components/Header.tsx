"use client";
 
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@/utils/useMediaQuery";
 
const NAV_LINKS = [
  { label: "Work",   href: "#work" },
  { label: "Notes",  href: "#notes" },
  { label: "About",  href: "#about" },
];
 
/* Variants */
const overlayVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25, when: "beforeChildren", staggerChildren: 0.08 } },
  exit:    { opacity: 0, transition: { duration: 0.2, when: "afterChildren", staggerChildren: 0.05, staggerDirection: -1 } },
};
 
const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { ease: [0.22, 1, 0.36, 1], duration: 0.45 } },
  exit:    { opacity: 0, y: 16, transition: { duration: 0.2 } },
};
 
/* Animated hamburger bar */
function HamburgerBar({ style }: { style?: React.CSSProperties }) {
  return (
    <motion.span
      style={{ display: "block", height: 1.5, background: "var(--text)", borderRadius: 2, ...style }}
    />
  );
}
 
export default function Header() {
  const [toggled, setToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
 
  const close = () => setToggled(false);
 
  return (
    <>
      <header style={{ position: "relative", zIndex: 110 }}>
        <div className="header-inner">
          {/* Wordmark */}
          <Link href="/" className="site-name" onClick={close}>
            Andy Mutale
          </Link>
 
          {/* ── Desktop nav ── */}
          {isDesktop && (
            <nav className="desktop-nav">
              {NAV_LINKS.map((l) => (
                <a key={l.label} href={l.href} className="nav-link">
                  {l.label}
                </a>
              ))}
              <a href="mailto:hello@andymutale.com" className="nav-link cta">
                Hire me
              </a>
            </nav>
          )}
 
          {/* ── Mobile hamburger ── */}
          {!isDesktop && (
            <div
              onClick={() => setToggled((p) => !p)}
              style={{ display: "flex", flexDirection: "column", gap: 5, cursor: "pointer", zIndex: 120, padding: "4px 2px" }}
              aria-label={toggled ? "Close menu" : "Open menu"}
              role="button"
              aria-expanded={toggled}
            >
              {/* Top bar — rotates to \ */}
              <motion.span
                animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 6.5 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "block", height: 1.5, width: 24, background: "var(--text)", borderRadius: 2, transformOrigin: "center" }}
              />
              {/* Middle bar — fades out */}
              <motion.span
                animate={{ opacity: toggled ? 0 : 1, scaleX: toggled ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                style={{ display: "block", height: 1.5, width: 18, background: "var(--text)", borderRadius: 2 }}
              />
              {/* Bottom bar — rotates to / */}
              <motion.span
                animate={{ rotateZ: toggled ? -45 : 0, y: toggled ? -6.5 : 0, width: toggled ? 24 : 12 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "block", height: 1.5, background: "var(--text)", borderRadius: 2, transformOrigin: "center" }}
              />
            </div>
          )}
        </div>
      </header>
 
      {/* ── Full-screen mobile overlay ── */}
      <AnimatePresence>
        {toggled && !isDesktop && (
          <motion.div
            key="mobile-nav"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              background: "var(--bg)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.25rem",
            }}
          >
            {/* Subtle brand mark at top */}
            <motion.p
              variants={itemVariants}
              style={{
                position: "absolute",
                top: "1.25rem",
                left: "1rem",
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "1.1rem",
                color: "var(--text)",
                letterSpacing: "-0.01em",
              }}
            >
              Andy Mutale
            </motion.p>
 
            {NAV_LINKS.map((l) => (
              <motion.a
                key={l.label}
                variants={itemVariants}
                href={l.href}
                onClick={close}
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2.4rem, 10vw, 3.5rem)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--text)",
                  textDecoration: "none",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  padding: "0.25rem 0",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--red)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
              >
                {l.label}
              </motion.a>
            ))}
 
            {/* CTA */}
            <motion.a
              variants={itemVariants}
              href="mailto:hello@andymutale.com"
              onClick={close}
              style={{
                marginTop: "1.5rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.9rem",
                fontWeight: 500,
                background: "var(--text)",
                color: "var(--bg)",
                padding: "0.65rem 1.5rem",
                borderRadius: "100px",
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "var(--red)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "var(--text)")}
            >
              Hire me →
            </motion.a>
 
            {/* Social links at bottom */}
            <motion.div
              variants={itemVariants}
              style={{
                position: "absolute",
                bottom: "1.75rem",
                display: "flex",
                gap: "1.5rem",
              }}
            >
              {[
                { label: "GitHub", href: "https://github.com/andymmutale" },
                { label: "LinkedIn", href: "https://linkedin.com/in/andy-mutale" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                  }}
                >
                  {s.label} ↗
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
 