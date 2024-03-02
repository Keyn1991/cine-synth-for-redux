import React from 'react';
import { Button } from 'react-bootstrap';

const NotFoundPage: React.FC = () => {
    return (
        <div className="container mt-5">
            <div className="text-center">
                <img src="https://cdn.optinmonster.com/wp-content/uploads/2021/07/hulu-404-message-website-design.png" alt="Page Not Found" className="img-fluid mb-3"/>
                    <h1 className="display-1">Oops! Page Not Found</h1>
                    <p className="lead">The page you are looking for might have been removed, had its name changed, or
                        is temporarily unavailable.</p>
                    <Button href="/" variant="primary">Go Home</Button>
            </div>
        </div>
);
};

export {
    NotFoundPage
};
