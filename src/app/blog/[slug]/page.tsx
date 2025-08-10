import { InternalHeader } from '@/components/Header'
import SimpleFooter from '@/components/SimpleFooter'
import MarkdownContent from '@/components/MarkdownContent'
import BlogCard from '@/components/BlogCard'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog-data'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react'

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
  const relatedPosts = allPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <InternalHeader />
      
      {/* Main content with proper spacing for fixed header */}
      <main className="flex-1 pt-24 lg:pt-28 pb-0">
        {/* Article Header */}
        <article className="min-h-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-slate-700 hover:text-slate-900 text-sm font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour au blog
            </Link>
          </nav>

          {/* Article Meta */}
          <div className="mb-6">
            <div className="flex items-center space-x-3 text-sm text-gray-500 mb-3">
              <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-lg font-medium">
                {post.category}
              </span>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString('fr-FR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal leading-tight mb-4" style={{ fontFamily: 'Garamond, "Times New Roman", serif' }}>
              {post.title}
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {post.excerpt}
            </p>

            {/* Author & Share */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
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
              </div>

              <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors">
                <Share2 className="h-5 w-5" />
                <span className="text-sm">Partager</span>
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-48 md:h-64 mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-8">
            <MarkdownContent content={post.content} />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-gray-200">
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
                <p className="text-slate-600 text-sm mb-3">{post.author.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Expert en transformation digitale avec plus de 10 ans d&apos;expérience dans l&apos;accompagnement d&apos;entreprises vers l&apos;innovation et l&apos;excellence opérationnelle.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="pt-12 pb-12 border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">Articles similaires</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
      </main>
      
      <SimpleFooter />
    </div>
  )
} 