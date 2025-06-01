import AboutCard from "@/components/AboutCard";
import SkillsCard from "@/components/SkillsCard";

export default function Home() {
    return (
        <div
            className="opacity-100 -translate-y-2 scale-[100%] grid place-items-center min-h-screen pt-8 sm:pt-12 md:pt-16 lg:pt-0 gap-12 md:gap-16 lg:gap-20 xl:justify-center px-4 sm:px-6 md:px-8 smooth relative">
            <div className="absolute inset-0 bg-gradient-radial from-emerald-500/10 via-emerald-300/5 to-transparent blur-3xl"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-300/10 rounded-full blur-3xl"></div>
            
            <div className="w-full max-w-[85rem] mx-auto relative z-10">
                <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
                    <div className="grid items-start gap-6 md:gap-8 w-full">
                        <AboutCard/>
                    </div>
                    <div className="grid items-stretch gap-6 md:gap-8">
                        <SkillsCard/>
                    </div>
                </div>
            </div>
        </div>
    );
}
