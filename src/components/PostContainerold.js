import React, { Component } from 'react';
import { Route, withRouter, Link } from 'react-router-dom';

import CreatePostForm from './CreatePostForm';
import PostList from './PostList';
import UpdatePostForm from './UpdatePostForm';

class PostContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  // GET all posts ==> List those posts

  createPost = (e, post) => {
    e.preventDefault();

    const oldPosts = this.state.posts;
    oldPosts.push(post);

    this.setState({ posts: oldPosts });
    this.props.history.push('/profile/post/list');
  }

  updatePost = (e, postId, revisedPost) => {
    e.preventDefault();
    const updatedPosts = this.state.posts.map((post, index) => (
      parseInt(postId) === index ? revisedPost : post
    ))

    this.setState({
      posts: updatedPosts
    })
    this.props.history.push('/profile/post/list');
  }

  render() {
    return (
      <div>
        <Link to="/profile/post/new">Create a Post</Link>
        <Link to="/profile/post/list">All Posts</Link>
        <Route path="/profile/post/new" render={() => (
          <CreatePostForm createPost={this.createPost} />
        )} />
        <Route path="/profile/post/list" render={() => (
          <PostList posts={this.state.posts} />
        )} />
        <Route path="/profile/post/edit/:index" render={(routerProps) => (
          <UpdatePostForm
            posts={this.state.posts}
            updatePost={this.updatePost}
            postId={routerProps.match.params.index}
          />
        )} />
      </div>
    )
  }
}

export default withRouter(PostContainer);


/*



import React, { Component } from 'react';
import { Route, withRouter, Link} from 'react-router-dom';
import CreatePostForm from './CreatePostForm';
import PostList from './PostList';
import UpdatePostForm from './UpdatePostForm'

class  PostContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

//create 
//read

//post  text from brower
//posts array from browers


createPost = (e, post) => {
    console.log(post)
    e.preventDefault();
    const oldPosts = this.state.posts;
    oldPosts.push(post);
    console.log(oldPosts)
    this.setState({ posts: oldPosts })
    this.props.history.push('/profile/post/list');

}

updatePost = (e, postId, revisedPost) => {
    e.preventDefault();
    const updatedPosts = this.state.posts.map((post, index) => (
        parseInt(postId) === index ? revisedPost : post
    ))
    this.setState({
        posts: updatedPosts
    })
    this.props.history.push('/profile/post/list');
}

render() {
    console.log(this.props)
    return (
        <div>
          <Link to="/profile/post/new">Create a Post     </Link>
          <Link to="/profile/post/list">All Post</Link>
          <Route path="/profile/post/new" render={() => (
              <CreatePostForm createPost={this.createPost} />
          )} />
          <Route path="/profile/post/list" render={() =>(
            <PostList posts={this.state.posts} />
          )} />
          <Route path="/profile/post/edit/:index" render={(routerProps) => (
              <UpdatePostForm 
              posts={this.state.posts}
              updatePost={this.updatePost}
              postId={routerProps.match.params.index}
              />
          )}/>
        </div>
    )
}
}






export default withRouter(PostContainer);

*/