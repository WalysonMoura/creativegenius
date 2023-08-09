import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";

export default function Home() {
  return (
    <main className="h-full bg-[#111827] overflow-auto">
      <div className="h-full ">
        <LandingNavbar />
        
        <LandingContent />
      </div>
    </main>
  );
}
