import Link from 'next/link'
import prisma from '@/db'
import { redirect } from 'next/navigation'

// Here we are creating a server action that will create a new todo item in our database
// ASYNC function. This is important
async function createTodo(data: FormData) {
    // To run this function on the server we need to write 'use server'
    // This is telling us that this is server code and that it will NEVER run on the client
    // We have to enable/add 'experimental.serverActions' to our next.config.js file - This was the case in Next 13, but no longer needed in Next 14
    'use server'

    // Here we are using the 'data' parameter that we passed into the function to get the title of the todo item that we want to create
    // The 'title' is the name of the input field that we want to get the value from
    const title = data.get('title')?.valueOf()

    // Here we are checking to make sure that the title is a string and that it is not empty
    if (typeof title !== 'string' || title.length === 0) {
        throw new Error('Invalid title')
    }

    await prisma.todo.create({ data: { title, complete: false}})
    redirect('/')

}

export default function New() {
    return (
        <>
            <header className='flex justify-between items-center mb-4'>
                <h1 className="text-2xl">New</h1>
            </header>
            <form action={createTodo} className="flex gap-2 flex-col">
                <input
                    type="text"
                    name="title"
                    className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
                />
                <div className='flex gap-1 justify-end'>
                    {/* typing href='..' is essentially the same as when navigating folders in the terminal */}
                    {/* typing href='..' is equivalent to 'cd ..' so clicking the 'Cancel' Link/button will send us back to the root */}
                    <Link href='..' className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'>Cancel</Link>
                    <button type='submit' className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'>Create</button>
                </div>
            </form>
        </>
    )
}