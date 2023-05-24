import React from 'react';
import styles from './error.module.css';
function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h2>Oops! Page not found.</h2>
      <h1>404</h1>
      <p>We can't find the page you're looking for.</p>
      <a href="/">Go back home</a>
    </div>
  );
}

export default NotFoundPage;
