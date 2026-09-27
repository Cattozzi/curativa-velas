export default function CandleIcon({ corCera = '#c97c1e', tamanho = 64 }) {
  return (
    <svg width={tamanho} height={tamanho} viewBox="0 0 64 64" aria-hidden="true">
      <ellipse cx="32" cy="54" rx="16" ry="4" fill="rgba(0,0,0,0.08)" />
      <rect x="16" y="22" width="32" height="30" rx="4" fill={corCera} />
      <rect x="16" y="22" width="32" height="8" rx="4" fill="rgba(255,255,255,0.25)" />
      <circle cx="32" cy="20" r="1.6" fill="#3b2a1a" />
      <path d="M32 8c3 4 3 7 0 9-3-2-3-5 0-9z" fill="#f2a73b" />
      <path d="M32 11c1.4 2 1.4 3.4 0 4.6-1.4-1.2-1.4-2.6 0-4.6z" fill="#ffe9b0" />
    </svg>
  );
}
