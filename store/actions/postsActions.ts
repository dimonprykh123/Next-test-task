import {Dispatch} from "redux";
import {IPost, PostsAction, PostsActionTypes} from "../../types/postsTypes";

export const fetchPosts = (service: () => Promise<IPost[]>) => {
    return async (dispatch: Dispatch<PostsAction>) => {
        try {
            dispatch({type: PostsActionTypes.FETCH_POSTS})
            const posts = await service()
            console.log(posts)
            dispatch({type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload: posts})
        } catch (e) {
            const message: string = "Some trouble with uploading Posts"
            dispatch({type: PostsActionTypes.FETCH_POSTS_ERROR, payload: message})
        }
    }
}
