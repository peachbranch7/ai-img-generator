"use client"

import Link from "next/link"
import React from "react"

const navigation = () => {
  return (
    <header className='border-b border-gray-600 py-5'>
      <div className='container max-w-screen-x1 mx-auto relative flex justify-center items-center'>
        <Link href='/' className='font-bold text-x1 cursor-pointer text-white'>
          AI Img Generator
        </Link>
        <div className='absolute right-5'>
          <Link href='post/new'>
            <div className='text-white bg-yellow-500 hover:brightness-110 rounded py-1 px-8'>
              画像生成
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default navigation
