# Progress Bar with Server-Sent-Event
- Demo how to use SSE to send on-direction event to cleint side
- Backend: Express
- Frontend: Vanilla JS with loading-bar package for easy way to handle progress bar

## Demo
![sse-demo](./SSE-progressbar-demo.gif "demo")

## How to run
At root folder:
1. `npm install`
2. `node .\routes\index.js`
3. Browser goes to `http://localhost:3000/` and click start

## Tutorial I learned from, most of the SSE code borrow form woolha.com.
- [LoadingBar.js / Flexible JS Progress Bar Library](https://loading.io/progress/)
- [Node.js - SSE (Server-Sent Events) Example + Javascript Client - Woolha](https://www.woolha.com/tutorials/node-js-sse-server-sent-events-example-javascript-client)
- [A progress bar in browser showing progress of long-lasting PHP function - limi.eu](https://limi.eu/projects/php/eventsource.html)
- [Server-Sent Events With Node](https://jasonbutz.info/2018/08/server-sent-events-with-node/)