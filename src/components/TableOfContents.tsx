'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export interface TocItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  items: TocItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id)
            }
          })
        },
        {
          rootMargin: '-80px 0% -80% 0%',
          threshold: 0,
        }
      )

      const headings = document.querySelectorAll('h2[id], h3[id]')
      headings.forEach((heading) => observer.observe(heading))

      return () => {
        headings.forEach((heading) => observer.unobserve(heading))
      }
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  if (items.length === 0) {
    return null
  }

  return (
    <nav className="space-y-1">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">Table des matières</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="transition-all duration-200"
          >
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={cn(
                'block py-2 text-sm leading-relaxed transition-all duration-200 border-l-2',
                item.level === 2 ? 'pl-4' : 'pl-8',
                activeId === item.id
                  ? 'text-gray-900 font-medium border-[#022543]'
                  : 'text-gray-500 hover:text-gray-700 border-transparent hover:border-gray-300'
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}