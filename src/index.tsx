import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./router";


import {ContextProvider} from "./hoc";
import { store } from './redux';
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


root.render(
    <Provider store={store}>
    <ContextProvider>
        <RouterProvider router={router}/>
    </ContextProvider>
    </Provider>
);

