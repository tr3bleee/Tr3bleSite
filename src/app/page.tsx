"use client";

import Header from "@/components/Header";
import { FaTelegram, FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import ThemeToogle from "@/components/ThemeToogle";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<>
			<Header />
			<main className="flex min-h-screen animate-fade-in">
				<div className="flex flex-col ml-6 md:ml-52 mt-48">
					<div className="gap-12">
						<h1 className="text-5xl font-bold md:text-7xl">
							Hi, <br /> I am <span className="bg-gradient-to-r from-cyan-200 to-violet-600 bg-clip-text text-transparent">Tr3ble</span>
						</h1>
						<h2 className="text-2xl md:text-4xl font-bold text-gray-600 dark:text-gray-400">
							<TypeAnimation
								sequence={[
									"i am a Full-Stack Developer",
									1000,
									"i am a JavaScript Developer",
									1000,
									"and TypeScript also",
									1000,
									"i write code :3",
									1000,
									"love building things <3",
									1000,
								]}
								repeat={Infinity}
								wrapper="span"
								speed={1}
								style={{ display: "inline-block" }}
							/>
						</h2>
						{/* icons telegram and github */}
						<div className="flex space-x-4 mt-5">
							<a
								href="https://github.com/y9tr3ble"
								target="_blank"
								rel="noopener noreferrer"
								className="text-4xl"
							>
								<FaGithub />
							</a>
							<a
								href="https://t.me/tr3ble"
								target="_blank"
								rel="noopener noreferrer"
								className="text-4xl"
							>
								<FaTelegram />
							</a>
						</div>
					</div>
				</div>
			</main>
			<ThemeToogle />
			<Footer />
		</>
	);
}
