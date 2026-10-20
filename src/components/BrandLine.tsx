import { site } from "../content/site.ts";
import { ImageSlot } from "./ImageSlot.tsx";

export function BrandLine() {
  return (
    <div className="epigraph">
      <div className="wrap">
        <ImageSlot slot={site.brand.image} optional className="brand-frame" />
        <p>{site.brand.line}</p>
      </div>
    </div>
  );
}
