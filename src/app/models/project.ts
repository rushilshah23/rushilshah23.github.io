/** A portfolio/side project with real outcomes. */
export interface Project {
  /** Unique route-friendly key. */
  id: string;
  /** Project name. */
  title: string;
  /** One-to-two sentence description, outcome-first. */
  summary: string;
  /** Technology tags shown on the card. */
  tags: string[];
  /** Optional media path under /projects/, e.g. '/projects/tic_tac_toe.svg'. */
  media?: string;
  /** Alt text for the media. */
  mediaAlt?: string;
  /** Live URL when public. */
  projectUrl?: string;
  /** Source code URL when public. */
  codeUrl?: string;
  /** Short label like '2024' or '2025'. */
  year: string;
  /** Prominent placement on the home page. */
  featured?: boolean;
  /** True when the repository is private (renders a lock instead of a link). */
  privateRepo?: boolean;
  /** Case-study problem statement (the gap this project closed). */
  problem?: string;
  /** High-level architecture: services, data stores, deploy target. */
  architecture?: string;
  /** Hard engineering challenge overcome. */
  challenge?: string;
  /** Measurable outcome (evidence > badge). */
  outcome?: string;
}
