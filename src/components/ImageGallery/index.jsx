import { Component } from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { images, setModalImage } = this.props;

    return (
      <ul className={css.ImageGallery}>
        {images.map(image => (
          <ImageGalleryItem
            onClick={() => setModalImage(image.largeImageURL)}
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
