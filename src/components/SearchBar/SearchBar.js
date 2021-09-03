import { useState } from 'react';
import { toast } from 'react-toastify';
import s from './SearchBar.module.css';

function SearchBar(props) {
  const [movieName, setMovieName] = useState('');

  const handleNameChange = e => {
    const target = e.currentTarget.value;

    setMovieName(target.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (movieName.trim() === '') {
      toast('Enter name of image, please!');
      return;
    }

    props.onFormSubmit(movieName.trim());

    setMovieName('');
  };

  const {
    Searchbar,
    SearchForm,
    SearchFormButton,
    SearchFormButtonLabel,
    SearchFormInput,
  } = s;

  return (
    <header className={Searchbar}>
      <form className={SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={SearchFormButton}>
          <span className={SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={SearchFormInput}
          type="text"
          name="imageName"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={movieName}
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
}

export default SearchBar;
