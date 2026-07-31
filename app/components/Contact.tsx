import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="scroll-mt-28 py-24 bg-[#F8FAFC]">
      <Container>

        <SectionTitle
          title="Get in Touch"
          subtitle="Feel free to contact me for research collaborations."
        />

        <div className="max-w-2xl mx-auto text-center">

          <p className="text-lg text-slate-600">
            📧 {profile.email}
          </p>

          <p className="mt-3 text-lg text-slate-600">
            🎓 {profile.institute}
          </p>

          <p className="mt-3 text-lg text-slate-600">
            📍 {profile.location}
          </p>

          <div className="mt-10">
            <Button href={`mailto:${profile.email}`}>
              Send Email
            </Button>
          </div>

        </div>

      </Container>
    </section>
  );
}