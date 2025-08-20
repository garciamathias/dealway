import { InternalHeader } from '@/components/Header'
import Footer from '@/components/Footer'
import FinalCTA from '@/components/FinalCTA'
import BlogCard from '@/components/BlogCard'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog-data'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, ArrowUpRight } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import { TableOfContents } from '@/components/TableOfContents'
import { extractHeadings } from '@/lib/markdown-utils'
import { CodeBlock } from '@/components/CodeBlock'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.id,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    notFound()
  }

  const allPosts = getAllBlogPosts()
  const otherPosts = allPosts
    .filter(p => p.id !== post.id)
    .slice(0, 3)

  // Extract headings for table of contents
  const tocItems = extractHeadings(post.content)
  
  // Check if content already has an Abstract heading
  const hasAbstractHeading = post.content.includes('## Résumé') || post.content.includes('## Abstract')

  return (
    <>
      {/* Contenu principal au-dessus du footer */}
      <div className="relative z-10 bg-white min-h-screen shadow-2xl rounded-b-[12px]">
        <InternalHeader />
        
        <main className="flex-1 pt-24">
          {/* Banner Image with Title */}
          <div className="relative w-full h-[420px] md:h-[600px] overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            {/* Top gradient fade */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-white via-white/60 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 via-30% to-transparent" />
            
            {/* Title and Metadata Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-12 pb-12">
                <div className="max-w-4xl">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 [text-shadow:_0_2px_20px_rgb(255_255_255_/_40%)] font-garamond">
                    {post.title}
                  </h1>
                  
                  <div className="flex items-center gap-6 text-gray-700 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.publishedAt).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gradient Transition */}
          <div className="relative h-48 -mt-48 bg-gradient-to-b from-transparent via-white/60 to-white pointer-events-none" />

          <article className="container mx-auto px-4 md:px-6 lg:px-8 mb-20">
            <div className="max-w-7xl mx-auto">

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Main Content - Center */}
                <div className="lg:col-span-8">
                  {/* Breadcrumb */}
                  <nav className="mb-8">
                    <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-gray-900 text-sm font-medium">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Retour au blog
                    </Link>
                  </nav>

                  {/* Author Info */}
                  <div className="flex items-center space-x-3 mb-8 pb-6 border-b border-gray-200">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover aspect-square"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{post.author.name}</p>
                      <p className="text-sm text-gray-500">{post.author.role}</p>
                    </div>
                    <span className="ml-auto bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">
                      {post.category}
                    </span>
                  </div>

                  {/* Markdown Content */}
                  <div className="prose prose-lg prose-gray max-w-none mt-8">
                    {!hasAbstractHeading && (
                      <h2 id="resume" className="text-2xl font-light mb-4 font-garamond">Résumé</h2>
                    )}
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw, rehypeSlug]}
                      components={{
                        h1: ({ children, ...props }) => <h1 className="text-3xl font-light mt-8 mb-4 font-garamond" {...props}>{children}</h1>,
                        h2: ({ children, ...props }) => <h2 className="text-2xl font-light mt-8 mb-4 font-garamond" {...props}>{children}</h2>,
                        h3: ({ children, ...props }) => <h3 className="text-xl font-light mt-6 mb-3 font-garamond" {...props}>{children}</h3>,
                        p: ({ children }) => <p className="mb-4 leading-relaxed text-gray-700">{children}</p>,
                        ul: ({ children }) => <ul className="mb-4 list-disc pl-6 text-gray-700">{children}</ul>,
                        ol: ({ children }) => <ol className="mb-4 list-decimal pl-6 text-gray-700">{children}</ol>,
                        li: ({ children }) => <li className="mb-2">{children}</li>,
                        blockquote: ({ children }) => (
                          <blockquote className="border-l-4 border-[#022543]/30 pl-4 italic my-4 text-gray-600">
                            {children}
                          </blockquote>
                        ),
                        a: ({ href, children, ...props }) => {
                          const isExternal = href?.startsWith('http://') || href?.startsWith('https://')
                          return (
                            <a
                              href={href}
                              className="text-[#022543] hover:text-[#022543]/80 underline decoration-[#022543]/30 hover:decoration-[#022543]/50 transition-all duration-200 inline-flex items-center gap-1"
                              target={isExternal ? "_blank" : undefined}
                              rel={isExternal ? "noopener noreferrer" : undefined}
                              {...props}
                            >
                              {children}
                              {isExternal && <ArrowUpRight className="h-4 w-4 inline-block" />}
                            </a>
                          )
                        },
                        pre: ({ children }) => {
                          return <>{children}</>
                        },
                        code: ({ className, children, ...props }) => {
                          const match = /language-(\w+)/.exec(className || "")
                          const isInline = !match
                          
                          if (isInline) {
                            return (
                              <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 text-sm font-mono" {...props}>
                                {children}
                              </code>
                            )
                          }
                          
                          return (
                            <CodeBlock language={match[1]} className="not-prose">
                              {String(children).replace(/\n$/, "")}
                            </CodeBlock>
                          )
                        },
                      }}
                    >
                      {post.content}
                    </ReactMarkdown>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-12 mb-8 pb-6 border-b border-gray-200">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Author Bio */}
                  <div className="bg-gray-50 rounded-lg p-5 mb-12">
                    <div className="flex items-start space-x-4">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={64}
                        height={64}
                        className="rounded-full object-cover aspect-square"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{post.author.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{post.author.role}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Expert en transformation digitale avec plus de 10 ans d&apos;expérience dans l&apos;accompagnement d&apos;entreprises vers l&apos;innovation et l&apos;excellence opérationnelle.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Table of Contents Sidebar - Right */}
                <aside className="lg:col-span-4">
                  <div className="sticky top-32">
                    <div className="pl-8">
                      <TableOfContents items={tocItems} />
                    </div>

                    {/* More Articles */}
                    {otherPosts.length > 0 && (
                      <div className="mt-16 pl-8">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">Plus d&apos;articles</h3>
                        <div className="space-y-4">
                          {otherPosts.map((otherPost) => (
                            <Link
                              key={otherPost.id}
                              href={`/blog/${otherPost.id}`}
                              className="block group"
                            >
                              <div className="flex gap-4">
                                <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded">
                                  <Image
                                    src={otherPost.image}
                                    alt={otherPost.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                  />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-medium line-clamp-2 group-hover:text-[#022543] transition-colors">
                                    {otherPost.title}
                                  </h4>
                                  <p className="text-sm text-gray-500 mt-1">
                                    {otherPost.readingTime}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </aside>
              </div>
            </div>
          </article>
          
          {/* Final CTA Section */}
          <FinalCTA />
        </main>
      </div>
      
      {/* Footer collant (révélé en bas, sans espace blanc supplémentaire) */}
      <Footer />
    </>
  )
}