import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as PostActions from './post.actions';
import { Post } from './post';

interface AppState {
  post: Post;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public post: Observable<Post>;
  public text: string;
  public title = 'Basic Angular-Ngrx';

  constructor(private store: Store<AppState>) {
    this.post = this.store.select('post');
  }

  /**
   * Change title.
   */
  public editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  /**
   * Incremental votes.
   */
  public upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  /**
   * Quite votes.
   */
  public downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }

  /**
   * Reset initial values.
   */
  public reset() {
    this.store.dispatch(new PostActions.Reset());
  }
}
