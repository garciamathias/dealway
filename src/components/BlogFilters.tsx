'use client'

// import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search } from 'lucide-react'

interface BlogFiltersProps {
  categories: string[]
  onFilterChange: (category: string | null) => void
  onSearchChange: (search: string) => void
  activeFilter: string | null
  searchTerm: string
}

export default function BlogFilters({ 
  categories, 
  onFilterChange, 
  onSearchChange, 
  activeFilter, 
  searchTerm 
}: BlogFiltersProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Category Filters and Search Bar - Same line */}
      <div className="flex gap-4 items-center">
        {/* Category Filters - Horizontal scroll with partial visibility */}
        <div className="flex-1 min-w-0">
          <div 
            className="flex gap-3 overflow-x-auto scrollbar-hide pb-2"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 2%, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 2%, black 85%, transparent 100%)'
            }}
          >
            <div className="w-2 flex-shrink-0"></div> {/* Spacer for gradient effect */}
            <Badge
              variant={activeFilter === null ? "default" : "secondary"}
              className={`cursor-pointer transition-all duration-200 px-4 py-2.5 text-sm font-medium h-10 whitespace-nowrap flex-shrink-0 ${
                activeFilter === null
                  ? "bg-slate-900 text-white hover:bg-slate-800"
                  : "bg-white/80 text-gray-600 hover:bg-white hover:text-gray-800 border border-gray-200/50"
              }`}
              onClick={() => onFilterChange(null)}
            >
              Tous les articles
            </Badge>
            {categories.map((category) => (
              <Badge
                key={category}
                variant={activeFilter === category ? "default" : "secondary"}
                className={`cursor-pointer transition-all duration-200 px-4 py-2.5 text-sm font-medium h-10 whitespace-nowrap flex-shrink-0 ${
                  activeFilter === category
                    ? "bg-slate-900 text-white hover:bg-slate-800"
                    : "bg-white/80 text-gray-600 hover:bg-white hover:text-gray-800 border border-gray-200/50"
                }`}
                onClick={() => onFilterChange(category)}
              >
                {category}
              </Badge>
            ))}
            <div className="w-8 flex-shrink-0"></div> {/* Spacer to show partial chip */}
          </div>
        </div>

        {/* Search Bar - Compact size */}
        <div className="relative w-80 flex-shrink-0">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 h-10 bg-white border-gray-200 focus:border-slate-400 focus:ring-slate-400 text-sm"
          />
        </div>
      </div>
    </div>
  )
} 