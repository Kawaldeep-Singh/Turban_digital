import { MetadataRoute } from 'next';
import { servicesData } from '@/data/services';
import { client } from '@/sanity/client';
import { groq } from 'next-sanity';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://turbandigitalstudio.com';

  // Fetch dynamic blog posts from Sanity
  let slugs = [];
  try {
    slugs = await client.fetch(groq`*[_type == "post"]{ "slug": slug.current, _updatedAt }`);
  } catch (error) {
    console.error("Failed to fetch sanity posts for sitemap", error);
  }

  const blogUrls = slugs.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post._updatedAt || new Date()),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const serviceUrls = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...serviceUrls,
    ...blogUrls,
  ];
}
