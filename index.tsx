// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
// @deno-types="https://servestjs.org/@v1.1.3/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";

import App from "https://github.com/pishio/deno_website/blob/main/App.tsx";



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
