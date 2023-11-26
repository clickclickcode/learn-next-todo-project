import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-2xl">Todos</h1>
        {/* These Link tags work just like an anchor tag, but needs to be imported prior to use */}
        <Link href='/new'>New</Link>
      </header>
      <ul></ul>
    </>
  )
}
