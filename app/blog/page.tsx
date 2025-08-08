import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { JSX } from 'react'
import { posts } from '@/posts'
import Image from 'next/image'
import Link from 'next/link'

const page = (): JSX.Element => {
  return (
    <div>
      <Header />

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
        {posts.map((post, index)=> (
          <Link
            key={index}
            href={`/blog/${post.slug}`}
            className="p-4 group rounded-lg border w-[90%] sm:w-[75%] md:w-[375px] lg:w-[310px] xl:w-[330px] border-gray"
          >
            <div className="h-60 w-full relative overflow-hidden rounded-md object-cover group-hover:scale-105 duration-300 transition-all">
              <Image
                src={post.thumbnail}
                alt={post.title}
                sizes="100vh"
                fill
              />
            </div>
            <p className="text-sm bg-gray text-blue font-semibold my-4 w-fit px-2 py-1 rounded-sm">
              {post.category}
            </p>
            <h2 className="text-2xl leading-7 font-bold py-1 line-clamp-2">
              {post.title}
            </h2>

            <div className="text-gray-500 flex text-base space-x-10 py-3">
              <div>
                {post.author}
              </div>
              <div>
                {post.date}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default page