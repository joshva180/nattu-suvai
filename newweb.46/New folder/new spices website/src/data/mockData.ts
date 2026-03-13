export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  longDescription: string;
  category: string;
  origin: string;
  grade: string;
  gradient: string;
  icon: string;
}

export const products: Product[] = [
{
  id: 'cardamom-premium',
  name: 'Premium Green Cardamom',
  price: 2499,
  description: 'Premium green cardamom from Kerala hills',
  longDescription:
  'Hand-picked from the lush hills of Kerala, our premium green cardamom pods are prized for their intense aroma, vibrant green color, and bold flavor. Perfect for both sweet and savory dishes, as well as traditional chai.',
  category: 'Whole Spices',
  origin: 'Idukki, Kerala',
  grade: '8mm Bold',
  gradient: 'from-emerald-600 to-green-800',
  icon: '🌿'
},
{
  id: 'black-pepper-malabar',
  name: 'Malabar Black Pepper',
  price: 899,
  description: 'Bold Malabar black pepper, sun-dried',
  longDescription:
  'Sourced directly from the Malabar coast, these bold, sun-dried black peppercorns deliver a sharp, penetrating aroma and a robust, woody flavor that elevates any culinary creation.',
  category: 'Whole Spices',
  origin: 'Malabar Coast, Kerala',
  grade: 'Tellicherry Garbled Extra Bold (TGEB)',
  gradient: 'from-slate-700 to-gray-900',
  icon: '⚫'
},
{
  id: 'cloves-aromatic',
  name: 'Aromatic Whole Cloves',
  price: 1299,
  description: 'Aromatic whole cloves from Tamil Nadu',
  longDescription:
  'Rich in essential oils, our hand-harvested cloves from Tamil Nadu offer a warm, sweet, and slightly bitter flavor. Essential for biryanis, garam masala, and festive baking.',
  category: 'Whole Spices',
  origin: 'Kanyakumari, Tamil Nadu',
  grade: 'Hand-picked Premium',
  gradient: 'from-amber-700 to-amber-900',
  icon: '🌸'
},
{
  id: 'fennel-seeds-sweet',
  name: 'Sweet Lucknowi Fennel',
  price: 449,
  description: 'Sweet Lucknowi fennel seeds',
  longDescription:
  'Known for their sweet, licorice-like flavor and digestive properties, our Lucknowi fennel seeds are smaller, sweeter, and more aromatic than standard varieties.',
  category: 'Whole Spices',
  origin: 'Lucknow, Uttar Pradesh',
  grade: 'Premium Sweet',
  gradient: 'from-lime-500 to-green-600',
  icon: '🌱'
},
{
  id: 'cumin-seeds-earthy',
  name: 'Earthy Rajasthani Cumin',
  price: 599,
  description: 'Earthy Rajasthani cumin seeds',
  longDescription:
  'Sun-dried in the arid climate of Rajasthan, these cumin seeds boast a potent, earthy, and warm flavor profile that forms the backbone of Indian cooking.',
  category: 'Whole Spices',
  origin: 'Jodhpur, Rajasthan',
  grade: 'Machine Cleaned 99%',
  gradient: 'from-yellow-600 to-amber-700',
  icon: '🌾'
},
{
  id: 'mustard-seeds-yellow',
  name: 'Yellow Mustard Seeds',
  price: 199,
  description: 'Sharp yellow mustard seeds',
  longDescription:
  'These bright yellow mustard seeds offer a milder, sweeter flavor compared to black mustard, perfect for pickling, marinades, and delicate sauces.',
  category: 'Whole Spices',
  origin: 'Punjab',
  grade: 'Premium Sortex Cleaned',
  gradient: 'from-yellow-400 to-orange-500',
  icon: '🟡'
},
{
  id: 'fenugreek-seeds',
  name: 'Golden Fenugreek Seeds',
  price: 349,
  description: 'Bitter-sweet fenugreek seeds',
  longDescription:
  'With their distinctive maple-like aroma and slightly bitter taste, our golden fenugreek seeds are essential for authentic curries, spice blends, and traditional remedies.',
  category: 'Whole Spices',
  origin: 'Rajasthan',
  grade: 'Premium Grade A',
  gradient: 'from-orange-400 to-amber-600',
  icon: '🔶'
}];


export const blogPosts = [
{
  id: 'health-benefits-cardamom',
  title: 'The Health Benefits of Cardamom',
  excerpt:
  'Discover why cardamom is called the Queen of Spices and how it can improve your daily health...',
  date: 'Oct 12, 2023',
  category: 'Health & Wellness',
  gradient: 'from-emerald-100 to-emerald-200'
},
{
  id: 'identify-pure-spices',
  title: 'How to Identify Pure Spices',
  excerpt:
  'A guide to spotting adulterated spices in the market and ensuring you only buy the best quality...',
  date: 'Nov 05, 2023',
  category: 'Buying Guide',
  gradient: 'from-amber-100 to-amber-200'
},
{
  id: 'spice-storage-tips',
  title: 'Spice Storage Tips for Maximum Freshness',
  excerpt:
  'Keep your spices aromatic and flavorful longer with these professional storage techniques...',
  date: 'Nov 28, 2023',
  category: 'Kitchen Tips',
  gradient: 'from-slate-100 to-slate-200'
},
{
  id: 'indian-spice-market-2024',
  title: 'Indian Spice Market Trends 2024',
  excerpt:
  'Key insights into the growing global demand for authentic, ethically sourced Indian spices...',
  date: 'Dec 15, 2023',
  category: 'Industry News',
  gradient: 'from-orange-100 to-orange-200'
},
{
  id: 'farm-to-kitchen-cardamom',
  title: 'From Farm to Kitchen: The Cardamom Journey',
  excerpt:
  'Follow the journey of our premium cardamom from the misty hills of Kerala to your pantry...',
  date: 'Jan 10, 2024',
  category: 'Our Story',
  gradient: 'from-green-100 to-green-200'
},
{
  id: 'whole-vs-ground-spices',
  title: 'Cooking with Whole vs Ground Spices',
  excerpt:
  'When to use whole spices and when to grind them for maximum flavor impact in your cooking...',
  date: 'Feb 02, 2024',
  category: 'Cooking Guide',
  gradient: 'from-yellow-100 to-yellow-200'
}];