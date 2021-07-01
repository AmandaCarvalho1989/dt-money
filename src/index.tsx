import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "McDonalds",
          amount: 89,
          category: "Food",
          type: "withdraw",
          createdAt: new Date(),
        },
        {
          id: 2,
          title: "Freelancer Site",
          amount: 1000,
          category: "Job",
          type: "deposit",
          createdAt: new Date(),
        },
      ],
    });
  },
  routes() {
    this.namespace = '/api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
