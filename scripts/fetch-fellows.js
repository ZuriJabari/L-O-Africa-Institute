const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs').promises;
const path = require('path');

async function fetchFellowsData() {
  // Configure axios with headers
  const axiosConfig = {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.5',
      'Connection': 'keep-alive',
      'Upgrade-Insecure-Requests': '1',
      'Cache-Control': 'max-age=0'
    }
  };

  try {
    console.log('Fetching fellows data from website...');
    const response = await axios.get('https://yelp.leoafricainstitute.org/fellows/', axiosConfig);
    console.log('Response received, parsing data...');
    
    const $ = cheerio.load(response.data);
    const fellows = [];
    
    // Log the HTML structure for debugging
    console.log('HTML structure:', $.html().substring(0, 500));
    
    // Process each fellow card with more flexible selectors
    $('div[class*="fellow"], .fellow-profile, .fellow-card').each((i, element) => {
      console.log('Processing fellow element:', $(element).html());
      
      const name = $(element).find('h2, h3, .name, .fellow-name').first().text().trim();
      const role = $(element).find('p, .role, .fellow-role').first().text().trim();
      const organization = $(element).find('p:contains("at"), .organization, .fellow-org').first().text().trim();
      const classText = $(element).find('p:contains("Class of"), .class, .fellow-class').first().text().trim();
      const classYear = classText.match(/\d{4}/)?.[0] || '';
      const imageUrl = $(element).find('img').attr('src');
      
      if (name) {
        console.log('Found fellow:', { name, role, organization, classYear });
        
        // Generate a URL-friendly slug from the name
        const slug = name.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        
        fellows.push({
          name,
          role: role.replace(name, '').trim(),
          organization: organization.replace(/^at\s+/, '').trim(),
          class: parseInt(classYear),
          image: imageUrl,
          slug,
          social: {},
          bio: ''
        });
      }
    });
    
    console.log(`Found ${fellows.length} fellows`);
    
    // Fetch individual fellow profiles
    for (const fellow of fellows) {
      try {
        console.log(`Fetching profile for ${fellow.name}...`);
        const profileUrl = `https://yelp.leoafricainstitute.org/fellows/${fellow.slug}`;
        const profileResponse = await axios.get(profileUrl, axiosConfig);
        const profile$ = cheerio.load(profileResponse.data);
        
        // Extract bio with more flexible selectors
        fellow.bio = profile$('div[class*="bio"], .fellow-bio, .bio, p:contains("is")').first().text().trim();
        
        // Extract social links with more flexible selectors
        profile$('a[href*="linkedin.com"], a[href*="twitter.com"]').each((i, link) => {
          const href = $(link).attr('href');
          if (href.includes('linkedin.com')) {
            fellow.social.linkedin = href;
          } else if (href.includes('twitter.com')) {
            fellow.social.twitter = href;
          }
        });
        
        console.log(`Profile fetched for ${fellow.name}`);
        
        // Add a small delay to avoid overwhelming the server
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error(`Error fetching profile for ${fellow.name}:`, error.message);
      }
    }
    
    // Group fellows by class year
    const fellowsByYear = fellows.reduce((acc, fellow) => {
      if (!fellow.class) return acc;
      const year = fellow.class.toString();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(fellow);
      return acc;
    }, {});
    
    // Sort fellows within each year by name
    Object.keys(fellowsByYear).forEach(year => {
      fellowsByYear[year].sort((a, b) => a.name.localeCompare(b.name));
    });
    
    // Generate the fellows-data.js file
    const fileContent = `// Fellows data organized by year
export const fellowsData = ${JSON.stringify(fellowsByYear, null, 2)};
`;
    
    await fs.writeFile(
      path.join(__dirname, '../src/data/fellows-data.js'),
      fileContent,
      'utf8'
    );
    
    console.log('Fellows data has been successfully fetched and saved!');
    console.log('Total fellows:', fellows.length);
    console.log('Years:', Object.keys(fellowsByYear).sort().reverse());
  } catch (error) {
    console.error('Error fetching fellows data:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    }
  }
}

fetchFellowsData(); 