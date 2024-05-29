import { purgeCache } from "@netlify/functions";

export default async () => {
  await purgeCache({ tags: ["random"]});
  return new Response("Cache purged");
};