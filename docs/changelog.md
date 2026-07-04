# Changelog

## [2026-07-02]
- **Feature**: Initialized React Vite project structure manually.
- **Feature**: Configured Tailwind CSS with custom dark minimalist theme based on design references.
- **Feature**: Added React Router DOM setup.
- **Feature**: Created base layout components (Navbar, Footer, Layout).
- **Feature**: Created page templates for Home, About, Skills, Projects, Services, Experience, Contact.
- **Documentation**: Generated comprehensive project documentation in `/docs`.

## [2026-07-03 — Redesign Phase]
- **Redesign**: Converted multi-page router app to single-page smooth-scrolling portfolio.
- **Feature**: Added interactive canvas `ParticleBackground` with mouse-reactive floating particles.
- **Feature**: Created centralized `animations/variants.js` with reusable Framer Motion configs.
- **Feature**: Added `SectionWrapper` for consistent scroll-reveal animations across all sections.
- **Content**: Rewrote all section content professionally (Home, About, Projects, Experience, Skills, Services, Education, Contact).
- **Feature**: Skills section redesigned with categorized glassmorphic cards and staggered reveal.

## [2026-07-03 — Icon Audit & Fix]
- **Bug Fix**: Removed `SiCss3` import (does not exist in installed package). Replaced with `SiCss`.
- **Bug Fix**: Removed `SiVscode` import (does not exist in installed package). Replaced with `TbBrandVscode` from `react-icons/tb`.
- **Validation**: Runtime-checked all 41 react-icons exports against the installed `node_modules` — all 41 now return `OK` with zero missing icons.
- **Documentation**: Updated `decision.md`, `task.md`, and `claude.md` with findings and rationale.

## [2026-07-03 — Education Section Rewrite]
- **Content**: Replaced all placeholder education data with Muhammad Saqib Fareed's real learning journey.
- **Entry 1**: SMIT — Web Design Crash Course (Completed) · HTML5, CSS3, JavaScript
- **Entry 2**: Corvit Systems — Full Stack Web Development (Completed) · 8 technologies
- **Entry 3**: SMIT — AI-Driven Web & App Development (Currently Enrolled) · 3 sub-groups (Web Dev, AI Tools, Mobile)
- **Feature**: Status badges — glowing emerald pulse for "Currently Enrolled", checkmark for "Completed".
- **Feature**: Grouped skill chips with brand icons, staggered Framer Motion reveal on scroll.
- **Feature**: Animated timeline dot with stronger green glow for the active/current enrollment.
- **Validation**: All 13 icons used in Education.jsx confirmed `OK` via runtime node check.

## [2026-07-03 — Environment Configuration & Contact Updates]
- **Configuration**: Added `.env` and `.env.example` to manage environment variables (`VITE_LINKEDIN_URL`, `VITE_GITHUB_URL`).
- **Security**: Ensured `.env` is ignored by git via `.gitignore`.
- **Feature**: Updated Footer and Contact sections to pull social URLs from environment variables (`import.meta.env`).
- **Design**: Replaced plain text links in the footer with professional, animated icons from `react-icons` (LinkedIn, GitHub).
- **Cleanup**: Removed unused and duplicate hardcoded configuration links.

## [2026-07-03 — Hero Section Cleanup]
- **Design**: Removed redundant CTA buttons ("Get in Touch") from the Home section.
- **Feature**: Retained "Download Resume" as the primary, high-contrast CTA to focus user attention and maintain a clean layout.
- **Cleanup**: Removed unused `FiMail` import and associated dead code from `Home.jsx`.

## [2026-07-03 — Contact Section Cleanup]
- **Design**: Removed "Connect With Me" (LinkedIn) and "View My Codebase" (GitHub) cards from the Contact section to keep the UI strictly focused on direct communication (Email, Phone, Location).
- **Cleanup**: Cleaned up dead code and removed unused `FiLinkedin` and `FiGithub` imports from `Contact.jsx`.

## [2026-07-03 — Hero Section Redesign]
- **Design**: Updated display name to "M. Saqib".
- **Feature**: Implemented custom `TypewriterEffect` component for infinitely looping role animations without external dependencies.
- **Content**: Added new professional introduction and extracted role list to `constants/hero.js`.
- **Feature**: Added animated scroll-down indicator using Framer Motion.
- **Design**: Replaced dummy placeholder with real profile image and scaled it down responsively.

## [2026-07-03 — Contact Form Integration]
- **Feature**: Integrated Formspree for handling contact form submissions.
- **Security**: Added `VITE_FORMSPREE_ENDPOINT` to environment variables to abstract the endpoint URL.
- **UX/UI**: Added comprehensive form validation, loading spinner, error states, and a beautiful success animation upon successful submission.

## [2026-07-03 — Instagram Integration & Styling]
- **Feature**: Added `VITE_INSTAGRAM_URL` to environment variables.
- **Design**: Integrated Instagram icons into both the Footer and Contact sections with matching premium hover effects.
- **Design**: Fixed irregular spacing between the Contact cards by switching to a flex column layout with consistent gap spacing.

## [2026-07-03 — Navbar Branding Redesign]
- **Design**: Replaced plain "MSF." text with a premium developer brand identity (`< /> MSF`).
- **Feature**: Extracted logo into a reusable, accessible `Logo.jsx` component featuring smooth entrance and hover animations using Framer Motion.

## [2026-07-03 — Hero Image Layout Redesign]
- **Design**: Shifted Hero layout to place the profile text on the left and the image on the right (stacking image below text on mobile).
- **Design**: Restyled the profile picture container to be perfectly circular while maintaining its premium glowing effects.
- **Content**: Bound the Hero section to use the actual profile image (`Saqib.jpeg`) instead of a placeholder.

## [2026-07-03 — Image Consolidation & Layout Optimization]
- **Content**: Removed the redundant profile image from the About section, dedicating the Hero section as the sole location for the portrait.
- **Design**: Expanded the About section's text content and aligned the feature cards into a clean 3-column grid to maximize the newly available space.
- **Design**: Scaled Hero image to `260x260px` and applied a `220px` top margin for exact horizontal alignment with text blocks.

## [2026-07-03 — Global Naming Update]
- **Content**: Globally renamed the "Work" section to "Projects" (Navbar, Headings, Links) for better semantic clarity.

## [2026-07-03 — Hero Scaling & Core Upgrade]
- **Design**: Upscaled the Hero profile image strictly to `320x320px` to enhance its focal presence on desktop screens while retaining responsive flex rules.
- **Design**: Adjusted the vertical offset of the Hero profile image by dropping it `150px` below the Navbar, giving the header more breathing room.
- **System**: Implemented strict React Router DOM v7 future flags (`v7_startTransition`, `v7_relativeSplatPath`) inside `main.jsx` to eliminate browser console deprecation warnings and ensure long-term stability.
- **Branding**: Replaced the default Vite favicon with a custom-designed, gradient-styled `.svg` developer favicon (`</> MSF`) that aligns with the portfolio's color theme.

## [2026-07-03 — Projects Section Overhaul & MediFlow]
- **Architecture**: Extracted all project data into `src/constants/projects.js` as a single source of truth — no project content lives in components.
- **Architecture**: Built a new reusable `ProjectCard.jsx` component featuring animated gradient top border, status badge (Completed / In Progress), tech badges, staggered viewport-triggered entrance, and a gradient "Live Demo" CTA button.
- **Content**: Added **MediFlow – Medical Store Management System** as the featured project, including its live demo link (`https://medi-flow-ecru.vercel.app/`), full tech stack (React, Redux Toolkit, Tailwind, Node.js, Express, MongoDB, JWT).
- **Content**: Updated `projects.js` to import `src/assets/MediFlow.png` and render it as the project thumbnail. Added smooth hover scaling (zoom effect) inside the card.
- **Environment**: Updated `.env` and `.env.example` to define `VITE_MEDIFLOW_GITHUB_URL=https://github.com/itx-Saqib/MediFlow` to dynamically source the GitHub repo link.

## [2026-07-03 — Skills Section Centralization & Update]
- **Architecture**: Extracted the hardcoded skills data array out of `Skills.jsx` and centralized it into `src/constants/skills.jsx`. This cleanly separates data from the presentation layer.
- **Content**: Added **PostgreSQL** (`SiPostgresql` - `#4169E1`) to the Database category.
- **Content**: Added **Figma** (`SiFigma` - `#F24E1E`) to the Tools & Others category.
- **Content**: Replaced **Redux Toolkit** with **Next.js** (`SiNextdotjs` - dynamic theme color) in the Frontend category.

## [2026-07-03 — Personal Portfolio Thumbnail Update]
- **Content**: Imported `src/assets/Portfolio.png` and mapped it to the Developer Portfolio project card via `projects.js`.
- **Design**: The new image automatically inherits the uniform thumbnail styling from `ProjectCard.jsx`, ensuring perfectly rounded corners, aspect-ratio preservation, and a smooth hover-zoom transition consistent with the MediFlow project.




## [Date: 2026-07-04] Mobile Responsiveness Overhaul
- Restructured Hero section mobile layout to prioritize profile image.
- Transformed mobile navigation into a full-screen, scroll-locked glassmorphic overlay.
- Extracted social links into a reusable SocialLinks component.
- Tuned padding and margins on About and Services grids for small screens.

## [2026-07-04] Critical UI & Animation Fixes
- Fixed horizontal scrolling: replaced x-translating Framer Motion blobs with CSS-only animations; applied overflow-x:clip on html+body; reduced fadeLeft/Right variant offsets from �50 to �30; removed x-axis parallax from HeroImage.
- Rebuilt BackgroundCanvas with premium CSS diagonal line-grid animation inspired by parallelogram movement patterns.
- Fixed Hero 'M. Saqib' name wrapping on mobile using whitespace-nowrap and block spans.
- Added overflow-x-clip to SectionWrapper for per-section containment.

## [2026-07-04] Hero, Education & Navbar Enhancement
- Rebuilt HeroImage with premium multi-layer gradient ring (conic-gradient), ambient glow, floating animation, y-axis parallax, glassmorphism border, and 3 animated decorative accents.
- Updated SMIT AI-Driven course: added Next.js, Antigravity, full HTML/CSS/JS stack; rewrote description to reflect AI-assisted development workflows.
- Simplified Navbar from 7 links to 4 (Home, About, Projects, Contact) for a cleaner recruiter-first impression.

## [2026-07-04] Hero Profile Image � Premium Styling Overhaul
- Implemented a 5-layer design system for HeroImage: high-quality circular image, rotating conic-gradient border, soft outer glow, glassmorphism decorative shapes, and animated accents.
- Ensured animations run smoothly with framer-motion and are overflow-safe.

## [2026-07-04] Refine Hero Profile Image Design
- Removed all outer floating decorative elements (blobs, particles, dots, code brackets) to establish a perfectly clean and professional look.
- Updated the conic-gradient border color from blue-heavy to a premium Purple -> Violet -> Indigo gradient, matching the site's primary theme.
- Removed unused FiCode import to ensure clean code.

## [2026-07-04] SMIT Education Update
- Updated the SMIT AI-Driven course in Education section: Replaced JavaScript with TypeScript.
- Added React Native back into the stack under the 'Mobile App Development' module.
- Rewrote the course description to accurately reflect that the web development track is completed and mobile app development is currently in progress.

## [2026-07-04] Hero Image Border Color Update
- Updated the animated border gradient and outer glow of the Hero profile image from purple/indigo to a clean, minimalist white/monochrome styling.

## [2026-07-04] Hero Section Cleanup
- Removed the statistics block (5+ Years Experience, etc.) and the 'Scroll Down' indicator from the Hero section to maintain a cleaner aesthetic.

## [2026-07-04] Premium Floating Capsule Navbar
- Completely rewrote Navbar with a transparent glassmorphism design (rgba(5,8,22,0.45) base).
- Backdrop blur upgrades on scroll (16px -> 28px) with deeper shadow and border.
- Active link uses layoutId 'activeNavPill' for smooth Spring-animated pill indicator.
- Mobile menu revamped with ambient purple/cyan glow orbs and staggered item entry.

## [2026-07-04] UI and Education Updates
- Added cursor-pointer to all interactive cards across the application (Projects, Skills, Services, About, Contact, Education).
- Updated the Education Timeline:
  - SMIT Web Design Crash Course: updated completion year to 2025 and refined description.
  - Corvit Full Stack Web Development: updated completion year to 2025.
  - SMIT AI Driven Full Stack: updated to 2025�2026, changed status to 'Currently Enrolled', and added PostgreSQL to the stack.
- Revamped the Education Timeline UI to display the year alongside a professional status badge.

## [2026-07-04] SMIT AI-Driven Course Updates
- Added 'Cursor AI' and renamed 'AI Tools' to 'AI Development Tools' in the SMIT AI-Driven Education course.
- Updated the course description to highlight practical experience with modern AI tools (Google AI Studio, Cursor AI, Antigravity).

## [2026-07-04] VYBE AI Project Update
- Updated the second project card in the portfolio to feature 'VYBE AI � AI-Powered Productivity Platform'.
- Set the status to 'In Development' and applied an AI-themed gradient.
- Revamped the tech stack by replacing Node/Express/MongoDB with Next.js, Supabase, Formik, and Yup.
- Integrated various AI technologies (OpenAI, Gemini, Apify, Text-to-Speech) into the tech stack list.
- Updated deployment to Vercel.
