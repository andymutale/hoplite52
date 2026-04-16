export type Category = "frontend" | "devops" | "freelance";

export interface Stat {
  num: string;
  label: string;
}

export interface Project {
  id: number;
  index: string;
  title: string;
  desc: string;
  tag: string;
  tags: string[];
  featured?: boolean;
  category: Category;
  year: string;
  // Case study
  heroBg: string;
  heroText: string;
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
  stats: Stat[];
}

export const projects: Project[] = [
  {
    id: 1,
    index: "01",
    title: "Interactive Dashboards — Real-Time Data Viz",
    desc: "React + Tailwind dashboards with live data updates and real-time telemetry integration. Built for production use across multiple internal teams at Adareth.",
    tag: "React · Tailwind · Featured",
    tags: ["React", "Tailwind"],
    featured: true,
    category: "frontend",
    year: "2024",
    heroBg: "#C8352A",
    heroText: "Dashboard",
    problem:
      "Multiple internal teams were working off static reports and delayed exports. There was no shared view of live operational data — decisions were being made on information that was hours old.",
    approach:
      "Built a modular React dashboard system with real-time data feeds via WebSocket. Each team got a configurable view built from a shared component library. React Query managed cache and revalidation so the UI stayed fresh without hammering the API.",
    outcome:
      "Live across multiple teams at Evolution ICT. Replaced a manual reporting process entirely. The shared component foundation also fed directly into the UI library built in Project 02.",
    stack: ["React", "TypeScript", "Tailwind CSS", "React Query", "WebSocket", "REST APIs"],
    stats: [
      { num: "3+", label: "Teams on the platform" },
      { num: "0", label: "Manual report exports remaining" },
    ],
  },
  {
    id: 2,
    index: "02",
    title: "UI Component Library — Shared Design System",
    desc: "Reusable React component library documented in Storybook. Reduced duplication across teams and accelerated feature delivery across multiple projects.",
    tag: "React · Storybook",
    tags: ["React", "Storybook"],
    category: "frontend",
    year: "2024",
    heroBg: "#1C1C1A",
    heroText: "Components",
    problem:
      "Components were being rebuilt from scratch on every project. Inconsistencies in spacing, colour, and interaction had crept into every product. New features were slow because nobody trusted the existing code.",
    approach:
      "Built a typed React component library from the ground up. Every component documented in Storybook with usage examples and prop tables. Tokens defined spacing and colour so updates propagated everywhere at once.",
    outcome:
      "Adopted across multiple projects. Onboarding new features became significantly faster. Storybook became the single source of truth for design and development conversations.",
    stack: ["React", "TypeScript", "Storybook", "SCSS", "Vite", "PNPM"],
    stats: [
      { num: "↑", label: "Feature delivery velocity" },
      { num: "1", label: "Source of truth for UI" },
    ],
  },
  {
    id: 3,
    index: "03",
    title: "Fleet Management — Vehicle Telemetry Platform",
    desc: "APIs and real-time data pipelines for vehicle telemetry and analytics using Node.js. Integrated with AWS services for storage and processing.",
    tag: "Node.js · AWS",
    tags: ["Node.js", "AWS"],
    category: "devops",
    year: "2024",
    heroBg: "#F5F2ED",
    heroText: "Fleet",
    problem:
      "Vehicle telemetry data was arriving from multiple sources with no unified pipeline. Operations teams had no real-time fleet view, and the existing logging was losing data under load.",
    approach:
      "Built Node.js APIs to ingest, normalise, and route telemetry events. Data pipelines pushed into AWS — Lambda for processing, DynamoDB for time-series storage, API Gateway for the frontend. Retry logic built into every stage.",
    outcome:
      "Real-time visibility across the fleet with reliable data delivery. Incidents that previously went undetected until a report run were surfaced immediately.",
    stack: ["Node.js", "AWS Lambda", "DynamoDB", "API Gateway", "S3", "GitHub Actions"],
    stats: [
      { num: "~0s", label: "Telemetry lag" },
      { num: "↓", label: "Data loss under load" },
    ],
  },
  {
    id: 4,
    index: "04",
    title: "E-commerce Platform — Full-Stack Build",
    desc: "Backend services on AWS Lambda and S3, paired with a responsive Tailwind CSS frontend. Delivered for a client via freelance engagement.",
    tag: "Freelance · AWS · Tailwind",
    tags: ["AWS", "Tailwind"],
    category: "freelance",
    year: "2023",
    heroBg: "#F2D84A",
    heroText: "Shop",
    problem:
      "A freelance client needed a full e-commerce build without the overhead of a platform like Shopify. They needed control over the stack and the data.",
    approach:
      "Backend on AWS Lambda and S3 with PostgreSQL for product and order data. Frontend a responsive mobile-first Tailwind build with a clean checkout flow. CI/CD via GitHub Actions kept deployments fast.",
    outcome:
      "Delivered on time and within scope. Client owns the infrastructure and the codebase — no platform dependency, no ongoing licence fees.",
    stack: ["AWS Lambda", "S3", "PostgreSQL", "JavaScript", "Tailwind CSS", "GitHub Actions"],
    stats: [
      { num: "100%", label: "Client-owned infrastructure" },
      { num: "0", label: "Platform licence fees" },
    ],
  },
  {
    id: 5,
    index: "05",
    title: "Cloud-Native Migration — Legacy to AWS",
    desc: "Migrated legacy systems to a fully cloud-native AWS architecture using Spring Boot, Kubernetes, and Terraform. Improved uptime, scalability, and deployment speed.",
    tag: "Kubernetes · Terraform · AWS",
    tags: ["Kubernetes", "Terraform", "AWS"],
    category: "devops",
    year: "2023",
    heroBg: "#1C1C1A",
    heroText: "Cloud",
    problem:
      "A legacy monolith was on bare metal with manual deployments. Downtime was frequent, scaling was impossible, and ops spent more time firefighting than shipping.",
    approach:
      "Migrated to AWS cloud-native using Spring Boot microservices, Kubernetes for orchestration, and Terraform for infrastructure as code. CloudWatch provided observability. GitHub Actions automated the full build and deploy pipeline.",
    outcome:
      "Deployment time reduced by 60%. Uptime improved significantly. The team could ship with confidence and scale services independently under load.",
    stack: ["AWS", "Kubernetes", "Terraform", "Spring Boot", "Docker", "CloudWatch", "GitHub Actions"],
    stats: [
      { num: "60%", label: "Faster deployments" },
      { num: "40%", label: "Faster incident response" },
    ],
  },
  {
    id: 6,
    index: "06",
    title: "Frontend Performance Refactor — 30–50% Load Time Gains",
    desc: "Modernized legacy React apps with code-splitting, lazy loading, and render optimization. Achieved 30–50% faster initial load times across multiple production applications.",
    tag: "React · Performance",
    tags: ["React", "Performance"],
    category: "frontend",
    year: "2023",
    heroBg: "#F5F2ED",
    heroText: "⚡",
    problem:
      "Legacy React apps had grown without performance discipline. Bundle sizes were bloated, everything loaded eagerly, and Core Web Vitals scores were hurting both UX and search ranking.",
    approach:
      "Audited with Lighthouse and Chrome DevTools. Introduced route-based code-splitting, lazy loading for heavy components, and memoisation to cut wasteful re-renders. Dynamic imports and tree-shaking throughout.",
    outcome:
      "30–50% faster initial load times across all refactored apps. Core Web Vitals in the green. Bounce rates dropped, session lengths increased.",
    stack: ["React", "TypeScript", "Vite", "Webpack", "Lighthouse", "Chrome DevTools"],
    stats: [
      { num: "50%", label: "Faster initial load" },
      { num: "↑", label: "Core Web Vitals scores" },
    ],
  },
  {
    id: 7,
    index: "07",
    title: "Startup Infrastructure Setup — CI/CD & Cloud Automation",
    desc: "Automated CI/CD pipelines and cloud infrastructure for early-stage startups using Python, Terraform, and GitHub Actions. Clients include Evolve Africa and The Way Church.",
    tag: "Freelance · Python · Terraform",
    tags: ["Python", "Terraform"],
    category: "freelance",
    year: "2022",
    heroBg: "#EAF3E0",
    heroText: "Infra",
    problem:
      "Clients including Evolve Africa and The Way Church were deploying manually — FTP uploads, SSH sessions, no rollback strategy. Every release was a risk and a time sink for the founding team.",
    approach:
      "Set up AWS infrastructure with Terraform so environments were reproducible and version-controlled. GitHub Actions handled CI/CD — automated testing, builds, zero-downtime deploys. Python scripts handled custom automation per client.",
    outcome:
      "Each client went from manual deploys to fully automated pipelines within weeks. Founders got time back. Infrastructure was now documented, repeatable, and owned.",
    stack: ["Python", "Terraform", "AWS", "GitHub Actions", "Docker", "Bash"],
    stats: [
      { num: "3", label: "Clients migrated" },
      { num: "0", label: "Manual deploy steps" },
    ],
  },
];
