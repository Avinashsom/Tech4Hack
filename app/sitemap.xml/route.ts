// app/sitemap.xml/route.ts
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const baseUrl = 'https://tech4hack.vercel.app';

  const staticPages = [
    '/',
    '/about',
    '/team',
    '/gallery',
    '/hackathons',
    '/contact',
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map(
        (path) => `
      <url>
        <loc>${baseUrl}${path}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
      </url>`
      )
      .join('')}
  </urlset>`;

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
