// src/mocks/handlers.js
// src/mocks/handlers.js
import { rest } from "msw";

const dashBoardInfo = [
  {
    name: "Weekly Sales",
    value: "714k",
    color: "rgb(209, 233, 252)",
  },
  {
    name: "New Users",
    value: "1.35m",
    color: "rgb(208, 242, 255)",
  },
  {
    name: "Item Orders",
    value: "1.72m",
    color: "rgb(255, 247, 205)",
  },
  {
    name: "Bug Reports",
    value: "235",
    color: "rgb(255, 231, 217)",
  },
];

export const handlers = [
  rest.get("/api/dashboard", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dashBoardInfo));
  }),
];
