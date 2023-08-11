import React, {useState} from 'react';
import styles from '../styles/search.module.scss';
import searchIcon from '../img/common/search.svg'
const Search = () => {

    const [query, setQuery] = useState('')

    return (
        <div className={styles.search}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className={styles.search__button}>
                <img src={searchIcon} alt="search"/>
            </button>
        </div>
    );
};

export default Search;