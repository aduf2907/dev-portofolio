const AnimatedBorderButton = ({ children, href, target = "_self" }) => {
  const baseClass =
    "relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-foreground overflow-hidden group";

  const content = (
    <span className="relative z-10 flex items-center gap-2">{children}</span>
  );

  if (href) {
    return (
      <a href={href} target={target} className={baseClass}>
        {/* Border */}
        <span className="absolute inset-0 rounded-full border border-primary opacity-50"></span>

        {/* Animated Glow */}
        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 blur-md bg-primary/30"></span>

        {content}
      </a>
    );
  }

  return (
    <button className={baseClass}>
      <span className="absolute inset-0 rounded-full border border-primary opacity-50"></span>
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 blur-md bg-primary/30"></span>

      {content}
    </button>
  );
};

export default AnimatedBorderButton;
