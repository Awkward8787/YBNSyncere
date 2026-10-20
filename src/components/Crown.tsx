type Props = {
  className?: string;
};

export function Crown({ className = "crown" }: Props) {
  return (
    <svg className={className} viewBox="0 0 48 28" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        d="M4 22.5 10 9 17 16 24 4.5 31 16 38 9 44 22.5Z"
      />
      <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M6 24.5h36" />
      <circle cx="24" cy="4.5" r="1.15" fill="currentColor" />
      <circle cx="10" cy="9" r="1.05" fill="currentColor" />
      <circle cx="38" cy="9" r="1.05" fill="currentColor" />
    </svg>
  );
}
