"use client"

import Header from "@/components/Header";
import { FaTelegram, FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
	return (
    <>
      <Header />
      <div>
        <div className="flex flex-col ml-12 md:ml-28 mt-44">
          <div className="gap-12">
					<h1 className="text-6xl font-bold">
						Hi, <br /> I am <span className="text-purple-600">
							<TypeAnimation
								sequence={[
									"Tr3ble",
									1000
								]}
								repeat={Infinity}
								wrapper="span"
								speed={1}
								style={{ display: "inline-block" }}
							/>
						</span>
					</h1>
					<h2 className="text-2xl font-bold">
						I am a Full-Stack Developer
					</h2>
					{/* icons telegram and github */}
					<div className="flex space-x-4 mt-5">
						<a href="https://github.com/y9tr3ble" target="_blank" rel="noopener noreferrer" className="text-4xl">
							<FaGithub />
						</a>
						<a href="https://t.me/tr3ble" target="_blank" rel="noopener noreferrer" className="text-4xl">
							<FaTelegram />
						</a>
					</div>
				</div>
			</div>
		</div>
    </>
	);
}
