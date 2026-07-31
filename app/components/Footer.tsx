import { Mail, GraduationCap, MapPin } from "lucide-react";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-14 mt-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold">
          {profile.name}
        </h2>

        <p className="mt-3 text-slate-300">
          {profile.title}
        </p>

        <div className="mt-8 space-y-3">

          <div className="flex items-center gap-3">
            <Mail size={18}/>
            <span>{profile.email}</span>
          </div>

          <div className="flex items-center gap-3">
            <GraduationCap size={18}/>
            <span>{profile.institute}</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={18}/>
            <span>{profile.location}</span>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-slate-400">
          © {new Date().getFullYear()} {profile.name}. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}