export interface IPost {
    id: number;
    title: string;
    body: string;
}

export interface PostsState {
    posts: IPost[];
    loading: boolean;
    error: null | string;
}

export enum PostsActionTypes {
    FETCH_POSTS = "FETCH_POSTS",
    FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
    FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR"
}

interface FetchPostsAction {
    type: PostsActionTypes.FETCH_POSTS;
}

interface FetchPostsSuccessAction {
    type: PostsActionTypes.FETCH_POSTS_SUCCESS;
    payload: IPost[];
}

interface FetchPostsErrorAction {
    type: PostsActionTypes.FETCH_POSTS_ERROR;
    payload: string;
}

export type PostsAction =
    FetchPostsAction
    | FetchPostsErrorAction
    | FetchPostsSuccessAction