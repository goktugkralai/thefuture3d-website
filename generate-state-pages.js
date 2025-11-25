import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const states = [
  { name: 'Georgia', folder: 'georgia', cities: ['Atlanta', 'Augusta', 'Savannah'] },
  { name: 'North Carolina', folder: 'north-carolina', cities: ['Charlotte', 'Raleigh', 'Greensboro'] },
  { name: 'Massachusetts', folder: 'massachusetts', cities: ['Boston', 'Worcester', 'Cambridge'] },
  { name: 'Washington', folder: 'washington', cities: ['Seattle', 'Spokane', 'Tacoma'] },
  { name: 'Arizona', folder: 'arizona', cities: ['Phoenix', 'Tucson', 'Mesa'] },
  { name: 'Colorado', folder: 'colorado', cities: ['Denver', 'Colorado Springs', 'Aurora'] },
  { name: 'Virginia', folder: 'virginia', cities: ['Virginia Beach', 'Norfolk', 'Richmond'] },
  { name: 'Ohio', folder: 'ohio', cities: ['Columbus', 'Cleveland', 'Cincinnati'] },
  { name: 'Michigan', folder: 'michigan', cities: ['Detroit', 'Grand Rapids', 'Warren'] },
  { name: 'Tennessee', folder: 'tennessee', cities: ['Nashville', 'Memphis', 'Knoxville'] },
  { name: 'Nevada', folder: 'nevada', cities: ['Las Vegas', 'Henderson', 'Reno'] },
  { name: 'Oregon', folder: 'oregon', cities: ['Portland', 'Salem', 'Eugene'] },
  { name: 'Connecticut', folder: 'connecticut', cities: ['Hartford', 'New Haven', 'Stamford'] },
  { name: 'Maryland', folder: 'maryland', cities: ['Baltimore', 'Annapolis', 'Rockville'] },
  { name: 'Wisconsin', folder: 'wisconsin', cities: ['Milwaukee', 'Madison', 'Green Bay'] },
  { name: 'Minnesota', folder: 'minnesota', cities: ['Minneapolis', 'St. Paul', 'Rochester'] },
  { name: 'Missouri', folder: 'missouri', cities: ['Kansas City', 'St. Louis', 'Springfield'] },
  { name: 'Indiana', folder: 'indiana', cities: ['Indianapolis', 'Fort Wayne', 'Evansville'] },
  { name: 'Louisiana', folder: 'louisiana', cities: ['New Orleans', 'Baton Rouge', 'Shreveport'] },
  { name: 'Kentucky', folder: 'kentucky', cities: ['Louisville', 'Lexington', 'Bowling Green'] },
  { name: 'Oklahoma', folder: 'oklahoma', cities: ['Oklahoma City', 'Tulsa', 'Norman'] },
  { name: 'New Mexico', folder: 'new-mexico', cities: ['Albuquerque', 'Santa Fe', 'Las Cruces'] },
  { name: 'Arkansas', folder: 'arkansas', cities: ['Little Rock', 'Fayetteville', 'Fort Smith'] },
  { name: 'Kansas', folder: 'kansas', cities: ['Wichita', 'Overland Park', 'Kansas City'] },
  { name: 'Utah', folder: 'utah', cities: ['Salt Lake City', 'Provo', 'West Valley City'] },
  { name: 'Nebraska', folder: 'nebraska', cities: ['Omaha', 'Lincoln', 'Bellevue'] },
  { name: 'Iowa', folder: 'iowa', cities: ['Des Moines', 'Cedar Rapids', 'Davenport'] },
  { name: 'Mississippi', folder: 'mississippi', cities: ['Jackson', 'Gulfport', 'Southaven'] },
  { name: 'Idaho', folder: 'idaho', cities: ['Boise', 'Meridian', 'Nampa'] },
  { name: 'West Virginia', folder: 'west-virginia', cities: ['Charleston', 'Huntington', 'Morgantown'] },
  { name: 'Hawaii', folder: 'hawaii', cities: ['Honolulu', 'Pearl City', 'Hilo'] },
  { name: 'New Hampshire', folder: 'new-hampshire', cities: ['Manchester', 'Nashua', 'Concord'] },
  { name: 'Maine', folder: 'maine', cities: ['Portland', 'Lewiston', 'Bangor'] },
  { name: 'Rhode Island', folder: 'rhode-island', cities: ['Providence', 'Warwick', 'Cranston'] },
  { name: 'Montana', folder: 'montana', cities: ['Billings', 'Missoula', 'Great Falls'] },
  { name: 'Delaware', folder: 'delaware', cities: ['Wilmington', 'Dover', 'Newark'] },
  { name: 'South Dakota', folder: 'south-dakota', cities: ['Sioux Falls', 'Rapid City', 'Aberdeen'] },
  { name: 'North Dakota', folder: 'north-dakota', cities: ['Fargo', 'Bismarck', 'Grand Forks'] },
  { name: 'Alaska', folder: 'alaska', cities: ['Anchorage', 'Fairbanks', 'Juneau'] },
  { name: 'Vermont', folder: 'vermont', cities: ['Burlington', 'South Burlington', 'Rutland'] },
  { name: 'Wyoming', folder: 'wyoming', cities: ['Cheyenne', 'Casper', 'Laramie'] },
  { name: 'Alabama', folder: 'alabama', cities: ['Birmingham', 'Montgomery', 'Mobile'] },
  { name: 'South Carolina', folder: 'south-carolina', cities: ['Charleston', 'Columbia', 'Greenville'] },
  { name: 'New Jersey', folder: 'new-jersey', cities: ['Newark', 'Jersey City', 'Paterson'] }
];

const generateStatePage = (state) => {
  const citiesHtml = state.cities.map(city => 
    `<div class="bg-white border border-gray-200 rounded p-4 text-center">${city}</div>`
  ).join('\n          ');

  return `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
---

<BaseLayout
  title="3D Scanning & Drone Services in ${state.name}"
  description="Professional 3D laser scanning, Matterport virtual tours, and commercial drone services in ${state.name}. Nationwide coverage with latest 2025 technology."
  keywords="3d scanning ${state.folder}, drone services ${state.folder}, matterport ${state.folder}"
>
  <main class="min-h-screen">
    <section class="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl font-bold mb-6">3D Scanning & Drone Services in ${state.name}</h1>
        <p class="text-xl max-w-3xl mb-8">
          Professional 3D laser scanning, Matterport virtual tours, and commercial drone services throughout ${state.name}. 
          Nationwide coverage with local expertise.
        </p>
        <a href="/contact" class="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold">Get Free Quote</a>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-12 text-gray-900">Our Services in ${state.name}</h2>
        <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div class="bg-white border border-gray-200 rounded-lg p-6">
            <h3 class="font-bold mb-2">3D Laser Scanning</h3>
            <p class="text-sm text-gray-600">Trimble X12, Matterport Pro 3, NavVis VLX3</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg p-6">
            <h3 class="font-bold mb-2">Matterport Virtual Tours</h3>
            <p class="text-sm text-gray-600">Real estate, hospitality, retail</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg p-6">
            <h3 class="font-bold mb-2">Drone Photogrammetry & LiDAR</h3>
            <p class="text-sm text-gray-600">Construction, surveying, mapping</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg p-6">
            <h3 class="font-bold mb-2">Scan to BIM</h3>
            <p class="text-sm text-gray-600">LOD 200-500 Revit models</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg p-6">
            <h3 class="font-bold mb-2">Construction Tracking</h3>
            <p class="text-sm text-gray-600">Progress documentation</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg p-6">
            <h3 class="font-bold mb-2">Google Street View</h3>
            <p class="text-sm text-gray-600">Business photography</p>
          </div>
        </div>

        <div class="mt-12">
          <h3 class="text-2xl font-bold mb-6 text-gray-900 text-center">Major ${state.name} Cities</h3>
          <div class="grid md:grid-cols-${state.cities.length} gap-4 max-w-3xl mx-auto">
          ${citiesHtml}
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="text-3xl font-bold mb-8 text-gray-900">Latest 2025 Technology</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white rounded-lg p-6">
            <strong>DJI Matrice 400 RTK:</strong> 59 min flight, 6kg payload, survey-grade
          </div>
          <div class="bg-white rounded-lg p-6">
            <strong>DJI Zenmuse L3 LiDAR:</strong> 950m range, 3-5cm accuracy
          </div>
          <div class="bg-white rounded-lg p-6">
            <strong>Trimble X12:</strong> ±1mm @ 25m, 365m range
          </div>
          <div class="bg-white rounded-lg p-6">
            <strong>Matterport Pro 3:</strong> ±20mm accuracy (2.75x better than Pro 2)
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-blue-600 text-white text-center">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-4">Serving ${state.name} with Latest Technology</h2>
        <p class="text-xl mb-6">FAA Part 107 Licensed • Insured • 24-Hour Turnaround Available</p>
        <a href="/contact" class="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold">Get Started</a>
      </div>
    </section>
  </main>
</BaseLayout>`;
};

// Generate all states
states.forEach(state => {
  const filePath = path.join(__dirname, 'src', 'pages', 'locations', state.folder, 'index.astro');
  const content = generateStatePage(state);
  fs.writeFileSync(filePath, content);
  console.log(`✓ Created ${state.name}`);
});

console.log(`\n✅ Generated ${states.length} state pages!`);

