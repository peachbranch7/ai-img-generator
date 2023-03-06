import { notFound } from "next/navigation"
import { createClient } from "../../../utils/supabase-server"

import PostItem from "./post-item"

const PostList = async () => {
  const supabase = createClient()

  const { data: postsData } = await supabase
    .from("posts")
    .select()
    .order("created_at", { ascending: false })

  if (!postsData) return notFound()

  return (
    <div className='flex flex-col items-center justify-center'>
      {postsData.map((post) => {
        return <PostItem key={post.id} {...post} />
      })}
    </div>
  )
}

export default PostList
