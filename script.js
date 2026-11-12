// ---------- Image fallback (no broken images) ----------
function createArtisticFallbackUri(title, subtitle) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0E0B09"/>
          <stop offset="55%" stop-color="#2A1B10"/>
          <stop offset="100%" stop-color="#35281D"/>
        </linearGradient>
        <linearGradient id="ridge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.28"/>
          <stop offset="100%" stop-color="#0E0B09" stop-opacity="0.95"/>
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#bg)"/>
      <circle cx="620" cy="120" r="95" fill="#F59E0B" fill-opacity="0.14"/>
      <path d="M0 360 Q 180 240 370 320 T 800 260 L 800 500 L 0 500 Z" fill="url(#ridge)"/>
      <path d="M0 410 Q 260 320 500 380 T 800 340 L 800 500 L 0 500 Z" fill="#0E0B09" fill-opacity="0.75"/>
    </svg>`;
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

function handleImageFallback(imgEl, title, subtitle) {
  if (imgEl.dataset.fallbackApplied) return;
  imgEl.dataset.fallbackApplied = 'true';
  imgEl.src = createArtisticFallbackUri(title, subtitle);
}

// Unsplash URL helper
const U = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1100&q=85`;

// ---------- Data: 22 venues (12 dining, 10 stays) ----------
const VENUES_DATA = [
  // ----- Restaurants & Cafes -----
  {
    id: 'vieux-chalet', code: '01', name: 'Vieux Chalet Swiss Restaurant', category: 'restaurant',
    area: 'Marcos Hwy / Taktak', barangay: 'Sitio Sampaguita, Brgy. Santa Cruz',
    address: '456 Taktak Road, Sitio Sampaguita, Brgy. Santa Cruz, Antipolo, Rizal',
    signatureShort: 'Swiss Raclette & Fondue',
    signatureFull: 'Authentic Swiss Raclette, Cheese Fondue, Homemade Whole Wheat Bread, Osso Buco & Apple Strudel',
    priceTier: '₱₱₱', priceRange: '₱850 – ₱1,600 / head', rating: 4.8,
    hours: 'Daily: 9:00 AM – 9:00 PM',
    description: 'Established in 1984 on a quiet hilltop off Taktak Road, Vieux Chalet is Antipolo’s most iconic Swiss-Filipino alpine sanctuary. Dine inside a warm timber chalet overlooking the Marikina Valley while savoring melted raclette and freshly baked bread.',
    insiderTip: 'Request a balcony table before 5:00 PM on clear evenings for unobstructed sunset views over Metro Manila.',
    gradient: 'from-amber-950 via-stone-900 to-yellow-950/70',
    gallery: [
      { label: 'Chalet Ambiance', url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/22/59/05/capti_r.jpg?w=1000&h=1000&s=1'},
      { label: 'Fondue & Raclette', url: 'https://blog.inyourpocket.com/switzerland/wp-content/uploads/sites/10/2018/02/Fiondue_V1_blog-726x380.jpg' },
      { label: 'Sunset Deck', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpSEqo0MPZ_KU9xYHnPTEG4DsFzK5qrQ8GBEUAdUrltWcMcqnWFt57ZK4r&s=10'
        
       }
    ]
  },
  {
    id: 'pinto-cafe-rizal', code: '02', name: 'Pinto Art Museum Cafe (Cafe Rizal)', category: 'restaurant',
    area: 'San Roque / Cathedral', barangay: 'Grand Heights Subd., Brgy. San Roque',
    address: '1 Sierra Madre St., Grand Heights Subd., Brgy. San Roque, Antipolo, Rizal',
    signatureShort: 'Mediterranean Mezze & Ilonggo Dishes',
    signatureFull: 'Mediterranean Mezze Platters, Crispy Pork Belly, Herb-Crusted Fish, Fresh Calamansi & Barako Brews',
    priceTier: '₱₱₱', priceRange: '₱550 – ₱1,000 / head', rating: 4.7,
    hours: 'Tue–Sun: 10:00 AM – 6:00 PM (Closed Mondays)',
    description: 'Tucked inside the whitewashed galleries of Pinto Art Museum, Cafe Rizal offers open-air Mediterranean and Filipino comfort fare surrounded by contemporary sculptures and lush tropical gardens.',
    insiderTip: 'Museum admission is required to enter Cafe Rizal; plan a morning gallery walk followed by a shaded courtyard lunch.',
    gradient: 'from-sky-950 via-stone-900 to-amber-950',
    gallery: [
      { label: 'Garden Courtyard', url: 'https://shoestringdiary.wordpress.com/wp-content/uploads/2018/06/pinto_museum14a-ss_diaries.jpg' },
      { label: 'Mezze Platter', url: 'https://cdn.loveandlemons.com/wp-content/uploads/2022/08/mezze-platter-1.jpg' },
      { label: 'Whitewashed Gallery', url: 'https://images.squarespace-cdn.com/content/v1/5cfff07c3246bd00017d10ba/572284be-0fe9-4d34-bfeb-abbc749a601c/dji_export_20250603_photo_0011.jpg?format=1500w' }
    ]
  },
  {
    id: 'burrow-cafe', code: '03', name: 'Burrow Cafe at Antipolo Beehouse', category: 'restaurant',
    area: 'Marcos Hwy / Taktak', barangay: 'Beverly Hills Subd., Brgy. Beverly Hills',
    address: '113 Beverly Hills Ave., Beverly Hills Subd., Antipolo, Rizal',
    signatureShort: 'Sourdough Pizza & Lechon Gising-Gising',
    signatureFull: 'Artisanal Sourdough Pizzas, Lechon Gising-Gising, All-Day Filipino Breakfast, Locally Roasted Coffee',
    priceTier: '₱₱₱', priceRange: '₱600 – ₱1,200 / head', rating: 4.9,
    hours: 'Wed–Fri: 8:00 AM – 4:00 PM | Sat–Sun: 7:30 AM – 5:00 PM',
    description: 'Descend stone steps into an underground timber cafe nestled inside a private forest reserve. Floor-to-ceiling glass walls frame towering trees and a gentle woodland creek.',
    insiderTip: 'Advance online reservations are mandatory. Weekend brunch slots fill up to two weeks in advance.',
    gradient: 'from-amber-950 via-amber-950 to-stone-900',
    gallery: [
      { label: 'Forest Glasshouse', url: 'https://images.squarespace-cdn.com/content/v1/56c3dbb2cf80a1474d4d147f/1595579133775-SHIUR07WE5V8UCSNON3A/Screen+Shot+2017-11-30+at+5.39.01+PM.png?format=1500w' },
      { label: 'Sourdough & Brunch', url: 'https://www.walderwellness.com/wp-content/uploads/2018/08/Easy-Sourdough-French-Toast-Walder-Wellness-2.jpg' },
      { label: 'Woodland Sanctuary', url: 'https://images.squarespace-cdn.com/content/v1/56c3dbb2cf80a1474d4d147f/1532795713149-E1YAKOOKCXUDFVC5AJ8Y/Burrow-02-TopGarden.jpg' }
    ]
  },
  {
    id: 'tahanan-bistro', code: '04', name: 'Tahanan Bistro', category: 'restaurant',
    area: 'San Roque / Cathedral', barangay: 'Lores Farm Subd., Brgy. San Roque',
    address: '22 Loresville Drive, Lores Farm Subd., Brgy. San Roque, Antipolo, Rizal',
    signatureShort: '5-Course Filipino Degustation',
    signatureFull: 'Seasonal 5-Course Artisanal Filipino Tasting Menu, Taktak-Inspired Desserts & Craft Cocktails',
    priceTier: '₱₱₱₱', priceRange: '₱2,500+ / head (Set Tasting)', rating: 4.9,
    hours: 'Fri–Sun: 11:00 AM – 3:00 PM, 6:00 PM – 10:00 PM (By Reservation)',
    description: 'Set inside a handcrafted residence built from reclaimed Philippine hardwood, Tahanan Bistro elevates regional Filipino ingredients into an intimate, slow-paced 5-course tasting menu.',
    insiderTip: 'Reservation-only. Tell the kitchen about dietary needs when booking and arrive 20 minutes early to see the gardens.',
    gradient: 'from-amber-900 via-orange-950 to-stone-900',
    gallery: [
      { label: 'Venue', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcP90iaY7RHonExCqib-bHyKwxu7G8y5zbWdE_sq9zzzXcU_Gx3yhtq-lw&s=10' },
      { label: 'Hardwood Dining Room', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsXuQaFvdEwjYPo7RrfyLVFlGOVj3dapkVysz7QvGCLItZgfpf1TIos8Z-&s=10' },
      { label: 'Artisanal Plating', url: 'https://primer.com.ph/food/wp-content/uploads/sites/4/2017/04/Tahanan-Bistro-10_web.jpg' }
    ]
  },
  {
    id: 'yellow-lantern-cafe', code: '05', name: 'Yellow Lantern Cafe', category: 'restaurant',
    area: 'Sumulong Hwy', barangay: 'Brgy. Mambugan, Sumulong Highway',
    address: '267 Sumulong Highway, Brgy. Mambugan, Antipolo, Rizal',
    signatureShort: 'Umaapaw na Paella & Crispy Pata',
    signatureFull: 'Umaapaw na Paella (Overflowing Seafood Paella), Crispy Pata, Sizzling Sisig & Fresh Fruit Shakes',
    priceTier: '₱₱', priceRange: '₱280 – ₱600 / head', rating: 4.6,
    hours: 'Daily: 10:00 AM – 11:00 PM',
    description: 'A lively al fresco dining staple along Sumulong Highway, known for generous Filipino-Spanish sharing platters, cool evening breezes, and direct views of the Ortigas-Makati skyline.',
    insiderTip: 'Order the Umaapaw na Paella for groups of 3–4 and grab an edge railing table around 5:30 PM.',
    gradient: 'from-yellow-950/80 via-stone-900 to-amber-950',
    gallery: [
      { label: 'Seafood Paella', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKquYTeq50Uux7ZknCMhGZ-oMUL_bsWw0vcMa_T_HV80v--EEWboifemM&s=10' },
      { label: 'Al Fresco Terrace', url: 'https://www.tayo.ph/images/destination/yellow-lantern-cafe-antipolo/yellow-lantern-cafe-in-antipolo-city-rizal-philippines-004.jpg' },
      { label: 'Evening Skyline', url: 'https://www.tayo.ph/images/destination/yellow-lantern-cafe-antipolo/yellow-lantern-cafe-in-antipolo-city-rizal-philippines-003.jpg' }
    ]
  },
  {
    id: 'kaulayaw-coffee', code: '06', name: 'Kaulayaw Coffee', category: 'restaurant',
    area: 'Sumulong Hwy', barangay: 'Brgy. Santa Cruz, Sumulong Highway',
    address: '23 Sumulong Highway, Brgy. Santa Cruz, Antipolo, Rizal',
    signatureShort: 'Single-Origin PH Pour-Overs',
    signatureFull: 'Single-Origin Philippine Pour-Overs (Benguet, Mt. Apo & Bukidnon), Spanish Latte, Ube Champorado',
    priceTier: '₱₱', priceRange: '₱180 – ₱420 / head', rating: 4.8,
    hours: 'Daily: 7:00 AM – 10:00 PM',
    description: 'A proudly local specialty coffee house championing smallholder Philippine coffee farmers. Enjoy hand-poured single-origin brews and Filipino-inspired pastries on a breezy multi-level deck.',
    insiderTip: 'Early mornings (7:00–8:30 AM) offer crisp mountain mist and quiet seats before the weekend cyclist crowd.',
    gradient: 'from-amber-900/90 via-stone-900 to-stone-900',
    gallery: [
      { label: 'Pour-Over', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_nPsvd8r5R5BNt5rHqEcUjcMn8hIK60t6In_rkZcsjea_2_12i_99AsYj&s=10' },
      { label: 'Overlooking Deck', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThlll6Ybk2d25rlf271x8LLsVBdpbvhHzurG52JvPNF0kokikcwrwSc20&s=10' },
      { label: 'Pastries', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrCijW9h3akQFLOu994Y8HuxgEuve3t4qQAb3F237D4g2Ofhr3zWf4cPxs&s=10'}
    ]
  },
  {
    id: 'chives-bistro', code: '07', name: 'Chives Bistro and Market', category: 'restaurant',
    area: 'Circumferential Rd', barangay: 'Circumferential Road, Brgy. Dalig',
    address: 'Circumferential Road, Brgy. Dalig, Antipolo, Rizal',
    signatureShort: 'Slow-Roasted Belly & Artisan Deli',
    signatureFull: 'Slow-Roasted Pork Belly, Truffle Mushroom Pasta, Artisanal Deli Cheeses, House-Baked Cakes',
    priceTier: '₱₱₱', priceRange: '₱500 – ₱950 / head', rating: 4.7,
    hours: 'Tue–Sun: 11:00 AM – 9:00 PM',
    description: 'A refined neighborhood bistro and gourmet market blending European comfort cooking with curated pantry staples, homemade sauces, and an intimate dining room.',
    insiderTip: 'Browse the market shelves after your meal for house-made pesto, cured meats, and fresh pastries to take home.',
    gradient: 'from-orange-950 via-stone-900 to-amber-950',
    gallery: [
      { label: 'Bistro Dining Room', url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZOnl4K5W8WWqfVpebev23IJsEzC-C_BHdKgJaQviG9NGXKaHTFw_lxlZYhc5wTtsGuGIMvdrw3sUw5KSweCwMDnx4lz7OtEQxg8U4nmcvcDe5YmBxsr1x-op4WhsPaV7f57FS/s1600/14-Chives-Bistro-Market-Restaurant-Antipolo-YedyLicious-Manila-FoodBlog-Review-YedyCalaguas.jpg' },
      { label: 'Truffle Pasta', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4HWsiVuQDitYeyGS5ODra31aUI6jvrTeSOii_FQAJ9A&s' },
      { label: 'Gourmet Pantry', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTXkwxXCbt4q4C1Cmkgiob-A-4n1bGTYYXdlgPyCAEtA&s=10' }
    ]
  },
  {
    id: 'cafe-lupe', code: '08', name: 'Cafe Lupe', category: 'restaurant',
    area: 'Sumulong Hwy', barangay: 'Brgy. Mambugan, Sumulong Highway',
    address: 'Lot 2-B & 2-C Sumulong Highway, Brgy. Mambugan, Antipolo, Rizal',
    signatureShort: 'Tex-Mex Platters & Filipino Classics',
    signatureFull: 'Sizzling Fajitas, Crispy Bagnet Kare-Kare, Nachos Grande, Calamansi Margaritas & Live Acoustic Sets',
    priceTier: '₱₱', priceRange: '₱350 – ₱700 / head', rating: 4.5,
    hours: 'Daily: 11:00 AM – 12:00 MN',
    description: 'A vibrant hillside fiesta restaurant offering Mexican-Filipino favorites, multi-tier viewing terraces, and live weekend acoustic music under the stars.',
    insiderTip: 'Ideal for late dinners after 8:00 PM, when Sumulong traffic eases and the city lights sparkle.',
    gradient: 'from-yellow-900/70 via-stone-900 to-orange-950',
    gallery: [
      { label: 'Venue', url: 'https://x.cdrst.com/foto/hotel-sf/2b11810/granderesp/foto-hotel-2b10d66.jpg' },
      { label: 'Nachos', url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/f1/de/3e/nachos-muchos.jpg?w=1200&h=1200&s=1' },
      { label: 'Night Lights', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7XtXTVsBBD-rEc67ybTsK6AT9up85mwPtTwgAMnXqc4HRGkXntE27vsn&s=10' }
    ]
  },
  {
    id: 'ridge-grill-sumulong', code: '09', name: 'Ridge Grill Sumulong', category: 'restaurant',
    area: 'Sumulong Hwy', barangay: 'Brgy. Mambugan, Sumulong Highway',
    address: 'Sumulong Highway, Brgy. Mambugan, Antipolo, Rizal',
    signatureShort: 'Grilled Liempo & Sinigang',
    signatureFull: 'Charcoal Grilled Liempo, Sinigang na Baboy, Inihaw na Pusit, Buko Pandan',
    priceTier: '₱₱', priceRange: '₱250 – ₱550 / head', rating: 4.4,
    hours: 'Daily: 10:00 AM – 10:00 PM',
    description: 'A casual open-air grill on the highway ridge, serving hearty Filipino barbecue to big family tables with a view of the city lights.',
    insiderTip: 'Arrive before 6:00 PM on weekends to get a railing table.',
    gradient: 'from-orange-950 via-stone-900 to-amber-950',
    gallery: [
      { label: 'Grill Terrace', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD4I9nWazRteDdjNIaN2M0mhobB50ANAEg_2knYp-e3_G4tXYiDp58j0NX&s=10' },
      { label: 'Filipino Feast', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnI5RrXwbOKNiTGRk_I-BmTiXCKePNRYvMD3kXDimiE-qxb5FSxCmElRfZ&s=10' },
      { label: 'City Lights', url: 'https://mediaim.expedia.com/localexpert/47495365/8c3a9aa7-70f8-4705-b36c-138992c72b17.jpg' }
    ]
  },
  {
    id: 'taktak-brew-house', code: '10', name: 'Taktak Brew House', category: 'restaurant',
    area: 'Marcos Hwy / Taktak', barangay: 'Brgy. Santa Cruz, Taktak Road',
    address: 'Taktak Road, Brgy. Santa Cruz, Antipolo, Rizal',
    signatureShort: 'Cold Brew & Waffles',
    signatureFull: 'Nitro Cold Brew, Belgian Waffles, Tuna Melt Sandwiches, Calamansi Cheesecake',
    priceTier: '₱₱', priceRange: '₱200 – ₱450 / head', rating: 4.6,
    hours: 'Daily: 8:00 AM – 9:00 PM',
    description: 'A cozy garden cafe a short walk from the falls park, popular with cyclists and weekend brunch crowds.',
    insiderTip: 'Garden tables fill quickly on weekend mornings; a weekday visit is quieter.',
    gradient: 'from-amber-900/90 via-stone-900 to-stone-900',
    gallery: [
      { label: 'Garden Seating', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ38aVBXKvIFVGgVElKiZBy-9p62LwHbC8x9Wc_sayV7vva4P6xQHQKite&s=10' },
      { label: 'Cold Brew', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrACmgNQ_zx9d7i77PpsYab5h94Vh5lnRaMEdTGR6_iw&s' },
      { label: 'Desserts', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfdgK1RM39ymVTXJQo8A7rBNMHC1LMrZV3cOoS6NUeM0SQmU0IxbkJl2Hn&s=10' }
    ]
  },
  // ----- Hotels & Resorts -----
  {
    id: 'loreland-farm-resort', code: '11', name: 'Loreland Farm Resort', category: 'hotel',
    area: 'San Roque / Cathedral', barangay: 'Sitio Loreland, Brgy. San Roque',
    address: 'Sitio Loreland, Brgy. San Roque, Antipolo, Rizal',
    signatureShort: 'Multi-Tiered Pools & Farm Cottages',
    signatureFull: '8 Outdoor Swimming Pools, Garden Villas & Cottages, Team-Building Lawns, Scenic Viewpoints',
    priceTier: '₱₱', priceRange: '₱3,200 – ₱6,800 / night', rating: 4.5,
    hours: 'Check-in: 2:00 PM | Check-out: 12:00 PM (Day Tour: 8 AM – 5 PM)',
    description: 'An expansive 8-hectare hillside farm resort featuring terraced swimming pools, native-inspired cottages, and shaded tropical gardens, made for family weekend escapes.',
    insiderTip: 'Overnight guests get complimentary pool access and an easy walk to Luljetta’s Hanging Gardens.',
    gradient: 'from-amber-900 via-amber-950 to-stone-900',
    gallery: [
      { label: 'Terraced Pools', url: 'https://images.trvl-media.com/lodging/7000000/6490000/6482700/6482642/d50c35c5.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill' },
      { label: 'Tropical Gardens', url: 'https://images.trvl-media.com/lodging/7000000/6490000/6482700/6482642/e4b130a7.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill' },
      { label: 'Hillside Villa', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMRcXqN48ScopozJzySxzKUKZpLj6pL_hUuN1Y0Hb7dOcwaoxPwQ9rQ40v&s=10' }
    ]
  },
  {
    id: 'luljettas-garden-suites', code: '12', name: "Luljetta's Place Garden Suites", category: 'hotel',
    area: 'San Roque / Cathedral', barangay: 'Sitio Loreland, Brgy. San Roque',
    address: 'Sitio Loreland, Brgy. San Roque, Antipolo, Rizal',
    signatureShort: 'Hydro-Massage Pools & Hanging Spa',
    signatureFull: 'Hanging Gardens & Spa, Heated Jacuzzi, Hydro-Massage Pools, Fish Spa & Garden Suites',
    priceTier: '₱₱₱₱', priceRange: '₱6,200 – ₱11,500 / night', rating: 4.9,
    hours: 'Check-in: 2:00 PM | Check-out: 12:00 PM',
    description: 'Antipolo’s boutique wellness sanctuary on a lush ridge overlooking Laguna de Bay. Stay in tranquil garden suites with direct access to terraced hydro-pools and meditation lounges.',
    insiderTip: 'Book a suite package that includes the spa circuits and Antipolo suman sa ibos merienda.',
    gradient: 'from-amber-800 via-orange-950 to-stone-900',
    gallery: [
      { label: 'Hanging Pool', url: 'https://res.klook.com/klook-hotel/image/upload/fl_lossy.progressive,w_1200,h_800,c_fill,q_85/travelapi/38000000/37510000/37501500/37501485/4cd63950_z.jpg' },
      { label: 'Garden Suite', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEvPByi-pJDTVuB5KW-nnWJTOUTYbeG_vhY2ahihxKQ&s=10' },
      { label: 'Spa Lounge', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqy5AzWu1y6Y0ykSPVKM03F3bsoVN4EKxQm-RL2An-1kpr9a_PHKu0EnSt&s=10' }
    ]
  },
  {
    id: 'leblanc-hotel', code: '13', name: 'LeBlanc Hotel and Resort', category: 'hotel',
    area: 'Marcos Hwy / Taktak', barangay: '3 Taktak Road, Brgy. Santa Cruz',
    address: '3 Taktak Road, Brgy. Santa Cruz, Antipolo, Rizal',
    signatureShort: 'Courtyard Pool & Modern Suites',
    signatureFull: 'Courtyard Swimming Pool, Minimalist Deluxe & Executive Suites, In-House Bistro, Event Hall',
    priceTier: '₱₱₱', priceRange: '₱4,200 – ₱7,500 / night', rating: 4.7,
    hours: 'Check-in: 2:00 PM | Check-out: 12:00 PM',
    description: 'A sleek boutique hotel along Taktak Road blending modern interiors with tropical foliage, just a few minutes’ walk from Hinulugang Taktak waterfall park.',
    insiderTip: 'Request a pool-facing veranda room on the second floor for quiet morning coffee.',
    gradient: 'from-orange-900 via-amber-950 to-stone-900',
    gallery: [
      { label: 'Courtyard Pool', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpCki_clgdUk_xviXEtMMC7xo1MiGqgKqn4STnLUtriQ&s=10' },
      { label: 'Veranda Suite', url: 'https://images.trvl-media.com/lodging/19000000/18370000/18363000/18362965/24669b4d.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill' },
      { label: 'Boutique Lobby', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqhGsnYPsTe2U_YNrSE5g4In9Y47xoSsxtG1nMaWFTcw&s' }
    ]
  },
  {
    id: 'altaroca-mountain-resort', code: '14', name: 'Altaroca Mountain Resort Antipolo', category: 'hotel',
    area: 'Marcos Hwy / Taktak', barangay: 'Taktak Road, Bankers Village, Brgy. Santa Cruz',
    address: 'Taktak Road, Bankers Village, Brgy. Santa Cruz, Antipolo, Rizal',
    signatureShort: 'Hillside Infinity Pools & Family Lofts',
    signatureFull: 'Multi-Tiered Hillside Infinity Pools, Family Loft Suites, Sunset Deck & Event Pavilions',
    priceTier: '₱₱₱', priceRange: '₱4,800 – ₱9,200 / night', rating: 4.6,
    hours: 'Check-in: 2:00 PM | Check-out: 12:00 PM',
    description: 'Set on a scenic ridge off Taktak Road, Altaroca offers sweeping Sierra Madre vistas, tiered infinity pools, and multi-bed loft rooms built for families and groups.',
    insiderTip: 'The upper infinity pool deck catches cool mountain winds in the late afternoon, perfect for sunset swims.',
    gradient: 'from-amber-900 via-stone-900 to-orange-950',
    gallery: [
      { label: 'Infinity Pool', url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/555816623.jpg?k=b9566da11bd9d012a9cd45d3bc2e8ad5878d01fbb0d72137281e078edd39d3a7&o=' },
      { label: 'Family Loft', url: 'https://images.trvl-media.com/lodging/12000000/11730000/11724600/11724578/ec5932ce.jpg?impolicy=fcrop&w=1200&h=800' },
      { label: 'Sunset Deck', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOkoaAsdy-LhqgDT8Yssj66uGijslqQk_bZsI6w8SDojpQjHYxW2UbGA&s=10'}
    ]
  },
  {
    id: 'seven-suites-observatory', code: '15', name: 'Seven Suites Hotel Observatory', category: 'hotel',
    area: 'Sumulong Hwy', barangay: 'Hollywood Hills Subd., Sumulong Highway',
    address: 'Hollywood Hills Subd., Sumulong Highway, Antipolo, Rizal',
    signatureShort: 'Private Observatory & Stargazing',
    signatureFull: 'Private Astronomical Observatory, Guided Stargazing Sessions, Skyline View Suites',
    priceTier: '₱₱₱', priceRange: '₱4,500 – ₱8,500 / night', rating: 4.6,
    hours: 'Check-in: 2:00 PM | Check-out: 12:00 PM',
    description: 'Perched high along Sumulong Highway, Seven Suites pairs boutique skyline suites with a large private astronomical observatory and telescope stargazing sessions.',
    insiderTip: 'Confirm telescope viewing schedules at check-in, especially on clear dry-season nights (Nov–May).',
    gradient: 'from-sky-950 via-stone-900 to-amber-950',
    gallery: [
      { label: 'Skyline Terrace', url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/4d/84/0d/oyo-185-seven-suites.jpg?w=900&h=500&s=1' },
      { label: 'Observatory Suite', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYh9kVaRDTlzUaoK_ivPeImrRNcYIR0d9A0MhG6gNgA&s=10' },
      { label: 'Night Sky', url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-mobile/tix-hotel/images-web/2020/11/16/240ba79b-11c5-4c1f-a010-eb97504a65aa-1605481289434-b883657b25a52f849f3af9624004341b.jpg' }
    ]
  },
  {
    id: 'eugenio-lopez-center', code: '16', name: 'Eugenio Lopez Center', category: 'hotel',
    area: 'Sumulong Hwy', barangay: 'Sumulong Highway, Brgy. Santa Cruz',
    address: 'Sumulong Highway, Brgy. Santa Cruz, Antipolo, Rizal',
    signatureShort: 'Skyline View Rooms & Oscar’s Dining',
    signatureFull: 'Panoramic Metro Manila View Rooms, Landscaped Crest Gardens, Direct Access to Oscar’s Restaurant',
    priceTier: '₱₱₱', priceRange: '₱4,600 – ₱8,800 / night', rating: 4.7,
    hours: 'Check-in: 2:00 PM | Check-out: 12:00 PM',
    description: 'On one of Antipolo’s highest ridge crests, the Eugenio Lopez Center offers serene executive rooms, manicured cliffside lawns, and immediate access to Oscar’s dining.',
    insiderTip: 'Walk the main lawn at sunrise for clear views from Laguna de Bay to Manila Bay.',
    gradient: 'from-stone-800 via-orange-950 to-amber-950',
    gallery: [
      { label: 'Panoramic Crest', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvcAdjXGvEn-XaiOp5ukkBa6PYmSutTLJ5j8i9X5ERtWfozkaqVhfc44Ae&s=10' },
      { label: 'Cliffside Lawns', url: 'https://s3.amazonaws.com/xcaliber/images/660/o/7cad89ff-fdb9-494b-befa-f845879c342e_IMG_20211027_102245.jpg' },
      { label: 'Executive Room', url: 'https://images.trvl-media.com/lodging/16000000/15410000/15402900/15402805/0bd7a25b.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill' }
    ]
  }
];

// ---------- State ----------
const STORAGE_KEY = 'antipolo_ledger_itinerary_v1';

function loadItinerary() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
  catch (e) { return []; }
}

let state = {
  category: 'all',
  area: 'all',
  price: 'all',
  selectedVenueId: 'vieux-chalet',
  activePhotoIndex: 0,
  itinerary: loadItinerary()
};

// ---------- DOM ----------
const ledgerRowsEl = document.getElementById('ledger-rows');
const emptyStateEl = document.getElementById('empty-state');
const visibleCountEl = document.getElementById('visible-count');
const inspectorContentEl = document.getElementById('inspector-content');
const mobileInspectorContentEl = document.getElementById('mobile-inspector-content');
const mobileDossierSheet = document.getElementById('mobile-dossier-sheet');

const categoryTabs = document.querySelectorAll('.category-tab');
const pricePills = document.querySelectorAll('.price-pill');
const areaFilterEl = document.getElementById('area-filter');
const resetFiltersBtn = document.getElementById('reset-filters-btn');

const itineraryDrawer = document.getElementById('itinerary-drawer');
const itineraryBadge = document.getElementById('itinerary-badge');
const itineraryListEl = document.getElementById('itinerary-list');

// ---------- Style helpers ----------
const TAB_BASE = 'category-tab px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer';
const TAB_ON = {
  all: 'bg-amber-500 text-stone-950',
  restaurant: 'bg-orange-500 text-stone-950',
  hotel: 'bg-sky-500 text-stone-950'
};
const TAB_OFF = 'text-stone-300 hover:text-white';

const PILL_BASE = 'price-pill px-2.5 py-1 rounded-lg font-mono text-[11px] cursor-pointer transition-colors';
const PILL_ON = 'font-semibold bg-amber-500/20 text-amber-300';
const PILL_OFF = 'font-medium text-stone-400 hover:text-white';

function paintCategoryTabs() {
  categoryTabs.forEach((tab) => {
    tab.className = `${TAB_BASE} ${tab.dataset.category === state.category ? TAB_ON[tab.dataset.category] : TAB_OFF}`;
  });
}

function paintPricePills() {
  pricePills.forEach((pill) => {
    pill.className = `${PILL_BASE} ${pill.dataset.price === state.price ? PILL_ON : PILL_OFF}`;
  });
}

// ---------- Counts (auto-update from data) ----------
function updateStaticCounts() {
  const r = VENUES_DATA.filter((v) => v.category === 'restaurant').length;
  const h = VENUES_DATA.filter((v) => v.category === 'hotel').length;
  const set = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };
  set('count-all', `(${VENUES_DATA.length})`);
  set('count-restaurant', `(${r})`);
  set('count-hotel', `(${h})`);
  set('hero-restaurant-count', `Browse ${r} Restaurants`);
  set('hero-hotel-count', `Explore ${h} Resorts`);
}

// ---------- Init ----------
function init() {
  updateStaticCounts();
  updateItineraryBadge();
  renderWorkspace();
  bindEvents();
  lucide.createIcons();
}

function quickJumpFilter(category) {
  state.category = category;
  paintCategoryTabs();
  renderWorkspace();
  const target = document.getElementById('directory-workspace');
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ---------- Filtering ----------
function getProcessedVenues() {
  return VENUES_DATA.filter((v) => {
    if (state.category !== 'all' && v.category !== state.category) return false;
    if (state.area !== 'all' && v.area !== state.area) return false;
    if (state.price !== 'all' && v.priceTier !== state.price) return false;
    return true;
  });
}

// ---------- Render: directory + details ----------
function renderWorkspace() {
  const venues = getProcessedVenues();
  visibleCountEl.textContent = venues.length;

  const hasFilters = state.category !== 'all' || state.area !== 'all' || state.price !== 'all';
  resetFiltersBtn.classList.toggle('hidden', !hasFilters);

  if (venues.length === 0) {
    ledgerRowsEl.innerHTML = '';
    emptyStateEl.classList.remove('hidden');
    renderEmptyInspector();
    lucide.createIcons();
    return;
  }

  emptyStateEl.classList.add('hidden');

  if (!venues.some((v) => v.id === state.selectedVenueId)) {
    state.selectedVenueId = venues[0].id;
    state.activePhotoIndex = 0;
  }

  ledgerRowsEl.innerHTML = venues.map((venue) => {
    const isSelected = venue.id === state.selectedVenueId;
    const isSaved = state.itinerary.some((item) => item.id === venue.id);
    const isFood = venue.category === 'restaurant';

    return `
      <div
        role="option"
        tabindex="0"
        aria-selected="${isSelected}"
        aria-label="${venue.name}"
        title="${venue.name}"
        data-id="${venue.id}"
        onclick="selectVenue('${venue.id}', true)"
        onkeydown="if(event.key==='Enter'){selectVenue('${venue.id}', true)}"
        class="ledger-row group relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-900 hairline-all cursor-pointer transition-all duration-200 ${
          isSelected ? (isFood ? 'ring-2 ring-orange-400' : 'ring-2 ring-sky-400') + ' scale-[1.02] z-10' : 'opacity-75 hover:opacity-100'
        }"
      >
        <img src="${venue.gallery[0].url}" alt="${venue.name}"
          onerror="handleImageFallback(this)"
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#0E0B09]/50 via-transparent to-transparent pointer-events-none"></div>
        <span class="absolute bottom-0 inset-x-0 h-1 ${isFood ? 'bg-orange-400' : 'bg-sky-400'}"></span>
        <button type="button"
          onclick="event.stopPropagation(); toggleSaveVenue('${venue.id}')"
          aria-label="${isSaved ? 'Remove from itinerary' : 'Save to itinerary'}"
          class="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center text-base backdrop-blur-md cursor-pointer transition-colors ${
            isSaved ? 'bg-amber-500 text-stone-950' : 'bg-[#0E0B09]/70 text-stone-200 hover:bg-amber-500/30'
          }">${isSaved ? '✓' : '+'}</button>
      </div>
    `;
  }).join('');

  const activeVenue = venues.find((v) => v.id === state.selectedVenueId) || venues[0];
  renderInspector(activeVenue);
  lucide.createIcons();
}

function selectVenue(venueId, openMobileIfSmall = false) {
  if (state.selectedVenueId !== venueId) {
    state.selectedVenueId = venueId;
    state.activePhotoIndex = 0;
  }
  renderWorkspace();

  if (openMobileIfSmall && window.innerWidth < 1024) {
    mobileDossierSheet.classList.remove('hidden');
    mobileDossierSheet.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileSheet() {
  mobileDossierSheet.classList.add('hidden');
  mobileDossierSheet.classList.remove('flex');
  document.body.style.overflow = '';
}

function switchDossierPhoto(photoIdx) {
  state.activePhotoIndex = photoIdx;
  const activeVenue = VENUES_DATA.find((v) => v.id === state.selectedVenueId);
  if (activeVenue) {
    renderInspector(activeVenue);
    lucide.createIcons();
  }
}

function renderInspector(venue) {
  const isSaved = state.itinerary.some((item) => item.id === venue.id);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.name + ' ' + venue.address)}`;
  const isFood = venue.category === 'restaurant';
  const safePhotoIdx = Math.min(state.activePhotoIndex, venue.gallery.length - 1);
  const activePhoto = venue.gallery[safePhotoIdx];
  const safeName = venue.name.replace(/'/g, "\\'");
  const safeLabel = activePhoto.label.replace(/'/g, "\\'");

  const photoTabsHTML = venue.gallery.map((photo, idx) => `
    <button type="button" onclick="switchDossierPhoto(${idx})"
      class="px-2.5 py-1 rounded-lg font-mono text-[10px] font-semibold transition-all cursor-pointer backdrop-blur-md ${
        idx === safePhotoIdx
          ? 'bg-amber-500 text-stone-950 shadow-md'
          : 'bg-[#0E0B09]/75 text-stone-200 hover:bg-[#0E0B09] hairline-all'
      }">
      ${photo.label}
    </button>
  `).join('');

  const rawHtml = `
    <div class="animate-dossier">
      <!-- Photo -->
      <div class="relative h-60 w-full overflow-hidden bg-gradient-to-br ${venue.gradient}">
        <img src="${activePhoto.url}" alt="${venue.name} — ${activePhoto.label}"
          onerror="handleImageFallback(this, '${safeName}', '${safeLabel}')"
          class="w-full h-full object-cover animate-photo" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#1D1712] via-[#0E0B09]/35 to-[#0E0B09]/45"></div>

        <div class="absolute top-3.5 left-4 right-4 flex items-center justify-between gap-2">
          <span class="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-lg bg-[#0E0B09]/85 backdrop-blur-md text-amber-400 hairline-all">
            ${isFood ? 'Dining & Cafe' : 'Hotel & Stay'}
          </span>
          <span class="font-mono text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#0E0B09]/85 backdrop-blur-md text-yellow-400 hairline-all">★ ${venue.rating.toFixed(1)}</span>
        </div>

        <div class="absolute bottom-3 left-4 right-4 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          ${photoTabsHTML}
        </div>
      </div>

      <!-- Body -->
      <div class="p-5 sm:p-6 space-y-5">
        <div>
          <div class="flex items-center gap-2 font-mono text-[11px] text-amber-400 mb-1">
            <span>${venue.area}</span>
            <span class="text-stone-600">&bull;</span>
            <span class="text-yellow-300 font-medium">${venue.priceRange}</span>
          </div>
          <h2 class="font-display font-extrabold text-xl sm:text-2xl text-white leading-snug">${venue.name}</h2>
        </div>

        <p class="text-sm text-stone-300 leading-relaxed">${venue.description}</p>

        <div class="rounded-xl bg-[#0E0B09]/80 hairline-all divide-y divide-stone-800/80 text-xs">
          <div class="p-3.5 flex items-start gap-3">
            <i data-lucide="sparkles" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
            <div>
              <span class="font-mono text-[10px] uppercase tracking-wider text-stone-500 block">${isFood ? 'Menu Highlights' : 'Amenities'}</span>
              <span class="text-stone-200 font-medium leading-relaxed mt-0.5 block">${venue.signatureFull}</span>
            </div>
          </div>
          <div class="p-3.5 flex items-start gap-3">
            <i data-lucide="clock" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
            <div>
              <span class="font-mono text-[10px] uppercase tracking-wider text-stone-500 block">${isFood ? 'Hours' : 'Check-In / Check-Out'}</span>
              <span class="text-stone-200 font-medium mt-0.5 block">${venue.hours}</span>
            </div>
          </div>
          <div class="p-3.5 flex items-start gap-3">
            <i data-lucide="map-pin" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
            <div>
              <span class="font-mono text-[10px] uppercase tracking-wider text-stone-500 block">Address</span>
              <span class="text-stone-300 mt-0.5 block">${venue.address}</span>
            </div>
          </div>
        </div>

        <div class="rounded-xl bg-yellow-500/10 hairline-all border-yellow-500/25 p-3.5 flex items-start gap-3">
          <i data-lucide="lightbulb" class="w-4 h-4 text-yellow-400 shrink-0 mt-0.5"></i>
          <div class="text-xs">
            <span class="font-mono text-[10px] uppercase tracking-wider text-yellow-400 font-bold block mb-0.5">Tip</span>
            <p class="text-stone-200 leading-relaxed">${venue.insiderTip}</p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1">
          <button type="button" onclick="toggleSaveVenue('${venue.id}')"
            class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              isSaved
                ? 'bg-stone-800 hover:bg-rose-950/70 text-amber-400 hover:text-rose-300 hairline-all'
                : 'bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-lg shadow-amber-950/40'
            }">
            <i data-lucide="${isSaved ? 'check-circle-2' : 'bookmark-plus'}" class="w-4 h-4"></i>
            <span>${isSaved ? 'Saved (Remove)' : 'Save to Itinerary'}</span>
          </button>

          <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0E0B09] hover:bg-stone-800 text-stone-200 font-semibold text-xs sm:text-sm hairline-all transition-colors">
            <i data-lucide="external-link" class="w-4 h-4 text-amber-400"></i>
            <span>Open in Maps</span>
          </a>
        </div>
      </div>
    </div>
  `;

  const accent = isFood ? 'orange' : 'sky';
  const html = rawHtml.replace(/amber-/g, accent + '-');

  inspectorContentEl.innerHTML = html;
  mobileInspectorContentEl.innerHTML = html;
}

function renderEmptyInspector() {
  const html = `
    <div class="p-10 text-center">
      <p class="font-mono text-xs text-stone-500 uppercase mb-2">Nothing selected</p>
      <p class="text-sm text-stone-400">Change your filters to see venue details.</p>
    </div>
  `;
  inspectorContentEl.innerHTML = html;
  mobileInspectorContentEl.innerHTML = html;
}

// ---------- Itinerary ----------
function persistItinerary() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.itinerary)); }
  catch (e) { /* storage unavailable */ }
}

function updateItineraryBadge() {
  itineraryBadge.textContent = state.itinerary.length;
}

function toggleSaveVenue(venueId) {
  const venue = VENUES_DATA.find((v) => v.id === venueId);
  if (!venue) return;

  const idx = state.itinerary.findIndex((item) => item.id === venueId);
  if (idx > -1) {
    state.itinerary.splice(idx, 1);
    showToast(`Removed "${venue.name}"`, 'neutral');
  } else {
    state.itinerary.push({ id: venue.id, note: '' });
    showToast(`Added "${venue.name}" to your itinerary`, 'success');
  }

  persistItinerary();
  updateItineraryBadge();
  renderWorkspace();
  if (!itineraryDrawer.classList.contains('hidden')) renderItineraryDrawer();
}

function updateItineraryNote(venueId, text) {
  const item = state.itinerary.find((i) => i.id === venueId);
  if (item) {
    item.note = text;
    persistItinerary();
  }
}

function openItineraryDrawer() {
  renderItineraryDrawer();
  itineraryDrawer.classList.remove('hidden');
  itineraryDrawer.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeItineraryDrawer() {
  itineraryDrawer.classList.add('hidden');
  itineraryDrawer.classList.remove('flex');
  document.body.style.overflow = '';
}

function renderItineraryDrawer() {
  if (state.itinerary.length === 0) {
    itineraryListEl.innerHTML = `
      <div class="p-10 text-center">
        <div class="w-12 h-12 rounded-xl bg-[#1D1712] hairline-all text-amber-400 flex items-center justify-center mx-auto mb-3">
          <i data-lucide="map" class="w-5 h-5"></i>
        </div>
        <h3 class="font-display font-bold text-sm text-white mb-1">No stops saved yet</h3>
        <p class="text-xs text-stone-400 leading-relaxed">Click "+ Save" on any venue to add it here.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  itineraryListEl.innerHTML = state.itinerary.map((entry, idx) => {
    const venue = VENUES_DATA.find((v) => v.id === entry.id);
    if (!venue) return '';
    return `
      <div class="p-4 hover:bg-[#1D1712]/70 transition-colors">
        <div class="flex items-start justify-between gap-2.5">
          <div class="flex items-start gap-2.5 min-w-0">
            <span class="font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 shrink-0 mt-0.5">${String(idx + 1).padStart(2, '0')}</span>
            <div class="min-w-0">
              <button type="button"
                onclick="closeItineraryDrawer(); selectVenue('${venue.id}', true)"
                class="font-display font-bold text-sm text-white hover:text-amber-400 text-left truncate block w-full cursor-pointer">
                ${venue.name}
              </button>
              <p class="font-mono text-[11px] text-stone-400 mt-0.5">${venue.area} &bull; ${venue.priceTier}</p>
            </div>
          </div>
          <button type="button" onclick="toggleSaveVenue('${venue.id}')"
            class="w-7 h-7 rounded bg-[#1D1712] text-stone-400 hover:text-rose-400 flex items-center justify-center cursor-pointer shrink-0" title="Remove">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          </button>
        </div>
        <input type="text" value="${entry.note.replace(/"/g, '&quot;')}"
          oninput="updateItineraryNote('${venue.id}', this.value)"
          placeholder="Add a time or reservation note..."
          class="mt-2.5 w-full px-3 py-1.5 rounded-lg bg-[#0E0B09] text-xs text-stone-200 placeholder-stone-500 hairline-all focus:outline-none focus:border-amber-500/60" />
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

function copyItineraryPlan() {
  if (state.itinerary.length === 0) {
    showToast('Save at least one venue first.', 'neutral');
    return;
  }

  const lines = [
    'MY ANTIPOLO ITINERARY',
    '=====================',
    ...state.itinerary.map((entry, idx) => {
      const v = VENUES_DATA.find((item) => item.id === entry.id);
      const note = entry.note.trim() ? ` — ${entry.note.trim()}` : '';
      return `${String(idx + 1).padStart(2, '0')}. ${v.name} (${v.area} | ${v.priceTier})${note}`;
    })
  ];

  const ta = document.createElement('textarea');
  ta.value = lines.join('\n');
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showToast('Itinerary copied!', 'success');
  } catch (e) {
    showToast('Could not copy itinerary.', 'neutral');
  }
  document.body.removeChild(ta);
}

// ---------- Reset ----------
function resetAllFilters() {
  state.category = 'all';
  state.area = 'all';
  state.price = 'all';

  areaFilterEl.value = 'all';

  paintCategoryTabs();
  paintPricePills();
  renderWorkspace();
}

// ---------- Toast ----------
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const el = document.createElement('div');
  el.className = `pointer-events-auto flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium shadow-xl transition-all duration-300 translate-y-2 opacity-0 ${
    type === 'success' ? 'bg-amber-500 text-stone-950 font-semibold' : 'bg-[#1D1712] text-stone-100 hairline-all'
  }`;
  el.textContent = message;
  container.appendChild(el);

  requestAnimationFrame(() => el.classList.remove('translate-y-2', 'opacity-0'));
  setTimeout(() => {
    el.classList.add('translate-y-2', 'opacity-0');
    setTimeout(() => el.remove(), 280);
  }, 2500);
}

// ---------- Events ----------
function bindEvents() {
  categoryTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      state.category = tab.dataset.category;
      paintCategoryTabs();
      renderWorkspace();
    });
  });

  pricePills.forEach((pill) => {
    pill.addEventListener('click', () => {
      state.price = pill.dataset.price;
      paintPricePills();
      renderWorkspace();
    });
  });

  areaFilterEl.addEventListener('change', (e) => { state.area = e.target.value; renderWorkspace(); });

  resetFiltersBtn.addEventListener('click', resetAllFilters);

  // Mobile sheet
  document.getElementById('close-mobile-sheet-btn').addEventListener('click', closeMobileSheet);
  mobileDossierSheet.addEventListener('click', (e) => { if (e.target === mobileDossierSheet) closeMobileSheet(); });

  // Itinerary drawer
  document.getElementById('open-itinerary-btn').addEventListener('click', openItineraryDrawer);
  document.getElementById('close-itinerary-btn').addEventListener('click', closeItineraryDrawer);
  itineraryDrawer.addEventListener('click', (e) => { if (e.target === itineraryDrawer) closeItineraryDrawer(); });
  document.getElementById('copy-itinerary-btn').addEventListener('click', copyItineraryPlan);
  document.getElementById('clear-itinerary-btn').addEventListener('click', () => {
    if (state.itinerary.length === 0) return;
    state.itinerary = [];
    persistItinerary();
    updateItineraryBadge();
    renderItineraryDrawer();
    renderWorkspace();
    showToast('Itinerary cleared.', 'neutral');
  });

  // Keyboard: Esc closes panels, Up/Down moves through the list
  document.addEventListener('keydown', (e) => {
    const tag = document.activeElement ? document.activeElement.tagName : '';
    if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') {
      if (e.key === 'Escape') document.activeElement.blur();
      return;
    }

    if (e.key === 'Escape') {
      if (!mobileDossierSheet.classList.contains('hidden')) closeMobileSheet();
      if (!itineraryDrawer.classList.contains('hidden')) closeItineraryDrawer();
      return;
    }

    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      const venues = getProcessedVenues();
      if (venues.length === 0) return;
      e.preventDefault();

      const cur = venues.findIndex((v) => v.id === state.selectedVenueId);
      const next = e.key === 'ArrowDown'
        ? (cur < venues.length - 1 ? cur + 1 : 0)
        : (cur > 0 ? cur - 1 : venues.length - 1);

      state.selectedVenueId = venues[next].id;
      state.activePhotoIndex = 0;
      renderWorkspace();

      const row = ledgerRowsEl.querySelector(`[data-id="${state.selectedVenueId}"]`);
      if (row) row.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  });
}

window.addEventListener('DOMContentLoaded', init);