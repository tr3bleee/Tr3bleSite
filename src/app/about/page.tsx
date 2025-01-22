import { CatAboutImage } from "@/components/CatAboutImage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TechStack from "@/components/TechStack";
import ThemeToogle from "@/components/ThemeToogle";
export default function About() {
	return (
		<>
			<Header />
			<div className="container mx-auto px-4 py-8 md:pt-40 max-w-7xl min-h-screen">
				<div className="flex flex-col items-center md:flex-row md:justify-between md:items-start">
					<div className="w-full max-w-[300px] md:max-w-none md:w-5/12">
						<CatAboutImage />
					</div>
					<div className="flex flex-col items-center text-center md:text-left md:w-5/12">
						<p className="text-2xl md:text-4xl font-bold mb-4 mt-14">
							Nikita Tr3ble
						</p>
						<p className="text-base md:text-lg">
							I began my web development journey in 2024, choosing Node.js and
							TypeScript as my primary stack. My goal is to become a full-stack
							developer capable of creating complex and high-performing web
							applications. I am currently delving deeper into front-end
							frameworks (e.g., React) and architectural patterns.
						</p>
						<div className="mt-10 w-full flex justify-center">
							<TechStack />
						</div>
					</div>
				</div>
				<ThemeToogle />
			</div>
			<Footer />
		</>
	);
}
