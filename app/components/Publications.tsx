import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import { publications } from "../data/publications";

export default function Publications() {
  return (
    <section 
     id="publications" 
     className="scroll-mt-28 py-24 bg-[#F8FAFC]"
    >
      <Container>

        <SectionTitle
          title="Publications"
          subtitle="Research articles and scientific publications."
        />

        <div className="space-y-6">

          {publications.map((paper, index) => (

            <Card key={index}>

              <h3 className="text-2xl font-bold text-[#1F3A6E]">
                {paper.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {paper.authors}
              </p>

              <p className="mt-2 text-slate-500">
                {paper.journal} • {paper.year}
              </p>

              <span className="inline-block mt-5 rounded-full bg-[#EAF2FF] px-4 py-2 text-sm font-medium text-[#1F3A6E]">
                {paper.status}
              </span>

              {paper.doi && (
                <a
                  href={`https://doi.org/${paper.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 text-[#1F3A6E] hover:underline"
                >
                  View DOI
                </a>
              )}

            </Card>

          ))}

        </div>

      </Container>
    </section>
  );
}