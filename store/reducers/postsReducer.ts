import {PostsAction, PostsActionTypes, PostsState} from "../../types/postsTypes";

const initialState: PostsState = {
    posts: [],
    error: null,
    loading: false
}

const postsReducer = (state = initialState, action: PostsAction): PostsState => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS:
            return {...state, loading: true, error: null, posts: []}
        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            return {...state, loading: false, posts: action.payload}
        case PostsActionTypes.FETCH_POSTS_ERROR:
            return {...state, loading: false, posts: [], error: action.payload}
        default:
            return state
    }
}

export default postsReducer