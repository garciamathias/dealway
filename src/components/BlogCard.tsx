import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '@/lib/blog-data'
import { Calendar } from 'lucide-react'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <Link href={`/blog/${post.id}`}>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-slate-900/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg shadow-lg">
              {post.category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-slate-800 transition-colors line-clamp-2">
            {post.title}
          </h2>
          
          <p className="text-gray-600 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{new Date(post.publishedAt).toLocaleDateString('fr-FR', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
        </div>
      </Link>
    </article>
  )
} 