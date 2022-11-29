import { rest } from "msw";
import { faker } from "@faker-js/faker";

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

const user = () => ({
  id: faker.datatype.uuid(),
  user: {
    image: faker.image.avatar(),
    name: faker.name.fullName(),
  },

  company: faker.company.name(),
  role: faker.helpers.arrayElement([
    "Hr Manager",
    "Full Stack Developer",
    "Project Manager",
  ]),
  verified: faker.helpers.arrayElement(["Yes", "No"]),
  status: faker.helpers.arrayElement(["Active", "Banned"]),
});

const userList = [...Array(50).keys()].map(() => ({
  ...user(),
}));

export const handlers = [
  rest.get("/api/dashboard", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dashBoardInfo));
  }),
  rest.get("/api/users", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userList));
  }),
];
