import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="scroll-mt-28 py-24 bg-white"
    >

      <Container>

        <SectionTitle
          title="Projects"
          subtitle="Selected computational chemistry and machine learning projects."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <Card key={project.title}>

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-5 text-slate-600 leading-7">
                {project.description}
              </p>

            </Card>

          ))}

        </div>

      </Container>

    </section>
  );
}