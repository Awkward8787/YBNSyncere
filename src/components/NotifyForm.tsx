import { useState } from "react";
import type { FormEvent } from "react";
import { site } from "../content/site.ts";
import { NotifyList, type NotifyResult } from "../lib/notify.ts";

type Status = "idle" | "pending" | "invalid" | NotifyResult;

export function NotifyForm() {
  const [status, setStatus] = useState<Status>("idle");
  const live = NotifyList.endpoint(site.notify.endpoint) !== null;
  const message = status === "idle" || status === "pending" ? "" : site.notify.messages[status];

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();

    if (!NotifyList.emailLooksValid(email)) {
      setStatus("invalid");
      return;
    }

    if (!live) {
      setStatus("inert");
      return;
    }

    setStatus("pending");
    const result = await NotifyList.submit(site.notify.endpoint, email);
    setStatus(result);
    if (result === "ok") event.currentTarget.reset();
  }

  return (
    <section className="section notify" id="notify" aria-labelledby="notify-title">
      <div className="wrap notify-layout">
        <div>
          <h2 id="notify-title">{site.notify.heading}</h2>
          <p className="lede">{site.notify.body}</p>
        </div>
        <form
          className="notify-form"
          data-state={live ? "live" : "inert"}
          noValidate
          onSubmit={onSubmit}
        >
          <div className="field">
            <label htmlFor="notify-email">Email</label>
            <input
              id="notify-email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              required
              aria-describedby="notify-status"
            />
          </div>
          <button type="submit" disabled={status === "pending"}>
            {status === "pending" ? "Sending" : "Notify me"}
          </button>
          <p className="form-status" id="notify-status" role="status" aria-live="polite">
            {message}
          </p>
        </form>
      </div>
    </section>
  );
}
