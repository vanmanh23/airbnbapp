import { Category } from '@/apis/categories'
import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'
import { useSearchParams } from 'react-router-dom'
import { Skeleton } from '@/components/ui/skeleton'


interface Props {
  categories: Category[]
  isLoading: boolean
}

export default function CategoryList({ categories, isLoading }: Props) {
  const [searchParams] = useSearchParams()
  const categoryTag = searchParams.get('category_tag')

  if(isLoading) {
    return new Array(20).fill(0).map(() => (
      <div className="h-13 min-w-[4rem] flex items-center flex-col">
        <Skeleton className="w-6 h-6"/>
        <Skeleton className="my-2 w-full h-2"/>
      </div>
    ))
  }

  return categories.map(category => (
    <Link
      to={`/?category_tag=${category.id}`}
      key={category.id}
      className="h-13 group flex w-fit min-w-fit cursor-pointer flex-col items-center"
    >
      <img
        src={category.icon}
        alt={category.name}
        className={cn('h-6 w-fit opacity-70 group-hover:opacity-100', {
          'opacity-100': categoryTag === category.id
        })}
      />
      <span
        className={cn('my-2 text-xs text-gray-500 group-hover:text-black', {
          'text-black': categoryTag === category.id
        })}
      >
        {category.name}
      </span>
      <hr
        className={cn('invisible h-1 w-full bg-gray-300 group-hover:visible', {
          'visible bg-black': categoryTag === category.id
        })}
      />
    </Link>
  ))
}