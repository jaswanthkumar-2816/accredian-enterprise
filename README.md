# Accredian Enterprise

Modern Enterprise Workforce Transformation & AI Upskilling Platform built for Fortune 500 organizations and high-growth technology teams. Architected with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and Framer Motion, delivering Linear & Vercel level design polish and pristine responsiveness.

---

## 🌟 Key Features

- **Pristine Dual-Theme System**: Pure white Light Mode (`#FFFFFF`) and dark obsidian Dark Mode (`#09090B`) with custom class-variant matching in Tailwind CSS v4.
- **Luxury Brand Emblem & Typography**: Geometric golden crest 'A' emblem paired with Google Fonts **Playfair Display** (`font-serif-luxury`) and **Plus Jakarta Sans**.
- **Grand Preloader / Loading Screen**: ~4-second intro experience featuring golden logo crest, giant luxury serif typography (**Accredian** with luminous blue swoosh line), sub-headline, and thin glowing beam progress bar (`LOADING... 75%`).
- **Dedicated Enterprise Consultation Page (`/consultation`)**: Independent route featuring transformation domain selection, Solution Architect advisor picker, interactive date & time slot selector, and instant calendar pass (.ics) download simulator.
- **Transitional Routing Animation**: `PageTransitionOverlay` overlay playing *"Opening Accredian Enterprise Advisory Portal..."* when clicking any booking button.
- **Sticky Navbar & Brand Navigation**: Smooth left-aligned navigation header with single-line non-wrapping labels (`whitespace-nowrap`), command palette trigger (⌘K), theme toggle, and mobile menu drawer.
- **Live Interactive L&D Dashboard Mockup**: Real-time learner metrics, ROI counters, and progress indicators in the hero section.
- **Proven Track Record Stats**: Animated count-up statistics (10,000+ Active Learners, 200+ Corporate Clients, 3.8x Skill Index ROI).
- **Corporate Client Marquee**: Infinite looping client logo ticker (Reliance, HCL, IBM, Bayer, Deloitte, Microsoft, Snowflake) with hover-pause.
- **Accredian Edge Timeline**: Phase 01–04 timeline grid with animated connector lines and verifiable metrics.
- **CAT Framework Sandbox**: 3-stage proprietary methodology (Concept ➔ Application ➔ Tools) with live deliverable & tech stack switcher.
- **Specialized Domain Hub**: 7 vertical domain cards with program counts, key skills, and syllabus drawer triggers.
- **Course Segmentation & Modal**: Category filtering tabs (Program, Industry, Topic, Level) and detailed curriculum breakdown modal.
- **3-Step Training Pipeline**: Structured enterprise execution roadmap with expected outputs.
- **Executive Testimonials Carousel**: Auto-sliding testimonial carousel with impact metrics and star ratings.
- **Searchable Enterprise FAQs**: Accordion with live search bar and category filtering.
- **High-Impact CTA Banner**: Celebratory confetti trigger and advisory booking navigation.
- **Lead Capture Form & API Routes**: Full validation form connected to `/api/lead` with toast notifications.

---

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Theme Management**: Next Themes
- **Icons**: Lucide React
- **Typography**: Google Fonts (Playfair Display & Plus Jakarta Sans)

---

## 📐 Component Structure & Architecture

```
accredian-enterprise/
├── app/
│   ├── api/
│   │   ├── lead/            # POST Lead capture API endpoint
│   │   └── testimonials/    # GET Testimonials JSON API
│   ├── consultation/        # Dedicated Enterprise Advisory Booking page
│   ├── favicon.ico          # 64x64 PNG Golden 'A' Emblem favicon
│   ├── icon.png             # Golden 'A' Emblem PNG
│   ├── icon.svg             # Golden 'A' Emblem SVG
│   ├── globals.css          # Tailwind CSS v4 & theme design tokens
│   ├── layout.tsx           # Root layout & Google font configurations
│   ├── page.tsx             # Main landing page assembly
│   └── providers.tsx        # NextThemesProvider wrapper
├── components/
│   ├── sections/            # Landing page section components
│   │   ├── navbar.tsx       # Sticky navigation header
│   │   ├── hero.tsx         # Hero section & interactive dashboard mockup
│   │   ├── track-record.tsx # Count-up metrics section
│   │   ├── clients.tsx      # Corporate client marquee ticker
│   │   ├── enterprise-edge.tsx # Accredian Edge timeline
│   │   ├── cat-framework.tsx   # CAT Framework interactive sandbox
│   │   ├── domain-expertise.tsx # Vertical domain cards
│   │   ├── course-segmentation.tsx # Course filters & modal trigger
│   │   ├── training-process.tsx # 3-step delivery roadmap
│   │   ├── testimonials.tsx     # Executive review carousel
│   │   ├── faq.tsx          # Searchable FAQ accordion
│   │   ├── cta.tsx          # Call-to-action banner
│   │   ├── contact.tsx      # Advisory lead capture form
│   │   └── footer.tsx       # Multi-column footer & newsletter
│   └── ui/                  # Reusable UI primitives
│       ├── logo.tsx         # AccredianEmblem & AccredianLogo
│       ├── loading-screen.tsx # Luxury serif preloader screen
│       ├── page-transition.tsx# Routing transition overlay
│       ├── button.tsx       # Motion button with ripple effect
│       ├── card.tsx         # Adaptive theme card wrapper
│       ├── badge.tsx        # Variant badge component
│       ├── course-modal.tsx # Syllabus breakdown drawer
│       ├── command-menu.tsx # ⌘K Command palette modal
│       ├── theme-toggle.tsx # Light/Dark mode switcher
│       └── toast.tsx        # Toast notification system
├── constants/
│   └── data.ts              # Centralized single-source-of-truth dataset
├── hooks/                   # Custom React hooks (useToast, useScrollProgress)
├── lib/                     # Utility functions (cn, classnames)
├── types/                   # TypeScript interface definitions
├── .env.example             # Template for environment variables
└── README.md                # Documentation
```

---

## 💻 Installation

Run the application locally in development mode:

```bash
# Clone the repository
git clone https://github.com/jaswanthkumar-2816/accredian-enterprise.git

# Navigate into project folder
cd accredian-enterprise

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗 Build & Deployment

```bash
# Generate production bundle
npm run build

# Start production server locally
npm start

# Deploy to Vercel
npx vercel
```

---

## 🤖 AI Usage & Manual Engineering Reflections

### Where AI Helped the Most
AI helped most with initial boilerplate generation, structuring complex JSON data schemas (for courses, vertical domain hubs, FAQs, and executive reviews), and generating baseline Framer Motion animation variants. It also accelerated writing baseline TypeScript interface definitions across the project.

### Manual Refactoring & Improvements
1. **Luxury Brand & Typography Architecture**: Designed a custom geometric golden crest emblem (`AccredianEmblem`) and integrated Google's **Playfair Display** (`font-serif-luxury`) with blue accent swoosh curves.
2. **Tailwind CSS v4 Dark Mode Integration**: Configured custom `@variant dark (&:where(.dark, .dark *));` to ensure seamless class-based toggling between 100% pure white (`#FFFFFF`) Light Mode and dark obsidian (`#09090B`) Dark Mode.
3. **Animated Preloader & Page Transitions**: Built a ~4-second intro screen with 3D staggered letter-by-letter entrance animations for **A-C-C-R-E-D-I-A-N**, continuous floating wave motion, and a `PageTransitionOverlay` component for route transitions.
4. **Dedicated Advisory Consultation Route (`/consultation`)**: Designed an independent booking application featuring transformation domain selection, Solution Architect advisor picker, slot calendar, and `.ics` pass generator.
5. **Form Validation & API Endpoints**: Built client-side and server-side email/phone regex validation routines for `POST /api/lead`.

### Handling Incorrect AI-Generated Code
Initial AI outputs used Tailwind CSS v3 media-query dark mode conventions which failed to toggle manually via `next-themes`. I fixed this by defining a custom Tailwind CSS v4 `@variant dark` rule in `app/globals.css`. Additionally, AI generated an incorrect advisor initials calculation (`R` instead of `ER` for Elena Rostova) which I refactored using regex string parsing (`adv.name.replace(/^Dr\.\s*/, "").split(" ").map(n => n[0]).join("")`).

### Challenges Faced
1. **Tailwind CSS v4 Dark Mode Compatibility**: Class-based dark mode in Tailwind CSS v4 differs from v3; configuring `@variant dark` resolved theme switching issues.
2. **Preventing Navigation Text Wrapping**: Ensuring header navigation links remained single-line (`whitespace-nowrap`) across various viewport widths without awkward wrapping.
3. **Browser Favicon Caching**: Browsers aggressively cache default Next.js `favicon.ico` files. Generated custom 64x64 PNG and SVG Golden 'A' favicon files with explicit cache-busting parameters (`?v=2`).

### Implemented Advanced Features
- ✅ **Lead capture form**: Full validation form on landing page and dedicated `/consultation` page.
- ✅ **API integration**: `POST /api/lead` and `GET /api/testimonials` with simulated latency and regex validation.
- ✅ **Performance optimization**: Code splitting, Turbopack static pre-rendering, optimized Google Fonts, and lightweight SVG assets.
- ✅ **SEO improvements**: Complete OpenGraph, Twitter card metadata, semantic HTML5 structure, and descriptive title tags.
- ✅ **Animations / advanced UI**: Framer Motion 3D letter reveals, infinite client logo ticker, ambient cursor spotlight, ⌘K command palette, and transitional loading overlays.

---

## 🔮 Future Improvements With 1 More Day

1. **Database Persistence**: Connect `POST /api/lead` to PostgreSQL via Supabase / Prisma for permanent enterprise lead storage.
2. **SSO & Authentication**: Add NextAuth.js / Clerk authentication for client L&D manager portals.
3. **Analytics Integration**: Connect PostHog or Segment event logging to track course syllabus downloads and demo conversions.

---

## 📜 License

This project is licensed under the **MIT License**.
