import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, page }) {
  return (
    <div className="bg-blue-50 pt-5 text-center min-h-screen">
  <Head>
    <title>{page}</title>
  </Head>
  <header className="container-lg">
    <h1 className="text-5xl mb-2">CRYPTO WATCH</h1>
    <nav className="inline-grid grid-cols-2 gap-x-10 p-4">
      <Link href="/" passHref>
        <button className="bg-red-200 p-3 m-2 rounded-3xl border-2 border-red-300 hover:shadow-md">
          Home
        </button>
      </Link>
      <Link href="/about" passHref>
        <button className="bg-red-200 p-3 m-2 rounded-3xl border-2 border-red-300 hover:shadow-md">
          About
        </button>
      </Link>
    </nav>
    <div>
      <Image src="/main.jpg" alt="header-pic" width="700" height="75" className="rounded-3xl object-cover" loading="lazy" quality={60}/>
    </div>
  </header>
  <main className="pt-4 mx-20">
  {children}
  </main>
  <footer className="p-10">
    <Image src="/main.jpg" alt="footer-pic" width="1200" height="150" className="rounded-3xl object-cover" loading="lazy" quality={60}/>
    <ul className="pt-10 pb-4 flex justify-around">
      <li>About</li>
      <li>FAQ</li>
      <li>Made with Next.Js, Tailwind, ☕ & 💖</li>
      <li>&copy; - AB/2 Creations</li>
    </ul>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores officiis cumque facere ab excepturi numquam doloribus libero eligendi, aliquam accusamus aperiam. Accusamus magni voluptatem architecto possimus itaque autem quasi libero id. A nam aspernatur officiis maiores, molestias aliquam accusantium reiciendis.</p>
  </footer>
  <style jsx>
  {`
  p{
    color:grey
  }
  `}
  </style>
    </div>
)
}