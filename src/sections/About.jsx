import { Code2, Layout, Lightbulb, Users2 } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Write maintainable and well-structured code following best practices.",
  },
  {
    icon: Layout,
    title: "Responsive UI",
    description:
      "Build modern and responsive interfaces that work across all devices.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Break down complex problems and deliver efficient, practical solutions.",
  },
  {
    icon: Users2,
    title: "Collaboration",
    description:
      "Work effectivenly in teams, communicate ideas clearly, and adapt to feedback.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Turning ideas into reality,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one project at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a fullstack developer who enjoys turning ideas real,
                functional web applications. My journey started with a curiosity
                for how things work, and it has grown into a passion for
                building clean, responsive, and user-friendly digital products.
              </p>
              <p>
                I'm constantly learning and exploring new technologies, with a
                focus on creating impactful solutions and improving my skills as
                a developer.
              </p>
              <p>
                I mainly work with React.js for building interactive user
                interfaces, combined with Node.js and PostgreQL to handle
                backend logic and data management, allowing me to develop
                complete and scalable web applications.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                I aim to turn ideas into real, useful web applications —
                building solutions that are simple, effective, and meaningful
                for users.
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
