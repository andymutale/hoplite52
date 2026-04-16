export interface Note {
  id: number;
  title: string;
  category: string;
  readTime: string;
  date: string;
  href: string;
}

export const notes: Note[] = [
  {
    id: 1,
    title: "Building a reusable React component library with Storybook",
    category: "Frontend",
    readTime: "6 min read",
    date: "Mar 2025",
    href: "#",
  },
  {
    id: 2,
    title: "CI/CD for frontend teams: GitHub Actions in practice",
    category: "DevOps",
    readTime: "5 min read",
    date: "Jan 2025",
    href: "#",
  },
  {
    id: 3,
    title: "Optimizing React performance: code-splitting and lazy loading",
    category: "Performance",
    readTime: "7 min read",
    date: "Nov 2024",
    href: "#",
  },
];
