'use client'

interface MarkdownContentProps {
  content: string
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  // Simple markdown parser pour les éléments de base
  const parseMarkdown = (text: string) => {
    return text
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold mt-8 mb-6 first:mt-0">{line.slice(2)}</h1>
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-semibold mt-6 mb-4">{line.slice(3)}</h2>
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-semibold mt-5 mb-3">{line.slice(4)}</h3>
        }

        // Lists
        if (line.startsWith('- ')) {
          return (
            <li key={index} className="ml-6 list-disc mb-2">
              {parseInlineMarkdown(line.slice(2))}
            </li>
          )
        }
        if (/^\d+\. /.test(line)) {
          const match = line.match(/^\d+\. (.*)/)
          return (
            <li key={index} className="ml-6 list-decimal mb-2">
              {match ? parseInlineMarkdown(match[1]) : ''}
            </li>
          )
        }

        // Empty lines
        if (line.trim() === '') {
          return <br key={index} />
        }

        // Paragraphs
        return (
          <p key={index} className="mb-4 leading-relaxed">
            {parseInlineMarkdown(line)}
          </p>
        )
      })
  }

  const parseInlineMarkdown = (text: string) => {
    // Bold text
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
    
    return <span dangerouslySetInnerHTML={{ __html: text }} />
  }

  return (
    <div className="prose prose-lg max-w-none">
      {parseMarkdown(content)}
    </div>
  )
} 