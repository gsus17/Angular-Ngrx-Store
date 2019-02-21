import { Action } from '@ngrx/store';

// Action types.
export const EDIT_TEXT = '[Post] Edit';
export const UPVOTE_TEXT = '[Post] Upvote';
export const DOWNVOTE_TEXT = '[Post] Downvote';
export const RESET_TEXT = '[Post] Reset';


// Action declarations.
export class EditText implements Action {
    readonly type = EDIT_TEXT;
    constructor(public payload: string) { }
}

export class Upvote implements Action {
    readonly type = UPVOTE_TEXT;
}

export class Downvote implements Action {
    readonly type = DOWNVOTE_TEXT;
}

export class Reset implements Action {
    readonly type = RESET_TEXT;
}

export type All
    = Upvote
    | Downvote
    | Reset
    | EditText;
