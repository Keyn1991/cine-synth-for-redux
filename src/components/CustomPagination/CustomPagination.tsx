import React, {FC, useState} from 'react';
import { Pagination } from 'react-bootstrap';
import {CustomPaginationProps} from "../../interface/InterfaceCustomPaginationProps";



const CustomPagination: FC<CustomPaginationProps> = ({ currentPage, totalPages, nextPage, prevPage, setQuery }) => {

    const [activePage, setActivePage] = useState(currentPage);
    const handleClick = (page: number) => {
        if (page !== activePage) {
            setActivePage(page);
            setQuery({ page: page.toString() });
        }
    };

    const renderPaginationItems = () => {
        const items = [];
        const maxPagesToShow = 8; // Максимальна кількість кнопок з номерами сторінок

        let startPage = Math.max(1, activePage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

        if (endPage - startPage < maxPagesToShow - 1) {
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            items.push(
                <Pagination.Item
                    key={i}
                    active={activePage === i}
                    onClick={() => handleClick(i)}
                    style={{ backgroundColor: activePage === i ? '#007bff' : 'transparent', color: activePage === i ? '#fff' : '#000' }}
                >
                    {i}
                </Pagination.Item>
            );
        }

        return items;
    };

    return (
        <Pagination>
            <Pagination.Prev disabled={activePage === 1} onClick={prevPage} />
            {renderPaginationItems()}
            <Pagination.Next disabled={activePage === totalPages} onClick={nextPage} />
        </Pagination>
    );
};

export { CustomPagination };
