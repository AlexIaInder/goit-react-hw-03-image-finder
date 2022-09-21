import { Component } from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    return (
      <ul className={css.ImageGallery}>
        {this.props.images.map(image => (
          <ImageGalleryItem
            key={image.id}
            src={image.webformatURL}
            alt={image.user}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
