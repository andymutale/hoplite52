"use client";

import { useEffect } from "react";
import { Project } from "@/data/projects";

interface CaseStudyPanelProps {
  project: Project | null;
  onClose: () => void;
}

const LIGHT_BACKGROUNDS = ["#F5F2ED", "#F2D84A", "#EAF3E0"];

export default function CaseStudyPanel({ project, onClose }: CaseStudyPanelProps) {
  const isOpen = project !== null;
  const isLight = project ? LIGHT_BACKGROUNDS.includes(project.heroBg) : false;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`cs-overlay${isOpen ? " open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`cs-panel${isOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={project?.title}
      >
        {project && (
          <>
            <div className="cs-header">
              <div>
                <div className="cs-meta-top">
                  <span className="cs-index">{project.index}</span>
                  <span className="cs-tag">{project.tag}</span>
                </div>
                <div className="cs-title">{project.title}</div>
              </div>
              <button className="cs-close" onClick={onClose} aria-label="Close">
                ✕
              </button>
            </div>

            {/* Hero */}
            <div
              className="cs-hero"
              style={{ background: project.heroBg }}
            >
              <span
                className="cs-hero-text"
                style={{ color: isLight ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)" }}
              >
                {project.heroText}
              </span>
            </div>

            {/* Body */}
            <div className="cs-body">
              <div className="cs-section">
                <div className="cs-section-label">Problem</div>
                <p>{project.problem}</p>
              </div>

              <div className="cs-section">
                <div className="cs-section-label">Approach</div>
                <p>{project.approach}</p>
              </div>

              <div className="cs-section">
                <div className="cs-section-label">Outcome</div>
                <p>{project.outcome}</p>
                <div className="cs-outcome-grid">
                  {project.stats.map((stat, i) => (
                    <div className="cs-stat" key={i}>
                      <div className="cs-stat-num">{stat.num}</div>
                      <div className="cs-stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cs-section">
                <div className="cs-section-label">Stack</div>
                <div className="cs-stack">
                  {project.stack.map((tech) => (
                    <span className="cs-chip" key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
