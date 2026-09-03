import { groq } from "next-sanity";
import { client } from "./client";

export async function getPosts() {
  return client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      author,
      excerpt,
      publishedAt,
      "coverImage": coverImage.asset->url
    }`
  );
}

export async function getPostBySlug(slug: string) {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      author,
      excerpt,
      publishedAt,
      "coverImage": coverImage.asset->url,
      body
    }`,
    { slug }
  );
}
