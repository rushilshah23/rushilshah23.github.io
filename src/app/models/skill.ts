/**
 * A single skill shown in the expertise section.
 */
export interface Skill {
  /** Display name, e.g. 'Docker'. */
  name: string;
  /** Path to the brand icon under /skills/, e.g. '/skills/docker.svg'. */
  icon: string;
}

/**
 * A named grouping of skills within the expertise section.
 * Skills are grouped by engineering domain (not rated with stars).
 */
export interface SkillDomain {
  /** Domain heading, e.g. 'Frontend'. */
  title: string;
  /** Skills belonging to this domain. */
  skills: Skill[];
}
