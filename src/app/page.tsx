import AboutCard from "@/components/AboutCard";
import SkillsCard from "@/components/SkillsCard";

export default function Home() {
    return (
        <div
            className="opacity-100 -translate-y-2 scale-[100%] grid place-items-center min-h-screen pt-12 sm:pt-0 gap-20 xl:justify-center px-8 smooth">
            <div className="w-full max-w-[85rem] mx-auto">
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="grid items-start gap-8 w-full">
                        <AboutCard/>
                    </div>
                    <div className="grid items-stretch gap-8">
                        <SkillsCard/>
                    </div>
                </div>
            </div>
        </div>
    );
}
