// Search index generation utility
// This generates a searchable index of all pages for the site search functionality

export interface SearchIndexItem {
  title: string;
  url: string;
  category: 'Service' | 'Industry' | 'Location' | 'Comparison' | 'Page';
  description: string;
}

// Static search index - can be enhanced to generate dynamically at build time
export const searchIndex: SearchIndexItem[] = [
  // Services
  {
    title: "3D Laser Scanning",
    url: "/3d-scan-to-bim",
    category: "Service",
    description: "Capture precise as-built conditions with Trimble X12 and Matterport Pro 3 scanners. Perfect for architects, engineers, and BIM professionals."
  },
  {
    title: "Matterport Virtual Tours",
    url: "/3d-virtual-tour",
    category: "Service",
    description: "Immersive 3D walkthroughs for real estate, hospitality, and retail. Boost engagement with 24-hour delivery and Google Maps integration."
  },
  {
    title: "Drone Services",
    url: "/drone",
    category: "Service",
    description: "High-precision aerial mapping with DJI Matrice 400 RTK and Zenmuse L3 LiDAR. Ideal for construction, surveying, and site documentation."
  },
  {
    title: "Google Street View",
    url: "/google-street-view",
    category: "Service",
    description: "Professional Google Street View photography and virtual tours for businesses and properties."
  },
  {
    title: "Scan to BIM",
    url: "/3d-scan-to-bim",
    category: "Service",
    description: "Convert 3D laser scans to Revit-ready BIM models (LOD 200-500). Streamline renovation projects with accurate as-built documentation."
  },
  
  // Industries
  {
    title: "Architecture",
    url: "/industries/architecture",
    category: "Industry",
    description: "3D scanning and BIM services for architecture firms. As-built documentation, renovation planning, and digital twins."
  },
  {
    title: "Construction",
    url: "/industries/construction",
    category: "Industry",
    description: "Construction progress tracking, site documentation, and as-built verification with drone and scanning technology."
  },
  {
    title: "Real Estate",
    url: "/industries/real-estate",
    category: "Industry",
    description: "Matterport virtual tours, 3D scanning, and property documentation for real estate professionals."
  },
  {
    title: "Engineering",
    url: "/industries/engineering",
    category: "Industry",
    description: "Engineering-grade 3D scanning and BIM services for infrastructure, facilities, and industrial projects."
  },
  {
    title: "Insurance",
    url: "/industries/insurance",
    category: "Industry",
    description: "Property documentation and damage assessment services for insurance claims and underwriting."
  },
  {
    title: "Property Management",
    url: "/industries/property-management",
    category: "Industry",
    description: "Facility documentation, maintenance planning, and virtual property tours for property managers."
  },
  {
    title: "Hospitality",
    url: "/industries/hospitality",
    category: "Industry",
    description: "Virtual hotel tours, venue documentation, and 3D scanning for hospitality businesses."
  },
  {
    title: "Retail",
    url: "/industries/retail",
    category: "Industry",
    description: "Retail space documentation, store planning, and virtual shopping experiences."
  },
  {
    title: "Manufacturing",
    url: "/industries/manufacturing",
    category: "Industry",
    description: "Industrial facility scanning, plant documentation, and BIM services for manufacturing facilities."
  },
  {
    title: "Education",
    url: "/industries/education",
    category: "Industry",
    description: "Campus documentation, facility management, and virtual campus tours for educational institutions."
  },
  
  // Key Locations
  {
    title: "Miami",
    url: "/locations/florida/miami",
    category: "Location",
    description: "3D scanning and drone services in Miami, Florida. Serving Miami Beach, Brickell, Downtown, and surrounding areas."
  },
  {
    title: "New York",
    url: "/locations/new-york",
    category: "Location",
    description: "3D scanning and Matterport services in New York. Serving Manhattan, Brooklyn, Queens, Bronx, and Staten Island."
  },
  {
    title: "Los Angeles",
    url: "/locations/california/los-angeles",
    category: "Location",
    description: "Professional 3D scanning and drone services in Los Angeles, California."
  },
  {
    title: "Florida",
    url: "/locations/florida",
    category: "Location",
    description: "Statewide 3D scanning and drone services across Florida. Miami, Tampa, Orlando, Fort Lauderdale, and more."
  },
  {
    title: "California",
    url: "/locations/california",
    category: "Location",
    description: "3D scanning and Matterport services throughout California. Los Angeles, San Francisco, San Diego, and statewide coverage."
  },
  
  // Comparisons
  {
    title: "Trimble X12 vs Leica BLK360",
    url: "/comparisons/trimble-x12-vs-leica-blk360",
    category: "Comparison",
    description: "Compare Trimble X12 and Leica BLK360 3D laser scanners. Accuracy, range, speed, and use cases."
  },
  {
    title: "Matterport Pro 3 vs Pro 2",
    url: "/comparisons/matterport-pro-3-vs-pro-2",
    category: "Comparison",
    description: "Compare Matterport Pro 3 and Pro 2 virtual tour cameras. Accuracy improvements, new features, and pricing."
  },
  {
    title: "LiDAR vs Photogrammetry",
    url: "/comparisons/lidar-vs-photogrammetry",
    category: "Comparison",
    description: "Compare LiDAR and photogrammetry technologies for 3D mapping and scanning. Accuracy, cost, and applications."
  },
  
  // Key Pages
  {
    title: "Services",
    url: "/services",
    category: "Page",
    description: "Complete list of all 3D scanning, Matterport, and drone services offered."
  },
  {
    title: "Technology",
    url: "/technology",
    category: "Page",
    description: "Latest 2025 equipment and technology. Trimble X12, Matterport Pro 3, DJI Matrice 400 RTK, and more."
  },
  {
    title: "Pricing",
    url: "/pricing",
    category: "Page",
    description: "Transparent pricing for 3D scanning, Matterport tours, and drone services. Get a custom quote."
  },
  {
    title: "Contact",
    url: "/contact",
    category: "Page",
    description: "Get in touch for a free consultation and custom quote. Phone, email, and contact form available."
  },
  {
    title: "Locations",
    url: "/locations",
    category: "Page",
    description: "Find 3D scanning and drone services in your area. Serving all 50 US states with local expertise."
  }
];

// Helper function to search the index
export function searchIndex(query: string): SearchIndexItem[] {
  if (!query.trim()) {
    return [];
  }
  
  const lowerQuery = query.toLowerCase();
  return searchIndex.filter(item => 
    item.title.toLowerCase().includes(lowerQuery) ||
    item.description.toLowerCase().includes(lowerQuery) ||
    item.category.toLowerCase().includes(lowerQuery) ||
    item.url.toLowerCase().includes(lowerQuery)
  );
}


