/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";
import App from "https://github.com/pishio/deno_website/blob/main/App.tsx";

function App() {
  return (
    <html>
      <head>
        <title>Hello from JSX</title>
      </head>
      <body>
        <h1>Hello world</h1>
      </body>
    </html>
  );
}



console.log("Listening on http://localhost:8000");
await serve(handler);


function handleRequest(request) {

  const html = renderSSR(<App />);

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
