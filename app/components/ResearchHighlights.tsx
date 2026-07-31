import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";

const highlights = [
  {
    title: "Computational Chemistry",
    description:
      "Electronic structure calculations to understand catalytic mechanisms and reaction pathways.",
    icon: "🧪",
  },
  {
    title: "Homogeneous Catalysis",
    description:
      "Designing efficient molecular catalysts for sustainable nitrogen reduction.",
    icon: "⚛️",
  },
  {
    title: "Machine Learning",
    description:
      "Applying AI techniques to accelerate catalyst discovery and prediction.",
    icon: "🤖",
  },
  {
    title: "Bayesian Optimization",
    description:
      "Optimizing catalytic reactions with Gaussian Process–based Bayesian Optimization.",
    icon: "📈",
  },
  {
    title: "Nitrogen Reduction Reaction",
    description:
      "Understanding N₂ activation and selective NH₃ formation mechanisms.",
    icon: "🌱",
  },
  {
    title: "Sustainable Chemistry",
    description:
      "Developing environmentally friendly catalytic processes for future energy.",
    icon: "🌍",
  },
];

export default function ResearchHighlights() {
  return (
    <section 
      id="highlights"
      className="scroll-mt-28 py-24 bg-white"
    >
      <Container>
        <SectionTitle
          title="Research Highlights"
          subtitle="Key scientific areas that define my research."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <Card key={item.title}>
              <div className="text-5xl">{item.icon}</div>

              <h3 className="mt-5 text-2xl font-bold text-[#1F3A6E]">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}