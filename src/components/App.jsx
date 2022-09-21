import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { fetchImages } from './services/api';
import Button from './Button';
export class App extends Component {
  state = {
    search: '',
    page: 1,
    images: [],
  };
  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.onSubmit();
    }
  }

  onSubmit = async q => {
    const data = await fetchImages({ q, page: this.state.page });
    this.setState({ ...this.state, images: data.hits });
  };

  onloadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} />
        <Button onloadMore={this.onloadMore} page={this.state.page} />
      </>
    );
  }
}
