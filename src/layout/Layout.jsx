import React from 'react';
import styles from "./Layout.module.css"

const Layout = ({children}) => {
    return (
        <div>
            <header className={styles.header}>
                <h1>Book App</h1>
                <p><a href='https://google.com'>Project</a> | React.js full course</p>
            </header>
                {children}
            <footer className={styles.footer}>
                <p>Developed by Yasin</p>
            </footer>
        </div>
    );
};

export default Layout;