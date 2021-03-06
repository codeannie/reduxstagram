import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

export default class Single extends React.Component {
  render() {
    // need index of the post
    // findIndex - loop over array until postId found
    const { postId } = this.props.params;
    const index = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[index];
    const postComments = this.props.comments[postId] || []; 

    return (
      <div className = "single-photo">
        <Photo index={index} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />  
      </div>
    )
  }
}
