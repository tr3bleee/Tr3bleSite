import {
	SiTypescript,
	SiReact,
	SiNextdotjs,
	SiTailwindcss,
	SiExpress,
	SiPrisma,
	SiJavascript,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function TechStack() {
	return (
		<div>
			<p className="font-bold text-xl">TechStack</p>
			{/* logos in row */}
			<div className="flex flex-row gap-4">
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<SiJavascript size={30} />
					</TooltipTrigger>
					<TooltipContent>
						<p className="font-semibold">JavaScript</p>
					</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<SiTypescript size={30} />
					</TooltipTrigger>
					<TooltipContent>
						<p className="font-semibold">TypeScript</p>
					</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<SiReact size={30} />
					</TooltipTrigger>
					<TooltipContent>
						<p className="font-semibold">React</p>
					</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<SiNextdotjs size={30} />
					</TooltipTrigger>
					<TooltipContent>
						<p className="font-semibold">Next.js</p>
					</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<SiTailwindcss size={30} />
					</TooltipTrigger>
					<TooltipContent>
						<p className="font-semibold">TailwindCSS</p>
					</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<SiExpress size={30} />
					</TooltipTrigger>
					<TooltipContent>
						<p className="font-semibold">Express</p>
					</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<SiPrisma size={30} />
					</TooltipTrigger>
					<TooltipContent>
						<p className="font-semibold">Prisma</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
			</div>
		</div>
	);
}

export default TechStack;