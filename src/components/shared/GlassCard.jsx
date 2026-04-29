/**
 * GlassCard — Reusable glass-morphism card wrapper
 */
export default function GlassCard({ children, className = '', onClick, hoverable = false }) {
  return (
    <div
      className={`glass-card ${hoverable ? 'glass-card--hoverable' : ''} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    >
      {children}
    </div>
  );
}
