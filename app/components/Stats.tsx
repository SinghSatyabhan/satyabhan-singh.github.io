import Container from "./ui/Container";

const stats = [
  {
    value: "5+",
    label: "Research Areas",
  },
  {
    value: "100%",
    label: "Research Focus",
  },
  {
    value: "PhD",
    label: "IIT Bombay",
  },
  {
    value: "AI + Chemistry",
    label: "Research Direction",
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-white border-y border-slate-200">

      <Container>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

          {stats.map((item) => (

            <div key={item.label}>

              <h3 className="text-4xl font-bold text-[#1F3A6E]">
                {item.value}
              </h3>

              <p className="mt-3 text-slate-600">
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}