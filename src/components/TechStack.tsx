import {
	SiTypescript,
	SiReact,
	SiNextdotjs,
	SiTailwindcss,
	SiFastify,
	SiPrisma,
	SiPostgresql,
} from "react-icons/si";

function TechStack() {
	return (
		<div>
			<p className="font-bold text-xl">TechStack</p>
			{/* logos in row */}
			<div className="flex flex-row gap-4">
				<SiTypescript size={30} />
				<SiReact size={30} />
				<SiNextdotjs size={30} />
				<SiTailwindcss size={30} />
				<SiFastify size={30} />
				<SiPrisma size={30} />
				<SiPostgresql size={30} />
			</div>
		</div>
	);
}

export default TechStack;
