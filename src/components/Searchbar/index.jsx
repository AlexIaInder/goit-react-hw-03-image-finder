import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { MdOutlineImageSearch } from 'react-icons/md';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handelSearchChange = event => {
    this.setState({ search: event.currentTarget.value.toLowerCase() });
  };
  handelSubmit = event => {
    event.preventDefault();
    if (this.state.search.trim() === '') {
      return alert('Please enter something...');
    }
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.handelSubmit} className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <span>
              <MdOutlineImageSearch size={30} />
            </span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handelSearchChange}
            name="search"
            value={this.state.search}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
