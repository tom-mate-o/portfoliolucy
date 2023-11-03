import React from 'react';
import "./App.css";
import ReactDOM from 'react-dom/client';

document.addEventListener('DOMContentLoaded', function() {
    import('./App.css').then(() => {
      import('./App').then(({ default: App }) => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
          <React.StrictMode>
            <App/>
          </React.StrictMode>
        );
      });
    });
});