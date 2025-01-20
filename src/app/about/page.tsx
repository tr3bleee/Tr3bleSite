import { CatAboutImage } from "@/components/CatAboutImage";
import Header from "@/components/Header";

export default function About() {
	return (
		<>
			<Header />
			<div className="flex items-center pt-36 pl-20 gap-8">
				<CatAboutImage />
				<div className="flex flex-col pl-32">
					<h1 className="text-4xl font-bold">Nikita Tr3ble</h1>
					<p className="text-lg w-[400px]">
						I began my web development journey in 2024, choosing Node.js and
						TypeScript as my primary stack. My goal is to become a full-stack
						developer capable of creating complex and high-performing web
						applications. I am currently delving deeper into front-end
						frameworks (e.g., React) and architectural patterns.
					</p>
				</div>
			</div>
		</>
	);
}
