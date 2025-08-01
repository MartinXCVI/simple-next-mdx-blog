"use client"

import { ComponentProps, useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

type ThemeProviderProps = ComponentProps<typeof NextThemesProvider>

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(()=> {
    setMounted(true)
  }, [])

  if(!mounted) {
    return
    <>
      {children}
    </>
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}