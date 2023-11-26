import prisma from '@/db'
import Link from 'next/link'


function getTodos() {
  return prisma.todo.findMany()
}


export default async function Home() {

  // Just by initializing the app we also initialize the app router which allows us to call server code inside of our component
  // So by turning our 'Home' component into an async function we can call our server code to get our todos

  // We are using the 'await' keyword here to tell our function to wait for the response from our server before continuing
  const todos = await getTodos()

  // Here we are just adding a test todo to our database to see if it works
  // await prisma.todo.create({ data: {title: 'Test', complete: false}})


  return (
    <>
      <header className='flex justify-between items-center mb-4'>
        <h1 className="text-2xl">Todos</h1>
        {/* These Link tags work just like an anchor tag, but needs to be imported prior to use */}
        <Link href='/new' className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'>New</Link>
      </header>
      <ul className='pl-4'>
        {todos.map(todo => (
            <TodoItem key={todo.id} {...todo} />
          ))}
      </ul>
    </>
  )
}
