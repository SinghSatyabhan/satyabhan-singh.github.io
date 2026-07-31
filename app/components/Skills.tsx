import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";

const skillGroups = [
  {
    title: "Computational Chemistry",
    skills: ["Gaussian", "ORCA", "Density Functional Theory (DFT)"],
  },
  {
    title: "Programming",
    skills: ["Python", "Git", "Linux"],
  },
  {
    title: "Machine Learning",
    skills: [
      "Machine Learning",
      "Bayesian Optimization",
      "Gaussian Processes",
    ],
  },
  {
    title: "Web & Visualization",
    skills: ["Next.js", "React", "Tailwind CSS"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-28 py-24 bg-[#F8FAFC]"
    >
      <Container>
        <SectionTitle
          title="Technical Skills"
          subtitle="Software, programming languages, and research expertise."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <Card key={group.title}>
              <h3 className="text-2xl font-bold text-[#1F3A6E]">
                {group.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#EAF2FF] px-4 py-2 text-sm font-medium text-[#1F3A6E]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}