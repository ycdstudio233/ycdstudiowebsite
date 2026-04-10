/**
 * YCD Studio Logo Mark
 *
 * Renders the actual YCD brand mark PNG.
 * White version for dark backgrounds (header, blog sidebar).
 */
export function YCDLogo({ size = 30, className = "" }) {
  return (
    <img
      src="/logos/YCD-white.png"
      alt=""
      width={size}
      height={size}
      className={`ycd-logo ${className}`}
      aria-hidden="true"
      style={{ objectFit: "contain", display: "block" }}
    />
  );
}
