export class Images {
  static url(path: string): string {
    const base = import.meta.env.BASE_URL || "/";
    const normalized = base.endsWith("/") ? base : `${base}/`;
    return `${normalized}${path.replace(/^\//, "")}`;
  }
}
