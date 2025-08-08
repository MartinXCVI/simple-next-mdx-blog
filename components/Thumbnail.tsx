"use client"
import { IPost } from '@/interfaces/IPost'
import { posts } from '@/posts'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { JSX } from 'react'

const Thumbnail = (): JSX.Element => {

  const pathname = usePathname().split("/")[2]
  const post = posts.find((post: IPost)=> post.slug === pathname)

  return (
    <div className='h-[250px] md:h-[500px] mb-10 overflow-hidden rounded-lg relative'>
      <Image
        src={post?.thumbnail || "/images/hero.jpg"}
        alt=""
        fill
        sizes='100vh'
      />
    </div>
  )
}

export default Thumbnail