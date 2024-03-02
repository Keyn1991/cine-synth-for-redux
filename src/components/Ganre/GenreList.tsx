import React, {FC, useEffect, useState} from 'react';
import {ListGroup, Nav, Navbar} from 'react-bootstrap';

import styles from "./GenreList.module.css"
import {genreService} from '../../services';

interface GenreListProps {
    onGenreClick: (genreId: string) => void;
}

const GenreList: FC<GenreListProps> = ({onGenreClick}) => {
    const [genres, setGenres] = useState<{ id: string; name: string }[]>([]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        genreService.getAllGenres()
            .then(response => {
                setGenres(response.data.genres);
            })
            .catch(error => {
                console.error('Error fetching genres:', error);
            });
    }, []);

    const handleGenreClick = (genreId: string) => {
        onGenreClick(genreId);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <Navbar bg="light" expand="lg" className="d-lg-none">
                <Navbar.Toggle onClick={toggleMobileMenu} aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <ListGroup>
                            {genres.map(genre => (
                                <ListGroup.Item
                                    key={genre.id}
                                    onClick={() => handleGenreClick(genre.id)}
                                    style={{cursor: 'pointer'}}
                                >
                                    <b>
                                        {genre.name}
                                    </b>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <ListGroup className="d-none d-lg-block">
                {genres.map(genre => (
                    <ListGroup.Item className={styles.main}
                                    key={genre.id}
                                    onClick={() => handleGenreClick(genre.id)}
                                    style={{cursor: 'pointer'}}
                    >
                        <b>
                            {genre.name}
                        </b>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    );
};

export {GenreList};
