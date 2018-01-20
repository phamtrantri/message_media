import React, { Component } from 'react'
import axios from 'axios';
import { API_KEY, ROOT_URL } from '../commons/constants';
class ImageDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    }
  }
  componentWillMount() {
    this.getImage(this.props.params.id);
  }
  getImage(id) {

    axios.get(`${ROOT_URL}/${id}`, {
      params: {
        api_key: API_KEY
      }
    })
      .then((res) => {
        this.setState((prevState, props) => {
          return {
            image: res.data.data
          }
        })
      })
  }

  render() {
    const { image } = this.state;
    if (!image) return <div>Loading...</div>

    const fullScreenImage = {

      backgroundImage: `url(${image.images.original.webp})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100vh'
    }
    return (
      <div style={fullScreenImage}>
      
      </div>
    )
  }
}

export default ImageDetail