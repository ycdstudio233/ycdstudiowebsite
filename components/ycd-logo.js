/**
 * YCD Studio Logo Mark
 *
 * Geometric monogram: Y (top-left), C (top-right), D (bottom-right)
 * connected by a + crosshair at center. Rendered as white strokes
 * inside a rounded dark square — matching the existing header style.
 */
export function YCDLogo({ size = 36, className = "" }) {
  const strokeWidth = size <= 36 ? 2 : 2.5;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Y — top-left quadrant */}
      <line x1="6" y1="6" x2="13" y2="14" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="17" y1="6" x2="13" y2="14" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="13" y1="14" x2="13" y2="18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />

      {/* + crosshair — center */}
      <line x1="5" y1="18" x2="31" y2="18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="18" y1="5" x2="18" y2="31" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />

      {/* C — top-right quadrant */}
      <path
        d="M 30 10 A 7 7 0 1 0 30 17"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
      />

      {/* D — bottom-right quadrant */}
      <line x1="21" y1="21" x2="21" y2="31" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M 21 21 C 30 21 30 31 21 31"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
