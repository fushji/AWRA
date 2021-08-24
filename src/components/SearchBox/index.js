import React, { useState } from 'react';
import './index.css'

const SearchBox = ({ setLocation }) => {

    const [query, setQuery] = useState('');

    const search = (e) => {

        if (e.key === "Enter") {
            setLocation(query);
            setQuery('')
        }
    }

    return (
        <div>
            <input className="search-box"
                placeholder="Search for a city..."
                type="text"
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
            />
        </div>
    )
}

export default SearchBox
