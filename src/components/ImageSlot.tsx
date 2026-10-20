import { useState } from "react";
import type { MediaSlot } from "../content/site.ts";
import { Images } from "../lib/images.ts";

type Props = {
  slot: MediaSlot;
  kind?: "portrait" | "cover";
  optional?: boolean;
  priority?: boolean;
  className?: string;
};

class ClassList {
  static join(...names: Array<string | false | undefined>): string {
    return names.filter(Boolean).join(" ");
  }
}

function Plate({ slot, kind }: { slot: MediaSlot; kind: "portrait" | "cover" }) {
  return (
    <div className={`plate plate-${kind}`} role="img" aria-label={slot.pendingAlt}>
      <span className="plate-inset" aria-hidden="true" />
      <span className={kind === "cover" ? "plate-title" : "plate-caption"}>{slot.pendingLabel}</span>
    </div>
  );
}

export function ImageSlot({
  slot,
  kind = "portrait",
  optional = false,
  priority = false,
  className,
}: Props) {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const path = slot.sources[index];
  const missed = path === undefined;

  if (missed) {
    if (optional) return null;
    return (
      <div className={ClassList.join("frame", className)}>
        <Plate slot={slot} kind={kind} />
        <span className="frame-grain" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div
      className={ClassList.join("frame", className, optional && !ready && "is-offstage")}
      aria-hidden={optional && !ready ? true : undefined}
    >
      {!ready ? <Plate slot={slot} kind={kind} /> : null}
      <img
        src={Images.url(path)}
        alt={ready ? slot.alt : ""}
        width={kind === "cover" ? 1200 : 960}
        height={kind === "cover" ? 1200 : 1200}
        decoding="async"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className={ready ? "is-ready" : undefined}
        aria-hidden={ready ? undefined : true}
        onLoad={() => setReady(true)}
        onError={() => {
          setReady(false);
          setIndex((current) => current + 1);
        }}
      />
      <span className="frame-grain" aria-hidden="true" />
    </div>
  );
}
