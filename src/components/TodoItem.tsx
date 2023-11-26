
//Defining the type of the props - TodoItemProps
type TodoItemProps = {
    id: string
    title: string
    complete: boolean
}

// This is a NAMED export therefor we need to use the curly braces when importing
export function TodoItem({ id, title, complete }: TodoItemProps) {
    return (
        <li className="flex gap-1 items-center">
            <input id={id} type='checkbox' className="cursor-pointer peer" />
            <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">{title}</label>
        </li>
    )
}