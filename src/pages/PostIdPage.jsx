import PostService from 'API/PostService'
import Loader from 'components/UI/Loader/Loader'
import { useFetching } from 'hooks/useFetching'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const PostIdPage = () => {
  const params = useParams()
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id)
    setPost(response.data);
  })

  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const response = await PostService.getCommentsByPostId(params.id)
    console.log(response);
    setComments(response.data);
  })

  useEffect(() => {
    fetchPostById()
    fetchComments()
  }, [])

  return (
    <div>
        <h1>in post {params.id}</h1>
        {isLoading
          ? <Loader/>
          : <div>{post.id}. {post.title}</div>
        }
        <h1>
          Comments
        </h1>
        {isComLoading 
        ? <Loader/>
        : <div>
          {comments.map((com, index) => (
            <div style={{marginTop: '15px'}}>
              <h5>{index + 1}. {com.name} ({com.email})</h5>
              <div>{com.body}</div>
            </div>
          ))}
        </div>
        }
    </div>
  )
}

export default PostIdPage
