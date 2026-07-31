import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Badge from "./ui/Badge";
import { profile } from "../data/profile";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 py-24 bg-[#F8FAFC]"
    >
      <Container>
        <SectionTitle
          title="About Me"
          subtitle="Scientist • Researcher • Lifelong Learner"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src="/images/profile.jpg"
              alt={profile.name}
              className="w-80 h-80 md:w-96 md:h-96 rounded-3xl object-cover shadow-2xl"
            />
          </div>

          {/* About Content */}
          <div>

            <h2 className="text-4xl font-bold text-[#0F172A]">
              {profile.name}
            </h2>

            <p className="mt-3 text-xl font-medium text-[#1F3A6E]">
              {profile.title}
            </p>

            <p className="mt-2 text-slate-500">
              {profile.institute}
            </p>

            <p className="mt-2 text-slate-500">
              Supervisor: {profile.supervisor}
            </p>

            <p className="mt-8 text-lg leading-8 text-slate-600 whitespace-pre-line">
              {profile.bio}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {profile.interests.map((interest) => (
                <Badge key={interest}>
                  {interest}
                </Badge>
              ))}
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}