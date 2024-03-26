import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

interface SearchProps {
    onSearch: (searchTerm: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="d-flex align-items-center justify-content-center">
            <Form.Control
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search"
                className="mr-2"
                style={{
                    maxWidth: '20vw',
                    marginRight: '0.5rem'
                }}
            />
            <Button onClick={handleSearch} className="ml-2">Search</Button>
        </div>
    );
};

export { Search };
