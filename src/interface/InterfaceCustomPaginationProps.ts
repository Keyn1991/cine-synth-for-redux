export interface CustomPaginationProps {
    currentPage: number;
    totalPages: number;
    nextPage: () => void;
    prevPage: () => void;
    setQuery: (value: any) => void;
}