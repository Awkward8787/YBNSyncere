import { useEffect, useState } from "react";
import type { MediaSlot } from "../content/site.ts";
import { Images } from "../lib/images.ts";

type Kind = "hero" | "cover" | "logo";

type Props = {
  slot: MediaSlot;
  kind: Kind;
  priority?: boolean;
  className?: string;
  onReady?: (ready: boolean) => void;
};

class ClassList {
  static join(...names: Array<string | false | undefined>): string {
    return names.filter(Boolean).join(" ");
  }
}

function TypesetCover({ slot, className }: { slot: MediaSlot; className?: string }) {
  return (
    <div className={ClassList.join("cover-set", className)} role="img" aria-label={slot.pendingAlt}>
      <p>{slot.pendingLabel}</p>
    </div>
  );
}

export function ImageSlot({ slot, kind, priority = false, className, onReady }: Props) {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const path = slot.sources[index];
  const missed = path === undefined;

  useEffect(() => {
    if (missed) onReady?.(false);
  }, [missed, onReady]);

  if (missed) {
    if (kind === "cover") return <TypesetCover slot={slot} className={className} />;
    return null;
  }

  return (
    <img
      className={ClassList.join(
        kind === "hero" && "hero-photo",
        kind === "cover" && "cover-photo",
        kind === "logo" && "logo",
        ready && "is-ready",
        className,
      )}
      src={Images.url(path)}
      alt={ready ? slot.alt : ""}
      width={kind === "logo" ? 240 : 1200}
      height={kind === "logo" ? 80 : 1200}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      aria-hidden={ready ? undefined : true}
      onLoad={() => {
        setReady(true);
        onReady?.(true);
      }}
      onError={() => {
        setReady(false);
        onReady?.(false);
        setIndex((current) => current + 1);
      }}
    />
  );
}
