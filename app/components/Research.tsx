import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import { research } from "../data/research";

export default function Research() {
  return (
    <section 
      id="research" 
      className="scroll-mt-28 py-24 bg-white" 
    >
      <Container>
        <SectionTitle
          title="Research Interests"
          subtitle="Research areas in computational chemistry and catalyst design."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {research.map((item) => (
            <Card key={item.title}>
              <h3 className="text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-5 leading-7 text-slate-600">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}