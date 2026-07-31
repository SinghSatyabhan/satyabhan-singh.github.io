import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

const timeline = [
  {
    year: "Present",
    title: "PhD Researcher",
    place: "Indian Institute of Technology Bombay",
    description:
      "Research in computational chemistry, homogeneous catalysis, machine learning, and Bayesian Optimization for sustainable ammonia synthesis.",
  },

  {
    year: "Future",
    title: "Independent Researcher",
    place: "Academic & Scientific Community",
    description:
      "Developing AI-driven catalyst discovery platforms for sustainable chemistry.",
  },
];

export default function Timeline() {
  return (
    <section 
     id="timeline" 
     className="scroll-mt-28 py-24 bg-white"
    >
      <Container>

        <SectionTitle
          title="Academic Journey"
          subtitle="My research journey and future vision."
        />

        <div className="max-w-4xl mx-auto">

          {timeline.map((item) => (

            <div
              key={item.title}
              className="relative border-l-4 border-[#1F3A6E] pl-10 pb-12"
            >

              <div className="absolute -left-[10px] top-2 h-4 w-4 rounded-full bg-[#1F3A6E]" />

              <p className="text-sm font-semibold text-[#1F3A6E]">
                {item.year}
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-slate-500">
                {item.place}
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}