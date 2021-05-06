import axios from "axios";
import {IPost} from "../types/postsTypes";
import React from "react";

const postService = () => {
    const instance = axios.create({
        baseURL: "https://simple-blog-api.crew.red/posts"
    })
    const getAllPosts = async (): Promise<IPost[]> => {
        const response = await instance.get<IPost[]>("")
        return response.data
    }
    const createPost = async (body): Promise<void> => {
        const reqData = JSON.stringify(body)
        const response = await instance.post("", reqData, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response.data
    }
    const deletePost = async (id: number) => {
        const response = await instance.delete(`/${id}`)
        return response.data
    }
    return {getAllPosts, createPost, deletePost}
}

export default postService