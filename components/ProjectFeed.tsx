"use client";

import { useState } from "react";
import { projects, Project, Category } from "@/data/projects";
import { notes } from "@/data/notes";
import CaseStudyPanel from "./CaseStudyPanel";
import MiniGrid from "./MiniGrid";

type Filter = "all" | Category;

const FILTERS: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "DevOps", value: "devops" },
  { label: "Freelance", value: "freelance" },
];

/* ── Thumbnail visuals ── */
function ProjectThumb({ project }: { project: Project }) {
  if (project.id === 1) {
    return (
      <div
        className="project-thumb tv-red"
        style={{ width: "100%", height: 200, marginTop: "1.25rem", borderRadius: 6 }}
      >
        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span className="large-tv-text">Dashboard</span>
        </div>
      </div>
    );
  }
  if (project.id === 2) {
    return (
      <div className="project-thumb tv-dark">
        <MiniGrid />
      </div>
    );
  }
  if (project.id === 3) {
    return (
      <div className="project-thumb" style={{ background: "#F5F2ED" }}>
        <div className="tv-rings">
          <div className="tv-ring" style={{ width: 52, height: 52 }} />
          <div className="tv-ring" style={{ width: 36, height: 36, opacity: 0.4 }} />
          <div className="tv-ring" style={{ width: 20, height: 20, opacity: 0.6 }} />
        </div>
      </div>
    );
  }
  if (project.id === 4) {
    return (
      <div className="project-thumb tv-yellow" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span className="tv-text dark" style={{ fontSize: "1.2rem" }}>Shop</span>
      </div>
    );
  }
  if (project.id === 5) {
    return (
      <div className="project-thumb tv-dark" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span className="tv-text light">Cloud</span>
      </div>
    );
  }
  if (project.id === 6) {
    return (
      <div className="project-thumb" style={{ background: "#F5F2ED", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.4rem", color: "var(--text-muted)", letterSpacing: "-0.02em" }}>⚡</span>
      </div>
    );
  }
  if (project.id === 7) {
    return (
      <div className="project-thumb" style={{ background: "#EAF3E0", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="10" stroke="#3DB87A" strokeWidth="1.2" strokeDasharray="3 2" />
          <circle cx="14" cy="14" r="3" fill="#3DB87A" opacity="0.6" />
        </svg>
      </div>
    );
  }
  return <div className="project-thumb" />;
}

export default function ProjectFeed() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const visible = projects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <>
      {/* Filter bar */}
      <div className="filter-bar" id="work">
        <div className="filter-inner">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={`filter-btn${activeFilter === f.value ? " active" : ""}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
          <span className="filter-count" id="filterCount">
            {visible.length} project{visible.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* Feed */}
      <div className="feed">
        <div className="feed-section-label">Selected work</div>

        {visible.map((project) =>
          project.featured ? (
            /* Featured large row */
            <div
              key={project.id}
              className="project-row large fade-in"
              onClick={() => setActiveProject(project)}
              style={{ cursor: "pointer" }}
            >
              <div className="project-main">
                <div className="project-meta-top">
                  <span className="project-index">{project.index}</span>
                  <span className="project-tag featured">Featured</span>
                  {project.tags.map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
                <div className="project-title">{project.title}</div>
                <div className="project-desc">{project.desc}</div>
              </div>
              <div className="project-right">
                <span className="project-year">{project.year}</span>
                <span className="project-arrow">↗</span>
              </div>
              <ProjectThumb project={project} />
            </div>
          ) : (
            /* Standard row */
            <div
              key={project.id}
              className="project-row fade-in"
              data-cat={project.category}
              onClick={() => setActiveProject(project)}
              style={{ cursor: "pointer" }}
            >
              <div className="project-main">
                <div className="project-meta-top">
                  <span className="project-index">{project.index}</span>
                  <span className="project-tag">{project.tag}</span>
                </div>
                <div className="project-title">{project.title}</div>
                <div className="project-desc">{project.desc}</div>
              </div>
              <div className="project-right">
                <ProjectThumb project={project} />
                <span className="project-year">{project.year}</span>
                <span className="project-arrow">↗</span>
              </div>
            </div>
          )
        )}

        {/* Notes section */}
        <div className="feed-section-label" id="notes" style={{ marginTop: "1rem" }}>
          Notes &amp; writing
        </div>

        {notes.map((note) => (
          <a key={note.id} className="note-row fade-in" href={note.href}>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="note-title">{note.title}</div>
              <div className="note-meta">{note.category} · {note.readTime}</div>
            </div>
            <div className="note-right">{note.date}</div>
          </a>
        ))}

        {/* About section */}
        <div className="about-grid" id="about">
          <div className="about-body fade-in">
            <div className="about-name">About me</div>
            <p>
              Frontend engineer with five years building production interfaces, component systems,
              and the pipelines behind them. React and TypeScript are home base — AWS and CI/CD
              are never far behind.
            </p>
            <p>
              Currently at <strong>Adareth</strong>. Previously at <strong>Evolution ICT</strong>.
              On the side I build for founders and small teams who need things done properly.
            </p>
            <p>
              Based in <strong>Port Elizabeth</strong>. Open to remote roles.{" "}
              <a href="mailto:hello@andymutale.com">Say hello →</a>
            </p>
          </div>
          <div className="fade-in" style={{ transitionDelay: "0.1s" }}>
            <div className="sidebar-block">
              <span className="sidebar-label">Skills</span>
              <ul className="sidebar-list">
                {[
                  { skill: "React · Vue.js · TypeScript", type: "Frontend" },
                  { skill: "Zustand · React Query", type: "State" },
                  { skill: "Node.js · REST APIs", type: "Backend" },
                  { skill: "AWS · Docker · Kubernetes", type: "Cloud" },
                  { skill: "Figma · Storybook · Vite", type: "Tools" },
                ].map((s) => (
                  <li key={s.type}>
                    {s.skill} <span>{s.type}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sidebar-block">
              <span className="sidebar-label">Links</span>
              <a href="https://github.com/andymmutale" className="sidebar-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/andy-mutale" className="sidebar-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="sidebar-block">
              <span className="sidebar-label">Certifications</span>
              {[
                { name: "OCI 2023 Certified DevOps Professional", date: "Oct 2023" },
                { name: "OCI Data Management Foundations Associate", date: "Aug 2023" },
                { name: "OCI 2023 Foundations Associate", date: "Jul 2023" },
                { name: "Oracle Java Explorer", date: "Jul 2023" },
              ].map((cert) => (
                <div className="cert-item" key={cert.name}>
                  {cert.name}
                  <span className="cert-date">{cert.date}</span>
                </div>
              ))}
            </div>
            <div className="sidebar-block">
              <span className="sidebar-label">Contact</span>
              <a href="mailto:hello@andymutale.com" style={{ color: "var(--red)", textDecoration: "none", fontSize: 13.5, fontWeight: 300, display: "block", paddingTop: "0.3rem" }}>
                hello@andymutale.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyPanel
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}
