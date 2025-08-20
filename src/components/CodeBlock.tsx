'use client'

import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Copy, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CodeBlockProps {
  children: string
  language?: string
  className?: string
}

export function CodeBlock({ children, language = 'text', className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className={cn('relative group my-6', className)}>
      {/* Header bar */}
      <div className="flex items-center justify-between bg-gray-100 border border-gray-200 border-b-0 rounded-t-lg px-4 py-2">
        {/* Language badge */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <span className="ml-2 text-xs font-mono text-gray-600">
            {language}
          </span>
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="p-1.5 text-gray-500 hover:text-gray-900 transition-all duration-200 hover:scale-110"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 animate-pulse" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="relative overflow-hidden rounded-b-lg border border-t-0 border-gray-200">
        <SyntaxHighlighter
          language={language}
          style={oneLight}
          customStyle={{
            margin: 0,
            padding: '1rem',
            background: '#fafafa',
            fontSize: '0.875rem',
            lineHeight: '1.5',
          }}
          codeTagProps={{
            style: {
              fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
            }
          }}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}