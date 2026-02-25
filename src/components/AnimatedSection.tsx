import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const AnimatedSection = ({ children, className = "", id }: SectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id={id}
      className={`section-padding transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
