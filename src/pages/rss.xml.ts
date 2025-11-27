import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const site = 'https://thefuture3d.com';
  const title = 'THE FUTURE 3D - Professional 3D Scanning & Drone Services';
  const description = 'Industry-leading 3D laser scanning, Matterport virtual tours, and commercial drone services for real estate, architecture, and construction.';

  // In production, this would fetch from a CMS or content collection
  const posts = [
    {
      title: '3D Scanning Services',
      url: `${site}/services`,
      description: 'Professional 3D laser scanning services for construction, architecture, and real estate.',
      pubDate: new Date('2025-01-01'),
    },
    {
      title: 'Commercial Drone Services',
      url: `${site}/drone`,
      description: 'Aerial mapping and inspection services with professional-grade drones.',
      pubDate: new Date('2025-01-02'),
    },
    {
      title: 'Matterport Virtual Tours',
      url: `${site}/3d-virtual-tour`,
      description: 'Immersive 3D virtual tours for real estate and property documentation.',
      pubDate: new Date('2025-01-03'),
    },
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${title}</title>
    <description>${description}</description>
    <link>${site}</link>
    <atom:link href="${site}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <ttl>60</ttl>
    ${posts
      .map(
        (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${post.url}</link>
      <guid isPermaLink="true">${post.url}</guid>
      <pubDate>${post.pubDate.toUTCString()}</pubDate>
    </item>`
      )
      .join('\n')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

