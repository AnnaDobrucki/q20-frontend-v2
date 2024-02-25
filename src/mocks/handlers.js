import { rest } from "msw";

const baseURL = "https://pp5-q20-adf89388b6ef.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({"pk":7,"username":"BenTest",
      "email":"",
      "first_name":"",
      "last_name":"",
      "profile_id":7,
      "profile_image":"https://res.cloudinary.com/dx6qelup5/image/upload/v1/media/../placeholder"})
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];