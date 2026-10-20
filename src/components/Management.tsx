import { site } from "../content/site.ts";

export function Management() {
  return (
    <section className="section management" id="management" aria-labelledby="management-title">
      <div className="wrap">
        <h2 id="management-title">
          <span className="mgmt-kicker">{site.management.kicker}</span>
          <span className="mgmt-name">{site.management.name}</span>
        </h2>
      </div>
    </section>
  );
}
