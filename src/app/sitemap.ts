import { MetadataRoute } from 'next';
import { caseStudies } from '@/lib/case-studies';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://diginexstudio.com';

  const routes = [
    '/',
    '/about',
    '/services',
    '/portfolio',
    '/pricing',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${siteUrl}/portfolio/${study.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...caseStudyRoutes];
}
