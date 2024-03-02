import React, { createContext, FC, PropsWithChildren } from 'react';

const FirstContext = createContext<{ getGenreNames: () => string[] }>({ getGenreNames: () => [] });
const SecondContext = createContext<{ name: string } | null>(null);

interface IProps extends PropsWithChildren {}

const ContextProvider: FC<IProps> = ({ children }) => {
    const firstValue = {
        getGenreNames: () => {
            return ['Action', 'Adventure', 'Sci-Fi'];
        }
    };

    const secondValue = { name: 'Dmytro' };

    return (
        <FirstContext.Provider value={firstValue}>
            <SecondContext.Provider value={secondValue}>
                {children}
            </SecondContext.Provider>
        </FirstContext.Provider>
    );
};

export { ContextProvider, FirstContext, SecondContext };
