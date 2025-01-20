import Link from "next/link"
import MobileMenu from "./MobileMenu"

function Header() {
  return (
    <header className="flex justify-between items-center p-5 shadow-md">
      <div className="pl-4 lg:pl-10">
        <p className="text-2xl font-bold">Tr3ble</p>
      </div>
      <div className="hidden md:flex space-x-4 pr-10">
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
      <MobileMenu />
    </header>
  )
}

export default Header

