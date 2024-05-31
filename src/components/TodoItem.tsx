// /components/TodoItem.tsx

"use client"

type TodoItemProps = {
  id: string
  title: string
  description: string
  complete: boolean
  toggleTodo: (id: string, complete: boolean) => void
  deleteTodo: (id: string) => void
}

export function TodoItem({ id, title, description, complete, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={e => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title} - {description}
      </label>
      <button
        onClick={() => deleteTodo(id)}
        className="border border-red-500 text-red-500 px-2 py-1 rounded hover:bg-red-700 focus-within:bg-red-700 outline-none"
      >
        Delete
      </button>
    </li>
  )
}
