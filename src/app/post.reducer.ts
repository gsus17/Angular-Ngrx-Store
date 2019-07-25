import * as PostActions from './post.actions';
import { Post } from './post';

export type Action = PostActions.All;

const initialState: Post = {
  text: 'This is the initial title.',
  likes: 0
};

const newState = (state, newData) => {
  return { ...state, ...newData };
};

export function postReducer(state: Post = initialState, action: any) {
  console.log(action.type, state);

  switch (<any>action.type) {
    case PostActions.EDIT_TEXT:
      return newState(state, { text: action.payload });
    case PostActions.UPVOTE_TEXT:
      return newState(state, { likes: state.likes + 1 });
    case PostActions.DOWNVOTE_TEXT:
      return newState(state, { likes: state.likes - 1 });
    case PostActions.RESET_TEXT:
      return initialState;

    default:
      return state;
  }
}
