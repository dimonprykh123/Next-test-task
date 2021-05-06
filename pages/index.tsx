import React from 'react';
import Link from "next/link";
import {useTypedSelector} from "../hooks/useTypedSeletor";
import {NextThunkDispatch, wrapper} from "../store";
import postService from "../services/postService";
import {fetchPosts} from "../store/actions/postsActions";
import MainLayout from "../layouts/mainLayout";
import {PostContainer, PostsContainer, BodyPostBox, ImgPostBoxContainer, TitlePostBox} from "../styles/postStyles";
import {LinkContainer} from "../styles/mainStyles";
import Image from "next/image";

const Index = () => {
    const {error, loading, posts} = useTypedSelector(state => state.posts)
    if (error) {
        return <MainLayout show>
            <div>{error}</div>
        </MainLayout>
    }
    return (
        <MainLayout show>
            <PostsContainer>
                {
                    posts.map(el => (
                        <PostContainer>
                            <ImgPostBoxContainer>
                                <Image src="/no-photo-available.png" width="auto" height="auto"/>
                            </ImgPostBoxContainer>
                            <TitlePostBox>{el.title}</TitlePostBox>
                            <BodyPostBox>{el.body}</BodyPostBox>
                            <Link href={`posts/${el.id}`}>
                                <LinkContainer>Go to details ...</LinkContainer>
                            </Link>
                        </PostContainer>
                    ))
                }
            </PostsContainer>
        </MainLayout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    const {getAllPosts} = postService()
    await dispatch(await fetchPosts(getAllPosts))
})


export default Index;

// posts.map(el => (
//     <div key={el.id}>
//         <h3>{el.title}</h3>
//         <p>{el.body}</p>
//         <Link href={`posts/${el.id}`}>
//             <a>Go to details</a>
//         </Link>
//     </div>
// ))