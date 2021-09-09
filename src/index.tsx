import React from 'react';
import ReactDOM from 'react-dom';
import "index.less";
import App from "pages/root";
import AuthorityProvider from "libs/context/authorityProvider";

ReactDOM.render(
  <React.StrictMode>
      <AuthorityProvider>
          <App />
      </AuthorityProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
