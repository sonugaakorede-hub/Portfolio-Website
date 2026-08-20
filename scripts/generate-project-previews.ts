import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), 'public', 'projects');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Twins Dental
const twinsDentalSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 3600" width="1200" height="3600">
  <defs>
    <style>
      .serif { font-family: 'Playfair Display', Georgia, serif; }
      .sans { font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; }
    </style>
    <filter id="shadow1" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000000" flood-opacity="0.06"/>
    </filter>
  </defs>

  <rect width="1200" height="3600" fill="#FAF5EE"/>

  <!-- TOP BAR -->
  <rect width="1200" height="50" fill="#FAF5EE"/>
  <g class="sans" font-size="12" fill="#64748B">
    <text x="440" y="32">📍 Vanessa, 7 Oak Ln, Hart On Sea, Essex, TS24 7JU</text>
    <text x="810" y="32">📞 +123 456 7990 00</text>
  </g>
  <rect x="990" y="10" width="140" height="30" rx="15" fill="#EAB308"/>
  <text x="1060" y="30" class="sans" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">APPOINTMENT</text>

  <!-- NAVBAR -->
  <g transform="translate(70, 70)">
    <circle cx="20" cy="20" r="16" fill="#EAB308" opacity="0.2"/>
    <text x="46" y="22" class="sans" font-size="18" font-weight="800" fill="#0F172A">TWINS DENTAL</text>
    <rect x="230" y="0" width="620" height="42" rx="21" fill="#F1ECE4" opacity="0.8"/>
    <g class="sans" font-size="13" font-weight="600" fill="#334155">
      <text x="290" y="26" fill="#D97706">Home</text>
      <text x="400" y="26">About Us</text>
      <text x="530" y="26">Blog</text>
      <text x="640" y="26">Services</text>
    </g>
  </g>

  <!-- HERO SECTION -->
  <g transform="translate(70, 160)">
    <text x="0" y="30" class="sans" font-size="13" font-weight="800" fill="#D97706" letter-spacing="2">WELCOME TO TWINS DENTAL</text>
    <text x="0" y="90" class="serif" font-size="52" font-weight="700" fill="#0F172A">High Quality &amp;</text>
    <text x="0" y="145" class="serif" font-size="52" font-weight="700" fill="#D97706">Painless</text>
    <text x="210" y="145" class="serif" font-size="52" font-weight="700" fill="#0F172A"> Dentistry</text>
    
    <text x="0" y="195" class="sans" font-size="15" fill="#64748B">
      <tspan x="0" dy="0">We welcome to Twins Dental located in Essex. A perfect place</tspan>
      <tspan x="0" dy="24">for gentle, high-tech care and specialized treatment.</tspan>
    </text>

    <rect x="0" y="265" width="150" height="46" rx="23" fill="#D97706"/>
    <text x="75" y="294" class="sans" font-size="13" font-weight="700" fill="#FFFFFF" text-anchor="middle">CONTACT US</text>

    <!-- Dentist hero visual -->
    <g transform="translate(560, -10)">
      <circle cx="230" cy="190" r="180" fill="#FEF3C7" opacity="0.8"/>
      <circle cx="230" cy="190" r="150" fill="#FDE68A" opacity="0.5"/>
      <circle cx="230" cy="160" r="90" fill="#0284C7"/>
      <circle cx="230" cy="120" r="40" fill="#FCD34D"/>
      <rect x="70" y="100" width="110" height="34" rx="17" fill="#FFFFFF" filter="url(#shadow1)"/>
      <text x="125" y="122" class="sans" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">⚡ 24/7 Online</text>
      <rect x="120" y="260" width="170" height="36" rx="18" fill="#FFFFFF" filter="url(#shadow1)"/>
      <text x="205" y="283" class="sans" font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">📍 Visit Nearest Branch</text>
    </g>
  </g>

  <!-- ABOUT SECTION -->
  <g transform="translate(70, 640)">
    <rect x="0" y="0" width="460" height="340" rx="24" fill="#FCE7F3" opacity="0.6"/>
    <g transform="translate(50, 40)">
      <circle cx="120" cy="120" r="70" fill="#F472B6" opacity="0.4"/>
      <circle cx="240" cy="120" r="70" fill="#FB7185" opacity="0.4"/>
      <rect x="20" y="210" width="140" height="36" rx="18" fill="#FFFFFF" filter="url(#shadow1)"/>
      <text x="90" y="233" class="sans" font-size="11" font-weight="700" fill="#D97706" text-anchor="middle">24+ Years Experience</text>
    </g>

    <g transform="translate(520, 20)">
      <text x="0" y="20" class="sans" font-size="12" font-weight="800" fill="#D97706" letter-spacing="2">ABOUT US</text>
      <text x="0" y="65" class="serif" font-size="38" font-weight="700" fill="#0F172A">Your <tspan fill="#D97706">Trusted Partner</tspan></text>
      <text x="0" y="110" class="serif" font-size="38" font-weight="700" fill="#0F172A">For Dental Health</text>
      <text x="0" y="150" class="sans" font-size="14" fill="#64748B">
        <tspan x="0" dy="0">At Twins we believe oral care profoundly impacts everyday well-being.</tspan>
      </text>
      <g transform="translate(0, 195)" class="sans" font-size="13" font-weight="600" fill="#1E293B">
        <text x="0" y="0">✓ Better Oral Hygiene</text>
        <text x="220" y="0">✓ Confident Smile</text>
        <text x="0" y="30">✓ Keep Gums Healthy</text>
        <text x="220" y="30">✓ High Tech 3D Care</text>
      </g>
      <text x="0" y="275" class="sans" font-size="13" font-weight="700" fill="#D97706">READ MORE →</text>
    </g>
  </g>

  <!-- TREATMENTS SECTION -->
  <g transform="translate(70, 1060)">
    <text x="530" y="0" class="sans" font-size="12" font-weight="800" fill="#D97706" letter-spacing="2" text-anchor="middle">WHAT WE PROVIDE</text>
    <text x="530" y="45" class="serif" font-size="36" font-weight="700" fill="#0F172A" text-anchor="middle">Treatments That <tspan fill="#D97706">Twins Dental</tspan> Offer</text>

    <!-- 6 Cards -->
    <g transform="translate(0, 80)">
      <rect width="330" height="200" rx="16" fill="#FFFFFF" filter="url(#shadow1)"/>
      <text x="25" y="45" class="sans" font-size="20">🦷</text>
      <text x="25" y="85" class="sans" font-size="14" font-weight="800" fill="#0F172A">PREVENTIVE CARE</text>
      <text x="25" y="115" class="sans" font-size="12" fill="#64748B">Routine exams, digital cleanings &amp; sealants.</text>
      <text x="25" y="165" class="sans" font-size="11" font-weight="700" fill="#D97706">LEARN MORE →</text>
    </g>
    <g transform="translate(365, 80)">
      <rect width="330" height="200" rx="16" fill="#FFFFFF" filter="url(#shadow1)"/>
      <text x="25" y="45" class="sans" font-size="20">✨</text>
      <text x="25" y="85" class="sans" font-size="14" font-weight="800" fill="#0F172A">ORTHODONTICS</text>
      <text x="25" y="115" class="sans" font-size="12" fill="#64748B">Straighten your smile with clear aligners.</text>
      <text x="25" y="165" class="sans" font-size="11" font-weight="700" fill="#D97706">LEARN MORE →</text>
    </g>
    <g transform="translate(730, 80)">
      <rect width="330" height="200" rx="16" fill="#FFFFFF" filter="url(#shadow1)"/>
      <text x="25" y="45" class="sans" font-size="20">💎</text>
      <text x="25" y="85" class="sans" font-size="14" font-weight="800" fill="#0F172A">COSMETIC DENTISTRY</text>
      <text x="25" y="115" class="sans" font-size="12" fill="#64748B">Teeth whitening &amp; bespoke porcelain veneers.</text>
      <text x="25" y="165" class="sans" font-size="11" font-weight="700" fill="#D97706">LEARN MORE →</text>
    </g>
    <g transform="translate(0, 310)">
      <rect width="330" height="200" rx="16" fill="#FFFFFF" filter="url(#shadow1)"/>
      <text x="25" y="45" class="sans" font-size="20">🚨</text>
      <text x="25" y="85" class="sans" font-size="14" font-weight="800" fill="#0F172A">EMERGENCY CARE</text>
      <text x="25" y="115" class="sans" font-size="12" fill="#64748B">Same-day relief for acute toothache &amp; trauma.</text>
      <text x="25" y="165" class="sans" font-size="11" font-weight="700" fill="#D97706">LEARN MORE →</text>
    </g>
    <g transform="translate(365, 310)">
      <rect width="330" height="200" rx="16" fill="#FFFFFF" filter="url(#shadow1)"/>
      <text x="25" y="45" class="sans" font-size="20">🛡️</text>
      <text x="25" y="85" class="sans" font-size="14" font-weight="800" fill="#0F172A">RESTORATIVE DENTISTRY</text>
      <text x="25" y="115" class="sans" font-size="12" fill="#64748B">Dental implants, crowns and natural bridges.</text>
      <text x="25" y="165" class="sans" font-size="11" font-weight="700" fill="#D97706">LEARN MORE →</text>
    </g>
    <g transform="translate(730, 310)">
      <rect width="330" height="200" rx="16" fill="#FFFFFF" filter="url(#shadow1)"/>
      <text x="25" y="45" class="sans" font-size="20">🌿</text>
      <text x="25" y="85" class="sans" font-size="14" font-weight="800" fill="#0F172A">PERIODONTAL CARE</text>
      <text x="25" y="115" class="sans" font-size="12" fill="#64748B">Gentle gum therapy &amp; preventive health.</text>
      <text x="25" y="165" class="sans" font-size="11" font-weight="700" fill="#D97706">LEARN MORE →</text>
    </g>
  </g>

  <!-- DISCOUNT BANNER -->
  <g transform="translate(70, 1660)">
    <rect width="1060" height="170" rx="20" fill="#FEF3C7"/>
    <text x="50" y="45" class="sans" font-size="12" font-weight="800" fill="#B45309">BOOK DENTAL APPOINTMENT</text>
    <text x="50" y="85" class="serif" font-size="26" font-weight="700" fill="#0F172A">Like And Share Our Social Media Pages To Get A <tspan fill="#D97706">5% Discount</tspan></text>
    <rect x="50" y="105" width="120" height="36" rx="18" fill="#D97706"/>
    <text x="110" y="128" class="sans" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">BOOK NOW</text>
  </g>

  <!-- TESTIMONIALS -->
  <g transform="translate(70, 1900)">
    <text x="530" y="0" class="sans" font-size="12" font-weight="800" fill="#D97706" text-anchor="middle">TESTIMONIAL</text>
    <text x="530" y="40" class="serif" font-size="32" font-weight="700" fill="#0F172A" text-anchor="middle">Enhancing Your Smile &amp; <tspan fill="#D97706">Your Confidence</tspan></text>
    
    <g transform="translate(0, 80)">
      <rect width="245" height="120" rx="12" fill="#FFFFFF" filter="url(#shadow1)"/>
      <text x="20" y="30" class="sans" font-size="13" font-weight="700" fill="#0F172A">Sarah M. ★★★★★</text>
      <text x="20" y="55" class="sans" font-size="11" fill="#64748B">"I recommend Twins Dental to all my friends &amp; family!"</text>
    </g>
    <g transform="translate(270, 80)">
      <rect width="245" height="120" rx="12" fill="#FFFFFF" filter="url(#shadow1)"/>
      <text x="20" y="30" class="sans" font-size="13" font-weight="700" fill="#0F172A">David S. ★★★★★</text>
      <text x="20" y="55" class="sans" font-size="11" fill="#64748B">"Resolved my pain and made the visit stress-free."</text>
    </g>
    <g transform="translate(540, 80)">
      <rect width="245" height="120" rx="12" fill="#FFFFFF" filter="url(#shadow1)"/>
      <text x="20" y="30" class="sans" font-size="13" font-weight="700" fill="#0F172A">Priya K. ★★★★★</text>
      <text x="20" y="55" class="sans" font-size="11" fill="#64748B">"Orthodontic aligners gave me my confidence back!"</text>
    </g>
    <g transform="translate(810, 80)">
      <rect width="245" height="120" rx="12" fill="#FFFFFF" filter="url(#shadow1)"/>
      <text x="20" y="30" class="sans" font-size="13" font-weight="700" fill="#0F172A">Emily T. ★★★★★</text>
      <text x="20" y="55" class="sans" font-size="11" fill="#64748B">"Painless, caring and professional clinic team."</text>
    </g>
  </g>

  <!-- BLOGS & FOOTER -->
  <g transform="translate(70, 2220)">
    <text x="0" y="0" class="sans" font-size="12" font-weight="800" fill="#D97706">OUR BLOG</text>
    <text x="0" y="35" class="serif" font-size="28" font-weight="700" fill="#0F172A">Our Latest Blogs &amp; Articles</text>
    <g transform="translate(0, 60)">
      <rect width="330" height="200" rx="14" fill="#FFFFFF" filter="url(#shadow1)"/>
      <rect width="330" height="100" rx="14" fill="#1E293B"/>
      <text x="20" y="135" class="sans" font-size="13" font-weight="800" fill="#0F172A">Top 7 Myths About Braces</text>
      <text x="20" y="170" class="sans" font-size="11" font-weight="700" fill="#D97706">LEARN MORE →</text>
    </g>
    <g transform="translate(365, 60)">
      <rect width="330" height="200" rx="14" fill="#FFFFFF" filter="url(#shadow1)"/>
      <rect width="330" height="100" rx="14" fill="#0369A1"/>
      <text x="20" y="135" class="sans" font-size="13" font-weight="800" fill="#0F172A">Are Dental Implants Painful?</text>
      <text x="20" y="170" class="sans" font-size="11" font-weight="700" fill="#D97706">LEARN MORE →</text>
    </g>
    <g transform="translate(730, 60)">
      <rect width="330" height="200" rx="14" fill="#FFFFFF" filter="url(#shadow1)"/>
      <rect width="330" height="100" rx="14" fill="#0F766E"/>
      <text x="20" y="135" class="sans" font-size="13" font-weight="800" fill="#0F172A">Tips To Maintain Whitening</text>
      <text x="20" y="170" class="sans" font-size="11" font-weight="700" fill="#D97706">LEARN MORE →</text>
    </g>
  </g>

  <!-- FOOTER -->
  <g transform="translate(0, 2600)">
    <rect width="1200" height="400" fill="#FAF5EE"/>
    <line x1="70" y1="0" x2="1130" y2="0" stroke="#E2E8F0" stroke-width="1.5"/>
    <g transform="translate(70, 50)" class="sans">
      <text x="0" y="20" font-size="18" font-weight="800" fill="#0F172A">TWINS DENTAL</text>
      <text x="0" y="55" font-size="12" fill="#64748B">Mon - Fri: 9:00AM - 5:00PM · Essex, UK</text>
      <text x="500" y="180" font-size="12" fill="#94A3B8" text-anchor="middle">© 2025 Twins Dental Clinic. Website designed by Zoe Digital.</text>
    </g>
  </g>
</svg>`;

// 2. The Monday Collective
const mondayCollectiveSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 3600" width="1200" height="3600">
  <defs>
    <style>
      .serif { font-family: 'Playfair Display', Georgia, serif; }
      .sans { font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; }
    </style>
    <linearGradient id="heroGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#736671"/>
      <stop offset="50%" stop-color="#4F464E"/>
      <stop offset="100%" stop-color="#2D282D"/>
    </linearGradient>
    <linearGradient id="serviceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3D373B"/>
      <stop offset="100%" stop-color="#242023"/>
    </linearGradient>
    <filter id="shadowMC" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.25"/>
    </filter>
  </defs>

  <rect width="1200" height="3600" fill="#242023"/>

  <!-- HERO SECTION -->
  <rect width="1200" height="700" fill="url(#heroGradient)"/>
  
  <!-- Header -->
  <g transform="translate(70, 40)">
    <text x="0" y="24" class="sans" font-size="16" font-weight="700" fill="#F5F3F4" letter-spacing="1">THE MONDAY COLLECTIVE</text>
    <g class="sans" font-size="12" font-weight="600" fill="#D6D1D5">
      <text x="500" y="24">HOME</text>
      <text x="570" y="24">ABOUT</text>
      <text x="645" y="24">SERVICES</text>
      <text x="735" y="24">CONTACT</text>
    </g>
    <rect x="910" y="2" width="150" height="36" rx="18" fill="#8C7D8A"/>
    <text x="985" y="24" class="sans" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">BOOK A SESSION</text>
  </g>

  <!-- Hero Content -->
  <g transform="translate(600, 160)" text-anchor="middle">
    <rect x="-90" y="0" width="180" height="26" rx="13" fill="#8C7D8A" opacity="0.6"/>
    <text x="0" y="17" class="sans" font-size="10" font-weight="700" fill="#F5F3F4" letter-spacing="2">THE MONDAY COLLECTIVE</text>
    
    <text x="0" y="80" class="serif" font-size="52" font-weight="400" fill="#FFFFFF">Your Body And Mind,</text>
    
    <!-- Arch Image Photo -->
    <g transform="translate(-110, 110)">
      <path d="M0 80 C0 35, 35 0, 110 0 C185 0, 220 35, 220 80 L220 220 L0 220 Z" fill="#E2DCDA"/>
      <circle cx="110" cy="110" r="45" fill="#B5A4B2"/>
    </g>

    <text x="0" y="380" class="serif" font-size="46" font-weight="400" fill="#FFFFFF">Finally On The Same Team.</text>
    
    <rect x="-90" y="415" width="180" height="42" rx="21" fill="#FFFFFF"/>
    <text x="0" y="441" class="sans" font-size="12" font-weight="700" fill="#242023">BOOK A CONSULTATION</text>
  </g>

  <!-- ABOUT SECTION -->
  <g transform="translate(0, 700)">
    <rect width="1200" height="500" fill="#F7F5F5"/>
    <g transform="translate(100, 70)">
      <text x="0" y="20" class="sans" font-size="11" font-weight="800" fill="#736671" letter-spacing="2">COMMITTED TO YOUR WELLBEING</text>
      <text x="0" y="70" class="serif" font-size="42" font-weight="600" fill="#242023">About The</text>
      <text x="0" y="115" class="serif" font-size="42" font-weight="600" fill="#242023">Monday Collective</text>
      
      <text x="0" y="165" class="sans" font-size="14" fill="#665D65" width="440">
        <tspan x="0" dy="0">You don't have to navigate wellness on your own anymore.</tspan>
        <tspan x="0" dy="24">At The Monday Collective we combine wellness advice &amp; creative</tspan>
        <tspan x="0" dy="24">therapies to help you live a life you're proud of.</tspan>
        <tspan x="0" dy="24">Science-backed movement. High-impact coaching.</tspan>
      </text>

      <rect x="0" y="280" width="190" height="44" rx="22" fill="#9C8D9B"/>
      <text x="95" y="307" class="sans" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">LEARN MORE ABOUT US</text>

      <!-- Right image card -->
      <g transform="translate(540, -20)">
        <rect width="420" height="360" rx="30" fill="#D6CEC8"/>
        <circle cx="210" cy="180" r="90" fill="#8C7D8A" opacity="0.3"/>
      </g>
    </g>
  </g>

  <!-- SERVICES SECTION -->
  <g transform="translate(0, 1200)">
    <rect width="1200" height="750" fill="url(#serviceGradient)"/>
    <g transform="translate(100, 60)">
      <text x="0" y="40" class="serif" font-size="70" font-weight="300" fill="#473F45" opacity="0.5" transform="rotate(-90 0 40)">SERVICES</text>

      <g transform="translate(160, 20)">
        <text x="0" y="20" class="sans" font-size="11" font-weight="800" fill="#A89BA6" letter-spacing="2">HOW CAN WE HELP</text>
        
        <!-- 01 -->
        <g transform="translate(0, 60)">
          <text x="0" y="50" class="serif" font-size="56" fill="#756773">01</text>
          <text x="90" y="30" class="serif" font-size="28" fill="#FFFFFF">Stress Management Coaching</text>
          <text x="90" y="65" class="sans" font-size="13" fill="#B3A9B2">We build strength, confidence, and a deep sense of balance.</text>
        </g>

        <!-- 02 -->
        <g transform="translate(0, 180)">
          <text x="0" y="50" class="serif" font-size="56" fill="#756773">02</text>
          <text x="90" y="30" class="serif" font-size="28" fill="#FFFFFF">Trauma-Informed Personal Training</text>
          <text x="90" y="65" class="sans" font-size="13" fill="#B3A9B2">Safe, empowering strength training that works right for you.</text>
        </g>

        <!-- 03 -->
        <g transform="translate(0, 300)">
          <text x="0" y="50" class="serif" font-size="56" fill="#756773">03</text>
          <text x="90" y="30" class="serif" font-size="28" fill="#FFFFFF">Small Group Wellness Session</text>
          <text x="90" y="65" class="sans" font-size="13" fill="#B3A9B2">Private movement and resilience workshops for team harmony.</text>
        </g>

        <rect x="90" y="410" width="200" height="44" rx="22" fill="#FFFFFF"/>
        <text x="190" y="437" class="sans" font-size="12" font-weight="700" fill="#242023" text-anchor="middle">BOOK A CONSULTATION</text>
      </g>
    </g>
  </g>

  <!-- SUCCESS STORIES -->
  <g transform="translate(0, 1950)">
    <rect width="1200" height="650" fill="#1B171A"/>
    <g transform="translate(600, 50)" text-anchor="middle">
      <text x="0" y="0" class="sans" font-size="11" font-weight="800" fill="#9C8D9B" letter-spacing="2">SUCCESS</text>
      <text x="0" y="45" class="serif" font-size="40" font-weight="400" fill="#FFFFFF">Success Stories.</text>
      
      <!-- Testimonials -->
      <g transform="translate(-400, 90)" text-anchor="start">
        <rect width="800" height="110" rx="16" fill="#2C262B"/>
        <circle cx="50" cy="55" r="28" fill="#D6CEC8"/>
        <text x="100" y="45" class="sans" font-size="13" fill="#F5F3F4">"One of my biggest challenges was mental fear. Molly helped me challenge</text>
        <text x="100" y="68" class="sans" font-size="13" fill="#F5F3F4">my limits and do more than I ever thought possible." — Christine</text>
      </g>

      <g transform="translate(-400, 220)" text-anchor="start">
        <rect width="800" height="110" rx="16" fill="#2C262B"/>
        <circle cx="50" cy="55" r="28" fill="#B5A4B2"/>
        <text x="100" y="45" class="sans" font-size="13" fill="#F5F3F4">"I feel truly confident in myself for the first time in my life.</text>
        <text x="100" y="68" class="sans" font-size="13" fill="#F5F3F4">I am stronger than I've ever been at 30!" — Alicia</text>
      </g>

      <rect x="-70" y="360" width="140" height="40" rx="20" fill="#9C8D9B"/>
      <text x="0" y="385" class="sans" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">CONTACT US</text>
    </g>
  </g>

  <!-- STATS BAR -->
  <g transform="translate(0, 2600)">
    <rect width="1200" height="80" fill="#6B5E69"/>
    <g class="sans" font-size="13" font-weight="700" fill="#FFFFFF" transform="translate(100, 46)">
      <text x="50" y="0">🛍️ Improved Self-Confidence</text>
      <text x="340" y="0">🪴 Reduced Stress</text>
      <text x="590" y="0">💧 Greater Strength</text>
      <text x="820" y="0">🔆 Growth Mindset</text>
    </g>
  </g>

  <!-- GET IN TOUCH & FOOTER -->
  <g transform="translate(0, 2680)">
    <rect width="1200" height="920" fill="#F7F5F5"/>
    <g transform="translate(100, 70)">
      <text x="0" y="30" class="serif" font-size="38" font-weight="600" fill="#242023">Get In Touch!</text>
      <text x="0" y="65" class="sans" font-size="13" fill="#665D65">Ready to transform your well-being? Send Molly a message.</text>

      <!-- Form Box -->
      <g transform="translate(480, 0)">
        <rect width="520" height="40" rx="8" fill="#FFFFFF" stroke="#E2DCDA"/>
        <text x="15" y="25" class="sans" font-size="12" fill="#9C8D9B">Name</text>
        <rect y="55" width="520" height="40" rx="8" fill="#FFFFFF" stroke="#E2DCDA"/>
        <text x="15" y="80" class="sans" font-size="12" fill="#9C8D9B">Email Address</text>
        <rect y="110" width="520" height="80" rx="8" fill="#FFFFFF" stroke="#E2DCDA"/>
        <text x="15" y="135" class="sans" font-size="12" fill="#9C8D9B">Message</text>
        <rect y="205" width="180" height="40" rx="8" fill="#9C8D9B"/>
        <text x="90" y="230" class="sans" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">Send Message</text>
      </g>
    </g>

    <!-- Dark Footer Arch -->
    <g transform="translate(100, 480)">
      <path d="M0 60 C0 0, 1000 0, 1000 60 L1000 300 L0 300 Z" fill="#423940"/>
      <g transform="translate(500, 60)" text-anchor="middle">
        <text x="0" y="30" class="serif" font-size="24" fill="#FFFFFF" letter-spacing="1">THE MONDAY COLLECTIVE</text>
        <text x="0" y="60" class="sans" font-size="11" fill="#C4B9C2">A BALANCED MIND SET ON MONDAYS.</text>
        <text x="0" y="180" class="sans" font-size="11" fill="#8C7D8A">© 2025 The Monday Collective. All rights reserved. Designed by Zoe Digital.</text>
      </g>
    </g>
  </g>
</svg>`;

// 3. Fitting You
const fittingYouSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 3600" width="1200" height="3600">
  <defs>
    <style>
      .serif { font-family: 'Playfair Display', Georgia, serif; }
      .sans { font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; }
    </style>
    <filter id="shadowFY" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000000" flood-opacity="0.06"/>
    </filter>
  </defs>

  <rect width="1200" height="3600" fill="#FAF7F2"/>

  <!-- NAVBAR -->
  <g transform="translate(80, 40)">
    <g>
      <text x="0" y="24" class="serif" font-size="20" font-weight="700" fill="#242120" letter-spacing="1">FITTING YOU</text>
    </g>
    <g class="sans" font-size="13" font-weight="600" fill="#5C5552">
      <text x="460" y="24">HOME</text>
      <text x="540" y="24">ABOUT</text>
      <text x="620" y="24">SERVICES</text>
      <text x="720" y="24">RESULTS</text>
      <text x="810" y="24">CONTACT</text>
    </g>
    <rect x="910" y="2" width="140" height="36" rx="8" fill="#B08968"/>
    <text x="980" y="24" class="sans" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">WORK WITH ME</text>
  </g>

  <!-- HERO SECTION -->
  <g transform="translate(80, 140)">
    <text x="0" y="20" class="sans" font-size="12" font-weight="800" fill="#B08968" letter-spacing="2">STRONGER YOU, BETTER LIFE</text>
    <text x="0" y="70" class="serif" font-size="46" font-weight="700" fill="#242120">Bespoke Personal</text>
    <text x="0" y="125" class="serif" font-size="46" font-weight="700" fill="#242120">Training and Online</text>
    <text x="0" y="180" class="serif" font-size="46" font-weight="700" fill="#242120">Coaching</text>
    
    <text x="0" y="230" class="sans" font-size="14" fill="#6E6662">
      <tspan x="0" dy="0">Personalised training plans and expert coaching designed to help you</tspan>
      <tspan x="0" dy="22">build strength, confidence and a sustainable healthy lifestyle.</tspan>
    </text>

    <rect x="0" y="290" width="180" height="44" rx="8" fill="#B08968"/>
    <text x="90" y="317" class="sans" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">LET'S WORK TOGETHER</text>

    <!-- Right Hero Photo Box -->
    <g transform="translate(560, -20)">
      <rect width="480" height="420" rx="16" fill="#E8DFD8"/>
      <circle cx="240" cy="210" r="100" fill="#B08968" opacity="0.3"/>
    </g>
  </g>

  <!-- ABOUT SECTION -->
  <g transform="translate(80, 680)">
    <!-- Left Photo Box -->
    <rect width="400" height="440" rx="16" fill="#E8DFD8"/>
    <circle cx="200" cy="220" r="90" fill="#B08968" opacity="0.25"/>

    <g transform="translate(460, 40)">
      <text x="0" y="20" class="sans" font-size="11" font-weight="800" fill="#B08968" letter-spacing="2">ABOUT ME</text>
      <text x="0" y="65" class="serif" font-size="38" font-weight="700" fill="#242120">More Than Just a Workout. ♡</text>
      
      <text x="0" y="115" class="sans" font-size="14" fill="#6E6662">
        <tspan x="0" dy="0">I'm here to help you become the strongest, healthiest version</tspan>
        <tspan x="0" dy="24">of yourself - both physically and mentally. With years of</tspan>
        <tspan x="0" dy="24">experience and a passion for real results, I create tailored</tspan>
        <tspan x="0" dy="24">programs that fit your lifestyle and goals.</tspan>
      </text>

      <rect x="0" y="240" width="150" height="40" rx="8" fill="#B08968"/>
      <text x="75" y="265" class="sans" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">FIND OUT MORE</text>
    </g>
  </g>

  <!-- SERVICES SECTION -->
  <g transform="translate(80, 1220)">
    <text x="520" y="0" class="sans" font-size="11" font-weight="800" fill="#B08968" letter-spacing="2" text-anchor="middle">WHAT I OFFER</text>
    <text x="520" y="40" class="serif" font-size="36" font-weight="700" fill="#242120" text-anchor="middle">Tailored For Every Stage</text>

    <!-- 5 Service Cards -->
    <g transform="translate(0, 80)">
      <!-- 1 -->
      <rect width="195" height="180" rx="12" fill="#FFFFFF" filter="url(#shadowFY)"/>
      <text x="20" y="40" class="sans" font-size="20">🏋️</text>
      <text x="20" y="80" class="sans" font-size="13" font-weight="800" fill="#242120">Personal Training</text>
      <text x="20" y="110" class="sans" font-size="11" fill="#6E6662">1:1 sessions for your exact goals.</text>
    </g>
    <g transform="translate(210, 80)">
      <!-- 2 -->
      <rect width="195" height="180" rx="12" fill="#FFFFFF" filter="url(#shadowFY)"/>
      <text x="20" y="40" class="sans" font-size="20">💻</text>
      <text x="20" y="80" class="sans" font-size="13" font-weight="800" fill="#242120">Online Coaching</text>
      <text x="20" y="110" class="sans" font-size="11" fill="#6E6662">Custom workouts &amp; nutrition advice.</text>
    </g>
    <g transform="translate(420, 80)">
      <!-- 3 -->
      <rect width="195" height="180" rx="12" fill="#FFFFFF" filter="url(#shadowFY)"/>
      <text x="20" y="40" class="sans" font-size="20">🔥</text>
      <text x="20" y="80" class="sans" font-size="13" font-weight="800" fill="#242120">Weight Loss</text>
      <text x="20" y="110" class="sans" font-size="11" fill="#6E6662">Sustainable fat loss programs.</text>
    </g>
    <g transform="translate(630, 80)">
      <!-- 4 -->
      <rect width="195" height="180" rx="12" fill="#FFFFFF" filter="url(#shadowFY)"/>
      <text x="20" y="40" class="sans" font-size="20">💪</text>
      <text x="20" y="80" class="sans" font-size="13" font-weight="800" fill="#242120">Muscle Building</text>
      <text x="20" y="110" class="sans" font-size="11" fill="#6E6662">Build lean muscle &amp; strength.</text>
    </g>
    <g transform="translate(840, 80)">
      <!-- 5 -->
      <rect width="195" height="180" rx="12" fill="#FFFFFF" filter="url(#shadowFY)"/>
      <text x="20" y="40" class="sans" font-size="20">🤍</text>
      <text x="20" y="80" class="sans" font-size="13" font-weight="800" fill="#242120">Lifestyle Support</text>
      <text x="20" y="110" class="sans" font-size="11" fill="#6E6662">Mindset &amp; habit coaching.</text>
    </g>

    <rect x="445" y="290" width="150" height="38" rx="8" fill="#B08968"/>
    <text x="520" y="314" class="sans" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">VIEW ALL SERVICES</text>
  </g>

  <!-- TESTIMONIAL QUOTE -->
  <g transform="translate(80, 1650)">
    <rect width="1040" height="140" rx="16" fill="#F0EAE1"/>
    <text x="520" y="60" class="serif" font-size="18" font-style="italic" fill="#242120" text-anchor="middle">
      "Working with Fitting You has completely changed my life. I'm stronger, more confident
    </text>
    <text x="520" y="90" class="serif" font-size="18" font-style="italic" fill="#242120" text-anchor="middle">
      and healthier than I've ever been. The support is unmatched!" — JESSICA M.
    </text>
  </g>

  <!-- CLIENT RESULTS / TRANSFORMATIONS -->
  <g transform="translate(80, 1860)">
    <text x="520" y="0" class="sans" font-size="11" font-weight="800" fill="#B08968" letter-spacing="2" text-anchor="middle">REAL PEOPLE. REAL RESULTS.</text>
    <text x="520" y="40" class="serif" font-size="34" font-weight="700" fill="#242120" text-anchor="middle">Client Results</text>

    <!-- 4 Transformation Blocks -->
    <g transform="translate(0, 70)">
      <rect width="240" height="260" rx="12" fill="#E8DFD8"/>
      <rect x="265" width="240" height="260" rx="12" fill="#E8DFD8"/>
      <rect x="530" width="240" height="260" rx="12" fill="#E8DFD8"/>
      <rect x="795" width="240" height="260" rx="12" fill="#E8DFD8"/>
    </g>

    <rect x="430" y="360" width="180" height="40" rx="8" fill="#B08968"/>
    <text x="520" y="385" class="sans" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">SEE MORE TRANSFORMATIONS</text>
  </g>

  <!-- FOOTER -->
  <g transform="translate(0, 2400)">
    <rect width="1200" height="600" fill="#F4EFEA"/>
    <g transform="translate(80, 60)" class="sans">
      <text x="0" y="24" class="serif" font-size="20" font-weight="700" fill="#242120">FITTING YOU</text>
      <text x="0" y="60" font-size="12" fill="#6E6662">Empowering you to live stronger, healthier and happier.</text>
      <text x="0" y="90" font-size="12" fill="#6E6662">📍 London, United Kingdom · 📞 +44 7700 900123</text>
      <text x="520" y="240" font-size="12" fill="#99918D" text-anchor="middle">© 2025 Fitting You Personal Training. All Rights Reserved. Designed by Zoe Digital.</text>
    </g>
  </g>
</svg>`;

// 4. Egypta Massage
const egyptaMassageSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 3600" width="1200" height="3600">
  <defs>
    <style>
      .serif { font-family: 'Playfair Display', Georgia, serif; }
      .sans { font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; }
    </style>
    <linearGradient id="goldEgyptian" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="3600" fill="#14110F"/>

  <!-- NAVBAR -->
  <g transform="translate(70, 30)">
    <text x="0" y="25" class="serif" font-size="20" font-weight="800" fill="#F59E0B" letter-spacing="2">EGYPTA MASSAGE</text>
    <g class="sans" font-size="12" font-weight="600" fill="#D4D4D8">
      <text x="360" y="25" fill="#F59E0B">Home</text>
      <text x="430" y="25">Services</text>
      <text x="510" y="25">Bookings</text>
      <text x="600" y="25">Gift Cards</text>
      <text x="690" y="25">About</text>
      <text x="760" y="25">Gallery</text>
      <text x="840" y="25">Blogs</text>
    </g>
    <rect x="920" y="4" width="130" height="34" rx="6" fill="#D97706"/>
    <text x="985" y="26" class="sans" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">CONTACT US</text>
  </g>

  <!-- HERO SECTION -->
  <g transform="translate(600, 160)" text-anchor="middle">
    <rect x="-60" y="0" width="120" height="24" rx="4" fill="#382C1E"/>
    <text x="0" y="16" class="sans" font-size="10" font-weight="800" fill="#F59E0B" letter-spacing="2">WELCOME TO</text>
    
    <text x="0" y="70" class="serif" font-size="52" font-weight="700" fill="#FFFFFF">Egypta <tspan fill="#F59E0B">Massage</tspan></text>
    <text x="0" y="115" class="sans" font-size="14" fill="#A1A1AA">We provide special services of Sport, Reflexology, Relax, Pregnancy &amp; Egyptian Massages.</text>

    <g transform="translate(-160, 150)">
      <rect width="140" height="42" rx="6" fill="#D97706"/>
      <text x="70" y="26" class="sans" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">📅 Book Now</text>
      <rect x="160" width="160" height="42" rx="6" fill="#27211C" stroke="#F59E0B"/>
      <text x="240" y="26" class="sans" font-size="12" font-weight="700" fill="#F59E0B" text-anchor="middle">🎁 Buy Gift Cards</text>
    </g>
  </g>

  <!-- SERVICES SECTION -->
  <g transform="translate(70, 520)">
    <text x="530" y="0" class="serif" font-size="36" font-weight="700" fill="#FFFFFF" text-anchor="middle">Our <tspan fill="#F59E0B">Exceptional</tspan> Services</text>
    <text x="530" y="30" class="sans" font-size="13" fill="#A1A1AA" text-anchor="middle">Founded in Luxembourg in 2015, bringing Egyptian wisdom and modern massage therapy.</text>

    <!-- 6 Treatment Cards -->
    <g transform="translate(0, 70)">
      <rect width="330" height="220" rx="10" fill="#1C1815" stroke="#382C1E"/>
      <text x="20" y="35" class="serif" font-size="16" font-weight="700" fill="#F59E0B">Massage A La Carte</text>
      <text x="20" y="60" class="sans" font-size="11" fill="#E4E4E7">Starts from €53.00 for 30 mins</text>
      <text x="20" y="90" class="sans" font-size="11" fill="#71717A">Relaxation, body therapy and massage pack.</text>
      <rect x="20" y="160" width="80" height="30" rx="4" fill="#D97706"/>
      <text x="60" y="180" class="sans" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">Reserve</text>
    </g>

    <g transform="translate(365, 70)">
      <rect width="330" height="220" rx="10" fill="#1C1815" stroke="#382C1E"/>
      <text x="20" y="35" class="serif" font-size="16" font-weight="700" fill="#F59E0B">Cleopatra Massage</text>
      <text x="20" y="60" class="sans" font-size="11" fill="#E4E4E7">Starts from €90.00 for 60 mins</text>
      <text x="20" y="90" class="sans" font-size="11" fill="#71717A">Lymphatic, relaxing and aromatic rituals.</text>
      <rect x="20" y="160" width="80" height="30" rx="4" fill="#D97706"/>
      <text x="60" y="180" class="sans" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">Reserve</text>
    </g>

    <g transform="translate(730, 70)">
      <rect width="330" height="220" rx="10" fill="#1C1815" stroke="#382C1E"/>
      <text x="20" y="35" class="serif" font-size="16" font-weight="700" fill="#F59E0B">Massage Anti-Stress</text>
      <text x="20" y="60" class="sans" font-size="11" fill="#E4E4E7">Starts from €90.00 for 60 mins</text>
      <text x="20" y="90" class="sans" font-size="11" fill="#71717A">Complete full body therapy from toe to skull.</text>
      <rect x="20" y="160" width="80" height="30" rx="4" fill="#D97706"/>
      <text x="60" y="180" class="sans" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">Reserve</text>
    </g>

    <g transform="translate(0, 310)">
      <rect width="330" height="220" rx="10" fill="#1C1815" stroke="#382C1E"/>
      <text x="20" y="35" class="serif" font-size="16" font-weight="700" fill="#F59E0B">Future Mom Massage</text>
      <text x="20" y="60" class="sans" font-size="11" fill="#E4E4E7">Starts from €90.00 for 60 mins</text>
      <text x="20" y="90" class="sans" font-size="11" fill="#71717A">Gentle relief for pregnancy anxiety &amp; tension.</text>
      <rect x="20" y="160" width="80" height="30" rx="4" fill="#D97706"/>
      <text x="60" y="180" class="sans" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">Reserve</text>
    </g>

    <g transform="translate(365, 310)">
      <rect width="330" height="220" rx="10" fill="#1C1815" stroke="#382C1E"/>
      <text x="20" y="35" class="serif" font-size="16" font-weight="700" fill="#F59E0B">Egyptian Reflexology</text>
      <text x="20" y="60" class="sans" font-size="11" fill="#E4E4E7">Starts from €53.00 for 30 mins</text>
      <text x="20" y="90" class="sans" font-size="11" fill="#71717A">Foot reflex points targeting stress relief.</text>
      <rect x="20" y="160" width="80" height="30" rx="4" fill="#D97706"/>
      <text x="60" y="180" class="sans" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">Reserve</text>
    </g>

    <g transform="translate(730, 310)">
      <rect width="330" height="220" rx="10" fill="#1C1815" stroke="#382C1E"/>
      <text x="20" y="35" class="serif" font-size="16" font-weight="700" fill="#F59E0B">Hot Stone Massage</text>
      <text x="20" y="60" class="sans" font-size="11" fill="#E4E4E7">Starts from €90.00 for 60 mins</text>
      <text x="20" y="90" class="sans" font-size="11" fill="#71717A">Deep volcanic stone heat relaxation.</text>
      <rect x="20" y="160" width="80" height="30" rx="4" fill="#D97706"/>
      <text x="60" y="180" class="sans" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">Reserve</text>
    </g>
  </g>

  <!-- BRANCHES & MAP -->
  <g transform="translate(70, 1150)">
    <rect width="1060" height="240" rx="12" fill="#1C1815" stroke="#382C1E"/>
    <text x="40" y="45" class="serif" font-size="24" font-weight="700" fill="#F59E0B">Our Branches in Luxembourg</text>
    <text x="40" y="80" class="sans" font-size="13" fill="#E4E4E7">📍 Bascharage — 76, Avenue de Luxembourg L-4940</text>
    <text x="40" y="110" class="sans" font-size="13" fill="#E4E4E7">📍 Mamer / Bereldange — 102, Route de Luxembourg L-7221</text>
    <text x="40" y="150" class="sans" font-size="13" fill="#A1A1AA">📞 +352 671 110 278 · ✉️ egyptamassage@gmail.com</text>
  </g>

  <!-- TEAM & FOOTER -->
  <g transform="translate(70, 1460)">
    <text x="530" y="0" class="serif" font-size="32" font-weight="700" fill="#FFFFFF" text-anchor="middle">Meet <tspan fill="#F59E0B">Our Team</tspan></text>
    <g transform="translate(100, 50)" class="sans" font-size="12" fill="#D4D4D8" text-anchor="middle">
      <circle cx="50" cy="40" r="30" fill="#382C1E"/>
      <text x="50" y="90" font-weight="700">Khaled</text>
      <text x="50" y="106" font-size="10" fill="#71717A">CEO</text>

      <circle cx="250" cy="40" r="30" fill="#382C1E"/>
      <text x="250" y="90" font-weight="700">Ronan</text>
      <text x="250" y="106" font-size="10" fill="#71717A">Manager</text>

      <circle cx="450" cy="40" r="30" fill="#382C1E"/>
      <text x="450" y="90" font-weight="700">Sarah</text>
      <text x="450" y="106" font-size="10" fill="#71717A">Therapist</text>

      <circle cx="650" cy="40" r="30" fill="#382C1E"/>
      <text x="650" y="90" font-weight="700">Gabriela</text>
      <text x="650" y="106" font-size="10" fill="#71717A">Therapist</text>

      <circle cx="850" cy="40" r="30" fill="#382C1E"/>
      <text x="850" y="90" font-weight="700">Diana</text>
      <text x="850" y="106" font-size="10" fill="#71717A">Therapist</text>
    </g>
  </g>

  <!-- FOOTER -->
  <g transform="translate(0, 1800)">
    <rect width="1200" height="400" fill="#0C0A09"/>
    <g transform="translate(70, 60)" class="sans" font-size="12">
      <text x="0" y="24" class="serif" font-size="18" font-weight="700" fill="#F59E0B">EGYPTA MASSAGE</text>
      <text x="0" y="60" fill="#71717A">Luxembourg Luxury Massage Salon · © 2024 Egypta Massage</text>
      <text x="530" y="200" fill="#52525B" text-anchor="middle">Website designed &amp; developed by Zoe Digital.</text>
    </g>
  </g>
</svg>`;

// 5. Maidstone School of Therapy
const maidstoneSchoolSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 3600" width="1200" height="3600">
  <defs>
    <style>
      .serif { font-family: 'Playfair Display', Georgia, serif; }
      .sans { font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; }
    </style>
    <linearGradient id="heroDark" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#27272A"/>
      <stop offset="100%" stop-color="#18181B"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="3600" fill="#FFFFFF"/>

  <!-- HERO SECTION -->
  <rect width="1200" height="600" fill="url(#heroDark)"/>
  
  <!-- Header -->
  <g transform="translate(70, 35)">
    <text x="0" y="20" class="serif" font-size="18" font-weight="700" fill="#FFFFFF">Maidstone School of Therapy</text>
    <g class="sans" font-size="12" font-weight="600" fill="#D4D4D8">
      <text x="560" y="20">HOME</text>
      <text x="630" y="20">ABOUT</text>
      <text x="705" y="20">SERVICES</text>
      <text x="790" y="20">TRAINING</text>
    </g>
    <rect x="930" y="0" width="130" height="34" rx="4" fill="#FFFFFF"/>
    <text x="995" y="22" class="sans" font-size="11" font-weight="700" fill="#18181B" text-anchor="middle">APPLY NOW →</text>
  </g>

  <!-- Big Hero Title -->
  <g transform="translate(600, 280)" text-anchor="middle">
    <text x="0" y="40" class="serif" font-size="70" font-weight="700" fill="#FFFFFF">School of</text>
    <text x="0" y="120" class="serif" font-size="70" font-weight="700" fill="#FFFFFF">Therapy</text>
  </g>

  <!-- SUBHERO BANNER -->
  <g transform="translate(70, 660)">
    <text x="530" y="40" class="serif" font-size="36" font-weight="700" fill="#18181B" text-anchor="middle">Transformative Training For</text>
    <text x="530" y="85" class="serif" font-size="36" font-weight="700" fill="#18181B" text-anchor="middle">Compassionate Therapists.</text>
    
    <text x="530" y="130" class="sans" font-size="14" fill="#71717A" text-anchor="middle">
      Welcome to Maidstone School of Therapy, a leading training provider dedicated to nurturing skilled
    </text>
    <text x="530" y="152" class="sans" font-size="14" fill="#71717A" text-anchor="middle">
      and compassionate therapists. Accredited CPCAB counselling courses.
    </text>

    <rect x="445" y="180" width="170" height="40" rx="4" fill="#E4E4E7"/>
    <text x="530" y="205" class="sans" font-size="11" font-weight="700" fill="#18181B" text-anchor="middle">EXPLORE OUR COURSES ⚙</text>
  </g>

  <!-- ACCREDITATIONS STRIP -->
  <g transform="translate(70, 940)">
    <rect width="1060" height="80" rx="8" fill="#F4F4F5"/>
    <g class="sans" font-size="13" font-weight="800" fill="#52525B" transform="translate(80, 45)">
      <text x="60" y="0">cpcab</text>
      <text x="260" y="0">bacp · counselling</text>
      <text x="540" y="0">NCPS Accredited</text>
      <text x="780" y="0">UKCP Member</text>
    </g>
  </g>

  <!-- ABOUT SECTION -->
  <g transform="translate(70, 1080)">
    <g transform="translate(0, 40)">
      <text x="0" y="20" class="serif" font-size="34" font-weight="700" fill="#18181B">About Maidstone</text>
      <text x="0" y="60" class="serif" font-size="34" font-weight="700" fill="#18181B">School Of Therapy</text>
      
      <text x="0" y="110" class="sans" font-size="14" fill="#52525B" width="480">
        <tspan x="0" dy="0">Welcome to the only CPCAB and BACP-accredited psychotherapy</tspan>
        <tspan x="0" dy="24">training provider in Maidstone. Founded by Amanda Drury,</tspan>
        <tspan x="0" dy="24">our school offers exceptional, dynamic counselling education.</tspan>
      </text>

      <rect x="0" y="210" width="180" height="42" rx="4" fill="#18181B"/>
      <text x="90" y="236" class="sans" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">EXPLORE COURSES →</text>
    </g>

    <!-- Faculty image box -->
    <g transform="translate(540, 20)">
      <rect width="480" height="320" rx="12" fill="#E4E4E7"/>
      <circle cx="240" cy="160" r="80" fill="#A1A1AA" opacity="0.4"/>
    </g>
  </g>

  <!-- COURSES SECTION -->
  <g transform="translate(0, 1500)">
    <rect width="1200" height="600" fill="#09090B"/>
    <g transform="translate(70, 60)">
      <text x="0" y="30" class="serif" font-size="34" font-weight="700" fill="#FFFFFF">Our CPCAB Recognised Courses</text>
      
      <g transform="translate(0, 80)">
        <!-- Course 1 -->
        <rect width="500" height="240" rx="8" fill="#18181B" stroke="#27272A"/>
        <text x="30" y="45" class="sans" font-size="11" font-weight="800" fill="#A1A1AA">LEVEL 4</text>
        <text x="30" y="85" class="serif" font-size="24" font-weight="700" fill="#FFFFFF">Therapeutic Counselling</text>
        <text x="30" y="125" class="sans" font-size="13" fill="#A1A1AA">
          Achieve professional competence as a qualified counsellor,
          ready for supervised clinical practice.
        </text>
        <rect x="30" y="170" width="130" height="34" rx="4" fill="#27272A"/>
        <text x="95" y="192" class="sans" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">LEARN MORE ⚙</text>
      </g>

      <g transform="translate(540, 80)">
        <!-- Course 2 -->
        <rect width="500" height="240" rx="8" fill="#18181B" stroke="#27272A"/>
        <text x="30" y="45" class="sans" font-size="11" font-weight="800" fill="#A1A1AA">LEVEL 5</text>
        <text x="30" y="85" class="serif" font-size="24" font-weight="700" fill="#FFFFFF">Psychotherapeutic Counselling</text>
        <text x="30" y="125" class="sans" font-size="13" fill="#A1A1AA">
          Advance your clinical expertise with in-depth focus on
          complex psychotherapeutic modalities.
        </text>
        <rect x="30" y="170" width="130" height="34" rx="4" fill="#27272A"/>
        <text x="95" y="192" class="sans" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">LEARN MORE ⚙</text>
      </g>
    </g>
  </g>

  <!-- TEAM & FOOTER -->
  <g transform="translate(70, 2180)">
    <text x="0" y="30" class="serif" font-size="32" font-weight="700" fill="#18181B">Our Expert Faculty Team</text>
    
    <g transform="translate(0, 60)">
      <rect width="1060" height="160" rx="8" fill="#F4F4F5"/>
      <circle cx="90" cy="80" r="50" fill="#D4D4D8"/>
      <text x="170" y="65" class="serif" font-size="20" font-weight="700" fill="#18181B">Amanda Drury</text>
      <text x="170" y="90" class="sans" font-size="12" font-weight="600" fill="#71717A">Founder &amp; Lead Psychotherapist</text>
      <text x="170" y="120" class="sans" font-size="13" fill="#52525B">15+ years in clinical practice, accredited CPCAB course leader.</text>
    </g>
  </g>

  <!-- FOOTER -->
  <g transform="translate(0, 2500)">
    <rect width="1200" height="400" fill="#09090B"/>
    <g transform="translate(70, 60)" class="sans" font-size="12">
      <text x="0" y="24" class="serif" font-size="18" font-weight="700" fill="#FFFFFF">Maidstone School of Therapy</text>
      <text x="0" y="60" fill="#71717A">Masters House, College Road, Maidstone, ME15 6AX</text>
      <text x="0" y="85" fill="#71717A">📞 07956155811 · ✉️ info@maidstoneschooloftherapy.co.uk</text>
      <text x="530" y="200" fill="#52525B" text-anchor="middle">© 2025 Maidstone School Of Therapy &amp; Counselling. Designed by Zoe Digital.</text>
    </g>
  </g>
</svg>`;

fs.writeFileSync(path.join(outDir, 'twins-dental.svg'), twinsDentalSvg.trim());
fs.writeFileSync(path.join(outDir, 'the-monday-collective.svg'), mondayCollectiveSvg.trim());
fs.writeFileSync(path.join(outDir, 'fitting-you.svg'), fittingYouSvg.trim());
fs.writeFileSync(path.join(outDir, 'egypta-massage.svg'), egyptaMassageSvg.trim());
fs.writeFileSync(path.join(outDir, 'maidstone-school-of-therapy.svg'), maidstoneSchoolSvg.trim());

console.log('Successfully generated all 5 project SVGs in public/projects/');
