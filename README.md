# Accredian Enterprise

Modern Enterprise Workforce Transformation & AI Upskilling Platform built for Fortune 500 organizations and high-growth technology teams. Architected with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and Framer Motion, delivering Linear & Vercel level design polish and pristine responsiveness.

---

## Features

- **Pristine Dual-Theme System**: Pure white Light Mode (`#FFFFFF`) and dark obsidian Dark Mode (`#09090B`) with custom class-variant matching in Tailwind CSS v4.
- **Luxury Brand Emblem & Typography**: Geometric golden crest 'A' emblem paired with Google Fonts **Playfair Display** (`font-serif-luxury`) and **Plus Jakarta Sans**.
- **Grand Preloader / Loading Screen**: ~4-second intro experience featuring golden logo crest, giant luxury serif typography (**Accredian** with luminous blue swoosh line), sub-headline, and thin glowing beam progress bar (`LOADING... 75%`).
- **Dedicated Enterprise Consultation Page (`/consultation`)**: Independent route featuring transformation domain selection, Solution Architect advisor picker, interactive date & time slot selector, and instant calendar pass (.ics) download simulator.
- **Transitional Routing Animation**: PageTransitionOverlay overlay playing *"Opening Accredian Enterprise Advisory Portal..."* when clicking any booking button.
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
- **Searchable Enterprise FAQs**: Accordion with live search bar and category filters.
- **High-Impact CTA Banner**: Celebratory confetti trigger and advisory booking navigation.
- **Lead Capture Form & API Routes**: Full validation form connected to `/api/lead` with toast notifications.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Theme Management**: Next Themes
- **Icons**: Lucide React
- **Typography**: Google Fonts (Playfair Display & Plus Jakarta Sans)

---

## Folder Structure

```
accredian-enterprise/
├── app/
│   ├── api/
│   │   ├── lead/            # POST Lead capture API endpoint
│   │   └── testimonials/    # GET Testimonials JSON API
│   ├── consultation/        # Dedicated Enterprise Advisory Booking page
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
│   └── data.ts              # Centralized data structures for courses, clients, FAQs
├── hooks/                   # Custom React hooks (useToast, useScrollProgress)
├── lib/                     # Utility functions (cn, classnames)
├── types/                   # TypeScript interface definitions
├── .env.example             # Template for environment variables
└── README.md                # Documentation
```

---

## Installation

Run the application locally in development mode:

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/accredian-enterprise.git

# Navigate into project folder
cd accredian-enterprise

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Build

Compile and test the production build locally:

```bash
# Generate production bundle
npm run build

# Start production server
npm start
```

---

## Deployment

Deploy directly to **Vercel** with one command:

```bash
npx vercel
```

Or connect the GitHub repository to the [Vercel Dashboard](https://vercel.com) for automated continuous integration on every push to `main`.

---

## AI Usage

- **Boilerplate Scaffolding**: Initial setup of App Router structure and TypeScript interfaces.
- **Mock Data Generation**: Structuring realistic enterprise course curricula, FAQs, and executive reviews.
- **Animation Primitives**: Generating initial Framer Motion variant skeletons for page transitions.

---

## Manual Improvements

- **Luxury Brand & Typography Architecture**: Designed a custom geometric golden crest 'A' emblem (`AccredianEmblem`) and integrated **Playfair Display** serif typography with blue accent swoosh curves.
- **Tailwind CSS v4 Dark Mode Custom Variant**: Configured `@variant dark (&:where(.dark, .dark *));` to ensure Light Mode (`#FFFFFF`) and Dark Mode (`#09090B`) toggle flawlessly.
- **Dedicated Routing & Transition Pipeline**: Built a standalone `/consultation` booking route paired with `PageTransitionOverlay` for seamless enterprise navigation.
- **Accessibility & UX Optimizations**: Added single-line non-wrapping header navigation labels (`whitespace-nowrap`), keyboard accessibility handlers (`ESC`, `⌘K`), focus rings, and Toast notification triggers.
- **Strict Validation**: Added client-side and server-side email/phone validation routines in `/api/lead`.

---

## Future Improvements

1. **Database Persistence**: Connect `/api/lead` to PostgreSQL via Prisma or Supabase for persistent lead storage.
2. **SSO & Authentication**: Add NextAuth.js / Clerk authentication for client L&D manager portals.
3. **Analytics Integration**: Connect PostHog or Segment event logging to track course syllabus downloads and demo conversions.

---

## License

This project is licensed under the **MIT License**.
