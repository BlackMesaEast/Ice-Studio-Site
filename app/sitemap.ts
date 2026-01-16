import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://icestudio.dk";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/Silent-Citadel`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Zombie-Plague`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
