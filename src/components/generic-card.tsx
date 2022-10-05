import {
  CardProps,
  renderHighlightedValue,
} from '@yext/answers-react-components'
import * as React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const GenericCard = ({ result }: CardProps) => {
  const title = (result.highlightedFields?.name ?? result.name) as string
  const description = (result.highlightedFields?.description ??
    result.description) as string

  const {
    rawData: { slug, id },
  } = result
  const href = (slug ? slug : id) as string
  return (
    <div className='border rounded-md p-4 search-card bg-white'>
      <div>
        {title && <h3 className=''>{renderHighlightedValue(title)}</h3>}
        {description && (
          <p className='text-sm text-gray-500 max-h-24 overflow-hidden'>
            {renderHighlightedValue(description)}
          </p>
        )}
        {/* <pre>{JSON.stringify(result.rawData, null, 2)}</pre> */}
        <a href={href} className=' mt-2 flex items-center gap-1 '>
          View Details
          <FaChevronRight />
        </a>
      </div>
    </div>
  )
}

export default GenericCard
