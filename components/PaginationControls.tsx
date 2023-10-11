'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
}) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '9'

  return (
    <div className="flex h-32 xl:h-60">
      <button
        className="mx-5 flex items-center justify-center text-2xl"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/pokemon/?page=${Number(page) - 1}&per_page=${per_page}`)
        }}
      >
        <span className="mx-2 text-4xl">←</span>Prev
      </button>
      <button
        className="mx-5 flex items-center justify-center text-2xl"
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/pokemon/?page=${Number(page) + 1}&per_page=${per_page}`)
        }}
      >
        Next<span className="mx-2 text-4xl">→</span>
      </button>
    </div>
  )
}

export default PaginationControls
