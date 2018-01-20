import React, { Component } from 'react'
import { Link } from 'react-router';
import '../styles/images.css';
class Images extends Component {
  render() {
    const { image } = this.props;

    return (
      <div className="column">
        <div className="card">
          <Link to={`/image/${image.id}`}>
            <img src={image.images.original.webp} alt="image" className="images" />
          </Link>
          <div className="caption">
            <div className="left">
            <span><i className="fa fa-paperclip"></i></span>
            </div>
            <div className="right">
              <span><i className="fa fa-eye"></i>1204</span>
              <span><i className="fa fa-comment"></i>13</span>
              <span><i className="fa fa-heart"></i>379</span>
            </div>
          </div>
        </div>
        <div className="author">
          {(image.user && image.user.avatar_url) ? <img src={image.user.avatar_url} alt="avatar" className="avatar" /> : null}
          {(image.user && image.user.username) ? <Link to="/">{image.user.username}</Link> : null}
        </div>
      </div>
    )
  }
}

export default Images