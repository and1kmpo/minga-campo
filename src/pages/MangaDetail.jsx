import { useParams } from 'react-router-dom'

export default function MangaDetail() {
    let { page } = useParams()
    page = Number(page)

    return (
        <div className='h-16 bg-indigo-500'>
            <h1 className='text-white text-md'>MangaDetail</h1>
            <h3 className='text-xs'>{page}</h3>
        </div>
    )
}
