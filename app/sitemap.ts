import { MetadataRoute } from 'next';
import { services } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://naj-strechasa.sk';

  // Base core static pages
  const routes = ['', '/referencie', '/clanok', '/kontakt'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamically mapped service detail pages
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/sluzby/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...routes, ...serviceRoutes];
}
