'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
  // totalPosts: number
  // postsPerPage: number
  onPageChange: (page: number) => void
}

export default function BlogPagination({
  currentPage,
  totalPages,
  onPageChange
}: BlogPaginationProps) {
  // const startPost = (currentPage - 1) * postsPerPage + 1
  // const endPost = Math.min(currentPage * postsPerPage, totalPosts)

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Pagination Navigation */}
      {(
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          {/* Pagination Info */}
          <div className="text-sm text-gray-600 order-2 sm:order-1">
            Page {currentPage} of {totalPages}
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-1 order-1 sm:order-2">
            {/* First page */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onPageChange(1)}
              disabled={currentPage === 1 || totalPages === 1}
              className="h-9 w-9 p-0 text-gray-600 hover:bg-gray-100"
            >
              <ChevronsLeft className="h-4 w-4" />
            </Button>

            {/* Previous page */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1 || totalPages === 1}
              className="h-9 w-9 p-0 text-gray-600 hover:bg-gray-100"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Page numbers */}
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.max(1, Math.min(5, totalPages)) }, (_, i) => {
                let pageNumber;
                if (totalPages <= 5) {
                  pageNumber = i + 1;
                } else if (currentPage <= 3) {
                  pageNumber = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNumber = totalPages - 4 + i;
                } else {
                  pageNumber = currentPage - 2 + i;
                }

                if (pageNumber < 1 || pageNumber > totalPages) return null;

                return (
                  <Button
                    key={pageNumber}
                    variant={currentPage === pageNumber ? "default" : "ghost"}
                    size="sm"
                    onClick={() => totalPages > 1 ? onPageChange(pageNumber) : undefined}
                    disabled={totalPages === 1}
                    className={`h-9 w-9 p-0 ${
                      currentPage === pageNumber
                        ? "bg-slate-900 text-white hover:bg-slate-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {pageNumber}
                  </Button>
                );
              })}
            </div>

            {/* Show dots if needed */}
            {currentPage < totalPages - 3 && totalPages > 5 && (
              <span className="px-2 text-gray-400">...</span>
            )}

            {/* Last page if not already shown */}
            {currentPage < totalPages - 2 && totalPages > 5 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onPageChange(totalPages)}
                className="h-9 w-9 p-0 text-gray-600 hover:bg-gray-100"
              >
                {totalPages}
              </Button>
            )}

            {/* Next page */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages || totalPages === 1}
              className="h-9 w-9 p-0 text-gray-600 hover:bg-gray-100"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Last page */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onPageChange(totalPages)}
              disabled={currentPage === totalPages || totalPages === 1}
              className="h-9 w-9 p-0 text-gray-600 hover:bg-gray-100"
            >
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
} 