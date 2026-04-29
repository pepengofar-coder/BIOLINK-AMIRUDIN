/**
 * SectionTitle — Consistent heading for each content section
 */
export default function SectionTitle({ children, subtitle }) {
  return (
    <div className="section-title">
      <h2 className="section-title__heading">{children}</h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
      <div className="section-title__divider" />
    </div>
  );
}
