import React from "react";
import { useHistory } from "react-router";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    const router = useHistory()
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>open</MyButton>
                <MyButton onClick={() => props.remove(props.post)}>delete</MyButton>
            </div>
        </div>
    )
}

export default PostItem