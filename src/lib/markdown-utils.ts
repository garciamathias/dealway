import GithubSlugger from 'github-slugger'

export interface TocItem {
  id: string
  text: string
  level: number
}

export function extractHeadings(markdown: string): TocItem[] {
  const slugger = new GithubSlugger()
  const headings: TocItem[] = []
  
  const lines = markdown.split('\n')
  
  lines.forEach((line) => {
    const h2Match = line.match(/^## (.+)$/)
    const h3Match = line.match(/^### (.+)$/)
    
    if (h2Match) {
      const text = h2Match[1].trim()
      const id = slugger.slug(text)
      headings.push({ id, text, level: 2 })
    } else if (h3Match) {
      const text = h3Match[1].trim()
      const id = slugger.slug(text)
      headings.push({ id, text, level: 3 })
    }
  })
  
  return headings
}