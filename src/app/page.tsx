import Link from "next/link";

export default function Homepage() {
  return (
    <div>
      <nav className="bg-black p-2 flex justify-around">
        <Link href={'/about'} className="text-white  hover:text-blue-500">About</Link>
        <Link href={'/footer'} className="text-white  hover:text-blue-500">Footer</Link>
        <Link href={'/contact'} className="text-white  hover:text-blue-500">Contact</Link>
        <Link href={'Navbar'} className="text-white  hover:text-blue-500">Navbar</Link>

      </nav>
    </div>
  )
}