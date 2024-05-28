import { getStore } from "@netlify/blobs";

export default async (req, context) => {
  const testStore = getStore("netlify-test");
  const name = await testStore.get("name");
  return new Response(`Hello, ${name}!`);
};