'use client'

import { useState } from 'react'

export function useAccordion(defaultOpen: number | null = null) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  const isOpen = (index: number) => openIndex === index

  return { toggle, isOpen, openIndex }
}
