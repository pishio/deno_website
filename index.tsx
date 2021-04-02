import React from 'https://dev.jspm.io/react';
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server';

import App from './App.tsx';



function handleRequest(request) {

  const html = ReactDOMServer.renderToString(
    <html>
      <head>
        <title>deno react ssr</title>
      </head>
      <body>
        <App />
      </body>
    </html>
  )

  return new Response(
    html, {
    headers: {
      "content-type": "text/html; charset=UTF-8",
    },
  });
  
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
