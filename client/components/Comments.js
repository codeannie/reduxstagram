import React from 'react';

export default class Comments extends React.Component {
  renderComment(comment, index) {
    return (
      <div className="comment" key={index}>
        <p>
          <strong> {comment.user} </strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    )
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log('form submit');
    // const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value; 
    console.log('post id ->', postId, 'author ->', author, 'comment->', comment);

    this.props.addComment(postId, author, comment);
  };

  render() {
    return (
      <div className = "comments">
        {this.props.postComments.map(this.renderComment)}

        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}