"use client"

import "./styles.css"
import { useState } from "react"
import { Button } from "./components/button"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"

export default function App() {
  const [counter, setCounter] = useState(0)

  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col h-screen">
        {/* Menu at the top */}
        <div className="p-4 bg-gray-200 flex flex-wrap gap-2">
          <Button variant="default" onClick={incrementCounter}>
            Default
          </Button>
          <Button variant="destructive" onClick={incrementCounter}>
            Destructive
          </Button>
          <Button variant="outline" onClick={incrementCounter}>
            Outline
          </Button>
          <Button variant="secondary" onClick={incrementCounter}>
            Secondary
          </Button>
          <Button variant="ghost" onClick={incrementCounter}>
            Ghost
          </Button>
          <Button variant="link" onClick={incrementCounter}>
            Link
          </Button>
          <ModeToggle className="ml-auto" />
        </div>

        {/* Counter in the center */}
        <div className="flex-grow flex items-center justify-center">
          <h1 className="text-4xl">{counter}</h1>
        </div>
      </div>
    </ThemeProvider>
  )
}
