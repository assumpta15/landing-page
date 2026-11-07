import handler from "../../dist/server/index.js";

export default async function vinextNetlifyHandler(request) {
  return handler(request);
}

export const config = {
  path: "/*",
  preferStatic: true,
};
