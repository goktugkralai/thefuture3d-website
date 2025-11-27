// Breadcrumb helper function - generates breadcrumb items from URL path

export interface BreadcrumbItem {
  label: string;
  url?: string;
}

export function getBreadcrumbs(path: string): BreadcrumbItem[] {
  // Remove leading/trailing slashes and split
  const cleanPath = path.replace(/^\/|\/$/g, '');
  if (!cleanPath) {
    return [{ label: 'Home' }]; // Homepage - no breadcrumbs needed
  }
  
  const segments = cleanPath.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', url: '/' }];
  
  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === segments.length - 1;
    const label = formatBreadcrumbLabel(segment);
    
    breadcrumbs.push({
      label,
      url: isLast ? undefined : currentPath
    });
  });
  
  return breadcrumbs;
}

function formatBreadcrumbLabel(segment: string): string {
  // Handle special cases
  const specialCases: Record<string, string> = {
    '3d-scan-to-bim': '3D Scan to BIM',
    '3d-virtual-tour': '3D Virtual Tour',
    'google-street-view': 'Google Street View',
    'new-york': 'New York',
    'new-york-city': 'New York City',
    'los-angeles': 'Los Angeles',
    'san-francisco': 'San Francisco',
    'san-diego': 'San Diego',
    'fort-lauderdale': 'Fort Lauderdale',
    'west-palm-beach': 'West Palm Beach',
    'boca-raton': 'Boca Raton',
    'staten-island': 'Staten Island',
    'miami-beach': 'Miami Beach',
    'coconut-grove': 'Coconut Grove',
    'coral-gables': 'Coral Gables',
    'design-district': 'Design District',
  };
  
  if (specialCases[segment]) {
    return specialCases[segment];
  }
  
  // Convert URL segments to readable labels
  return segment
    .split('-')
    .map(word => {
      // Handle abbreviations and special words
      if (word === 'nyc' || word === 'ny') return 'NY';
      if (word === 'fl' || word === 'florida') return 'Florida';
      if (word === 'ca' || word === 'california') return 'California';
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

