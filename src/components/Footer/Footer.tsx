import React from 'react';

import css from './Footer.module.css';

const Footer = () => {
    return (
        <div className={css.Main}>
            <div className={css.Footer}>
                <div className={css.block}>
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                        <img width={50} src={'https://upload.wikimedia.org/wikipedia/commons/1/16/Facebook-icon-1.png'}
                             alt="Facebook"/>
                    </a>
                </div>
                <div className={css.block}>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <img width={50} src={'https://cdn-icons-png.flaticon.com/512/124/124021.png'} alt="Twitter"/>
                    </a>
                </div>
                <div className={css.block}>
                    <a href="https://telegram.com" target="_blank" rel="noreferrer">
                        <img width={50}
                             src={'https://user-images.githubusercontent.com/49933115/139837223-bf23d3a9-4638-4e17-994a-ac8678d5f517.png'}
                             alt="Telegram"/>
                    </a>
                </div>
                <div className={css.block}>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                        <img width={50} src={'https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png'}
                             alt="Instagram"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export {Footer};
