function Header() {
	return (
		<header className="flex justify-between items-center p-8 shadow-md">
			<div className="pl-10">
				<p className="text-xl font-bold">Tr3ble</p>
			</div>
			<div className="flex space-x-4 pr-10">
				<p className="text-xl font-bold">Home</p>
				<p className="text-xl font-bold">Blog</p>
				<p className="text-xl font-bold">About</p>
				<p className="text-xl font-bold">Skills</p>
			</div>
		</header>
	);
}

export default Header;
