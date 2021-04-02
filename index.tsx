import React from 'https://dev.jspm.io/react';
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server';

import App from './App.tsx';



function handleRequest(request) {
  const { pathname } = new URL(request.url);

  // Respond with HTML
  if (pathname.startsWith("/")) {
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

    return new Response(html, {
      headers: {
        // The "text/html" part implies to the client that the content is HTML
        // and the "charset=UTF-8" part implies to the client that the content
        // is encoded using UTF-8.
        "content-type": "text/html; charset=UTF-8",
      },
    });
  }
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
