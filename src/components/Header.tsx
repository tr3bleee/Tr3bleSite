import Link from "next/link"
import MobileMenu from "./MobileMenu"

function Header() {
  return (
    <header className="flex justify-between items-center p-5 shadow-md">
      <div className="pl-2 lg:pl-48 md:flex">
        <p className="text-2xl font-semibold">Tr3ble</p>
      </div>
      <div className="hidden md:flex space-x-4 pr-10 lg:pr-48">
        <Link href="/" className="text-xl font-semibold hover:text-purple-600 transition-colors duration-500">
          Home
        </Link>
        <Link href="/blog" className="text-xl font-semibold hover:text-purple-600 transition-colors duration-500">
          Blog
        </Link>
        <Link href="/about" className="text-xl font-semibold hover:text-purple-600 transition-colors duration-500">
          About
        </Link>
      </div>
      <MobileMenu />
    </header>
  )
}

export default Header

