/**
 * Contract for a single navigation link used across header/footer/mobile menus.
 */
export interface NavLink {
  /** Route path, e.g. '/services'. */
  path: string;
  /** Visible label. */
  label: string;
}
