import React from 'react';
import Photo from './Photo';
//import comments

export default class Single extends React.Component {
  render() {
    // need index of the post
    // findIndex - loop over array until postId found
    const index = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
    const post = this.props.posts[index];
    console.log('post ->', post);
    // get the post
    return (
      <div className = "single-photo">
        <Photo index={index} post={post} {...this.props} />
      </div>
    )
  }
}
