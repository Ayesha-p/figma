import Link from "next/link";
import search from "./public/images/search.png";
import Image from "next/image";

export default function Header() {
  return (
    <main>
<header className="flex bg-sky-200/100 text-black gap-20 mb-[100px] relative z-2">
<div>
          <h2 className="text-4xl p-4 	font-black	 ml-[60px] " style={{ fontFamily: "Stencil, sans-serif" }} >
            SHOEXPRESS</h2>
        </div>
        <div>
          <nav>
            <ul  className="flex gap-x-20 pt-5 font-bold ml-[100px]" style={{ fontFamily: 'Yu Gothic, sans-serif' }}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Shope</Link>
              </li>
              <li>
                <Link href="/">Orders</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/">Login</Link>
              </li>
              <li>
              <Image
            src={search}
            alt="Description of the image"
           width={20}
          />

              </li>
            </ul>
          </nav>
        </div>
      </header>
    </main>
  );
}
