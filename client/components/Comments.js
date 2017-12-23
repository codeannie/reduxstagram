import React from 'react';

export default class Comments extends React.Component {
  renderComment(comment, index) {
    return (
      <div className="comment" key={index}>
        <p>
          <strong> {comment.user} </strong>
          {comment.text}
          {/* <button className="remove-comment" 
            onClick={this.props.removeComment.bind(null, this.props.params.postId, index)} >&times;
          </button> */}
        </p>
      </div>
    )
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log('form submit');

    const postId = this.props.params.postId;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value; 
    
    console.log('post id ->', postId, 'author ->', author, 'comment->', comment);

    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  };

  render() {
    return (
      <div className = "comments">
        {this.props.postComments.map(this.renderComment)}

        <form ref="commentForm" className="comment-form" onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}