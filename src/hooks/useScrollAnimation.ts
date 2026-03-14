'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface Options {
  threshold?: number
  once?: boolean
  rootMargin?: string
}

/** Single element scroll reveal */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: Options = {}
) {
  const { threshold = 0.12, once = true, rootMargin = '0px 0px -60px 0px' } = options
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(el)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once, rootMargin])

  return { ref, isVisible }
}

/** Multiple elements — returns callback ref factory for staggered lists */
export function useRevealItems(count: number, options: Options = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -40px 0px' } = options
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const refs = useRef<(HTMLElement | null)[]>(Array(count).fill(null))
  const observerRef = useRef<IntersectionObserver | null>(null)

  const setRef = useCallback(
    (index: number) => (el: HTMLElement | null) => {
      refs.current[index] = el
    },
    []
  )

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisibleItems(new Set(Array.from({ length: count }, (_, i) => i)))
      return
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = refs.current.indexOf(entry.target as HTMLElement)
            if (index !== -1) {
              setVisibleItems((prev) => new Set([...prev, index]))
              observerRef.current?.unobserve(entry.target)
            }
          }
        })
      },
      { threshold, rootMargin }
    )

    refs.current.forEach((el) => {
      if (el) observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [count, threshold, rootMargin])

  return { setRef, visibleItems }
}
