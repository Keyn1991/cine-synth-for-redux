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
        <div className="d-flex align-items-center">
            <Form.Control
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search"
                style={{ width: '15%' }}
                className="mr-2"
            />
            <Button onClick={handleSearch}>Search</Button>
        </div>
    );
};

export { Search };
