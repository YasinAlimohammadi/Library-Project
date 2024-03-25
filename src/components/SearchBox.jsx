import React from 'react';
import { FaSearch } from "react-icons/fa";

import styles from "./SearchBox.module.css"

const SearchBox = ({search, setSearch, searchHandler}) => {
    return (
        <div className={styles.search}>
            <input 
                type='text' 
                placeholder='Search title' 
                value={search} 
                onChange={e => setSearch(e.target.value.toLowerCase().trim())}
            />
            <button onClick={searchHandler}>
                <FaSearch className={styles.faSearch}/>
            </button>
        </div>
    );
};

export default SearchBox;