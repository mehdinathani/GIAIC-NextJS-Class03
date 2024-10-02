import Link from "next/link"

export default function Home() {
  return <div>
    <h1>Home</h1>
    <p>Esta é a página inicial</p>
    <Link href="/produtos">Produtos</Link>
  </div>
}