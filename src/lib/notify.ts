import { Web } from "./web.ts";

export type NotifyResult = "inert" | "ok" | "error";

export class NotifyList {
  static endpoint(raw: string): string | null {
    const url = Web.url(raw);
    if (!url) return null;
    if (url.protocol === "https:") return url.toString();
    const local = url.hostname === "localhost" || url.hostname === "127.0.0.1";
    if (url.protocol === "http:" && local) return url.toString();
    return null;
  }

  static emailLooksValid(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  static async submit(endpoint: string, email: string): Promise<NotifyResult> {
    const url = NotifyList.endpoint(endpoint);
    if (!url) return "inert";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      return response.ok ? "ok" : "error";
    } catch {
      return "error";
    }
  }
}
