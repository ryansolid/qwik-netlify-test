import { getStore } from "@netlify/blobs";

export default async (req, context) => {
  const testStore = getStore("netlify-test");
  await testStore.set("name", context.params.name);
  return Response.redirect("/.netlify/functions/hello");
};

export const config = { path: "/setname/:name" };