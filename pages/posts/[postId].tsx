import React from 'react';
import {wrapper} from "../../store";
import Link from "next/link";
import postService from "../../services/postService";
import {IPost} from "../../types/postsTypes";
import {useRouter} from "next/router";
import MainLayout from "../../layouts/mainLayout";
import {Btn, LinkContainer} from "../../styles/mainStyles";
import {DetailContainer, Title, Txt} from "../../styles/detailStyles";

interface PostProps {
    post: IPost
}

const Post = ({post}: PostProps) => {
    const router = useRouter()
    const {deletePost} = postService()
    console.log(post)
    return (
        <MainLayout show>
            <Link href={"/"}>
                <LinkContainer>
                    {"<"} Back to all posts
                </LinkContainer>
            </Link>
            <DetailContainer>
                <Title>{post.title}</Title>
                <Txt>{post.body}</Txt>
                <Btn
                    onClick={
                        () => deletePost(post.id)
                            .then(body => router.push("/"))
                    }>
                    delete
                </Btn>
            </DetailContainer>
        </MainLayout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(async ({query}) => {
    const {getAllPosts} = postService()
    const {postId: id} = query
    const posts = await getAllPosts()
    const post = posts.filter(el => el.id === Number(id))[0]
    return {
        props: {
            post
        }
    }
})

export default Post;