import Link from "next/link";

function Header() {
	return (
		<header className="flex justify-between items-center p-8 shadow-md">
			<div className="pl-10">
				<p className="text-xl font-bold">Tr3ble</p>
			</div>
			<div className="flex space-x-4 pr-10">
				<Link href="/" className="text-xl font-bold hover:text-purple-600 transition-colors duration-500">
					Home
				</Link>
				<Link href="/blog" className="text-xl font-bold hover:text-purple-600 transition-colors duration-500">
					Blog
				</Link>
				<Link href="/about" className="text-xl font-bold hover:text-purple-600 transition-colors duration-500">
					About
				</Link>
				<Link href="/skills" className="text-xl font-bold hover:text-purple-600 transition-colors duration-500">
					Skills
				</Link>
			</div>
		</header>
	);
}

export default Header;
