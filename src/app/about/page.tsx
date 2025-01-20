import { CatAboutImage } from "@/components/CatAboutImage";
import Header from "@/components/Header";

export default function About() {
	return (
		<>
			<Header />
      <div className="container mx-auto px-4 py-8 md:pt-44 max-w-7xl">
      <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start gap-8">
        <div className="w-full max-w-[300px] md:max-w-none md:w-5/12">
          <CatAboutImage />
        </div>
        <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-5/12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Nikita Tr3ble</h1>
          <p className="text-base md:text-lg">
            I began my web development journey in 2024, choosing Node.js and TypeScript as my primary stack. My goal is
            to become a full-stack developer capable of creating complex and high-performing web applications. I am
            currently delving deeper into front-end frameworks (e.g., React) and architectural patterns.
          </p>
        </div>
      </div>
    </div>
		</>
	);
}
