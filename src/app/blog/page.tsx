'use client'

import { useState, useEffect, useMemo } from 'react'
import { InternalHeader } from '@/components/Header'
import SimpleFooter from '@/components/SimpleFooter'
import BlogCard from '@/components/BlogCard'
import BlogFilters from '@/components/BlogFilters'
import BlogPagination from '@/components/BlogPagination'
import { getCategories, filterAndSearchBlogPosts, paginatePosts } from '@/lib/blog-data'

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  
  // const allPosts = getAllBlogPosts()
  const categories = getCategories()
  const postsPerPage = 3 // Afficher 3 articles par page pour avoir de la pagination

  // Reset page when filter or search changes
  useEffect(() => {
    setCurrentPage(1)
  }, [activeFilter, searchTerm])

  // Filter and search posts
  const filteredPosts = useMemo(() => {
    return filterAndSearchBlogPosts(activeFilter, searchTerm)
  }, [activeFilter, searchTerm])

  // Paginate posts
  const paginationData = useMemo(() => {
    return paginatePosts(filteredPosts, currentPage, postsPerPage)
  }, [filteredPosts, currentPage])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top of articles
    document.getElementById('articles-grid')?.scrollIntoView({ behavior: 'smooth' })
  }

    return (
    <div className="min-h-screen flex flex-col bg-white">
      <InternalHeader />
      
      {/* Main content with proper spacing for fixed header */}
      <main className="flex-1 pt-24 lg:pt-28 pb-0">
        <div className="flex items-center justify-center">
          <section className="py-8 md:py-12">
            <div className="mx-auto max-w-5xl px-6">
              <div className="text-center mb-12 md:mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight" style={{ fontFamily: 'Garamond, "Times New Roman", serif' }}>
                  Notre Blog
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                  Découvrez nos dernières réflexions sur la transformation digitale, l&apos;innovation et les meilleures pratiques business.
                </p>
              </div>

                            {/* Filters and Search */}
              <div className="mb-8 md:mb-10">
                <BlogFilters
                  categories={categories}
                  onFilterChange={setActiveFilter}
                  onSearchChange={setSearchTerm}
                  activeFilter={activeFilter}
                  searchTerm={searchTerm}
                />
              </div>

              {/* Articles Grid */}
              <div id="articles-grid" className="scroll-mt-24">
                {paginationData.posts.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
                      {paginationData.posts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                      ))}
                    </div>

                    {/* Pagination */}
                    <div className="mb-12">
                      <BlogPagination
                        currentPage={currentPage}
                        totalPages={paginationData.totalPages}
                        onPageChange={handlePageChange}
                      />
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">
                      Aucun article trouvé {activeFilter && `dans la catégorie "${activeFilter}"`}
                      {searchTerm && ` pour la recherche "${searchTerm}"`}.
                    </p>
                    <button 
                      onClick={() => {
                        setActiveFilter(null)
                        setSearchTerm('')
                      }}
                      className="mt-4 text-slate-600 hover:text-slate-800 underline"
                    >
                      Réinitialiser les filtres
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <SimpleFooter />
    </div>
  )
} 