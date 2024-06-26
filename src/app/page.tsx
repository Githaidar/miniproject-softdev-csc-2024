import { TodoItem } from "@/components/TodoItem";
import { prisma } from "@/db";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useState, useEffect } from "react";

function getTodos() {
  
  return prisma.todo.findMany({ where: { hidden: false } })
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"
  try {
    await prisma.todo.update({ where: { id }, data: { complete } })
  } catch (error) {
    console.error("Gagal melakukan pembaruan data: ", error)
  }
}

async function hideTodo(id: string) {
  "use server"
  try {
    await prisma.todo.update({ where: { id }, data: { hidden: true } })
  } catch (error) {
    console.error("Gagal melakukan pembaruan data: ", error)
  }
}

export default async function Home() {
  const todos = await getTodos()

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">To-do</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            complete={todo.complete}
            toggleTodo={toggleTodo}
            deleteTodo={hideTodo} 
          />
        ))}
      </ul>
    </>
  )
}