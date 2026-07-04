# Technical Decisions

## Why Vite?
Vite provides a significantly faster development experience compared to CRA, with instant HMR and optimized builds.

## Why Tailwind CSS?
Utility-first CSS allows for rapid UI development while maintaining strict adherence to the design system (colors, spacing, typography).

## Why Framer Motion?
It offers declarative and powerful animation capabilities for React, perfect for the premium scroll and hover effects required.

## Why use TbBrandVscode instead of SiVscode?
`SiVscode` is not exported by the version of `react-icons/si` installed in this project. The Tabler Icons pack (`react-icons/tb`) provides `TbBrandVscode` which is verified to resolve correctly at runtime.

**Trade-off**: Requires a second icon family import. Acceptable since it avoids a runtime crash.

---

## Why use SiCss instead of SiCss3?
`SiCss3` was removed from Simple Icons (the upstream data source for `react-icons/si`). Simple Icons renamed the entry to `css` without the version suffix, so the correct React Icons export is now `SiCss`.

**Validation**: Confirmed at runtime via `node -e` check against the installed package.

---

## Why use Environment Variables?
Environment variables (`.env`) are used to store configuration data like social media URLs (e.g., `VITE_LINKEDIN_URL`, `VITE_GITHUB_URL`) outside the source code. This makes the codebase cleaner, easier to configure across different environments, and avoids hardcoding personal information in components.

---

## Why Minimal Hero CTAs?
To maintain a premium, uncluttered aesthetic, the Hero section was reduced to a single primary Call-To-Action ("Download Resume"). Redundant buttons like "Contact Me" were removed since the Contact section is easily accessible via the sticky navigation menu, preventing cognitive overload and focusing the user's attention.

---

## Why Remove Socials from the Contact Section?
The Contact section is strictly focused on direct lines of communication (Email, Phone, Location) and a functional form. Social media buttons ("Connect With Me", "View My Codebase") were removed to eliminate visual clutter and avoid competing with the primary goal of the section: encouraging the user to send a direct message. Social links are still accessible globally via the Footer.

---

## Why a Custom Typewriter Hook?
Instead of installing an external dependency like `react-type-animation`, a custom `TypewriterEffect` component using React hooks was implemented. This keeps the bundle size small, avoids potential version conflicts or installation failures, and maintains strict control over the animation loop logic.

---

## Why Abstract Formspree Logic?
Integrating Formspree through `VITE_FORMSPREE_ENDPOINT` ensures that the form submission URL is never hardcoded into the component. This makes the component fully reusable and allows the URL to be safely swapped for different environments (e.g. staging vs. production) without touching the code. Built-in validation, loading spinners, and explicit error handling were added to ensure a production-ready UX.

---

## Why Extract the Logo into a Component?
Extracting the Navbar brand into `src/components/ui/Logo.jsx` makes the navigation code much cleaner and abstracts the complex Framer Motion hover/entrance animation logic. Using `react-icons/fi` (`< />` icon) alongside "MSF" solidifies the user's professional developer identity better than plain text.

---

## Why a Circular Hero Image on the Right?
The two-column layout (text left, image right) is the industry standard for developer portfolios as it guides the user's eyes naturally from the value proposition (text) to the personal identity (image). Using a perfectly circular image (`aspect-square` with `rounded-full`) creates a softer, more modern aesthetic that perfectly complements the glowing particle rings and glassmorphism styling without feeling rigidly boxed.

---

## Why Enforce React Router v7 Future Flags?
Even when using React Router `v6.x.x`, the library outputs console deprecation warnings regarding upcoming v7 core architectural changes (`startTransition` state wrapping and `relativeSplatPath` resolution). Explicitly passing `future={{ v7_startTransition: true, v7_relativeSplatPath: true }}` to the `<BrowserRouter>` immediately aligns the project with these upcoming standards, completely eliminating console bloat and ensuring zero breaking changes when eventually migrating to v7.

---

## Why Extract Project Data to `projects.js`?
Hardcoding project info inside components violates the separation of concerns principle. A standalone `src/constants/projects.js` file means:
- Content updates (new projects, live URLs, tech stacks) require zero component changes.
- The `ProjectCard` component becomes purely presentational and fully reusable.
- Adding a "Projects" CMS or API in the future is trivial — just swap the import source.

## Why Read GitHub URL from `.env` in Projects?
Using `import.meta.env.VITE_GITHUB_URL` in `projects.js` ensures the GitHub profile URL is defined in one place (`.env`) and propagated everywhere — Navbar, Footer, Contact, and now project source code links — without any risk of stale hardcoded values across the codebase.

---

## Why Centralize Skills Data?
Similar to the `projects.js` refactoring, extracting the skills data array into `src/constants/skills.jsx` removes business/content logic from `Skills.jsx`. The UI component is now strictly responsible for layout and animation logic, adhering to standard React separation of concerns.



## Mobile Responsiveness Overhaul
- **Decision:** Hero Mobile Priority. **Reason:** The user requested that the profile image appear first on mobile to immediately establish identity. We achieved this via Tailwind CSS order-1 and order-2 grid manipulation without breaking the desktop layout.
- **Decision:** Full-screen Mobile Menu. **Reason:** A standard dropdown lacked the premium feel requested. Switching to a ixed inset-0 framer-motion overlay locks body scrolling and feels more app-like.

## Critical UI Fixes
- **overflow-x:clip vs hidden**: Used clip instead of hidden to prevent the body from creating a new stacking context which would break sticky Navbar positioning.
- **CSS background animation**: Chose pure CSS keyframe animation over Framer Motion for the line-grid because CSS animations run on the compositor thread and never block the JS thread, guaranteeing 60fps.
- **x-axis parallax removed from HeroImage**: The x-axis motion value pushed the image outside the scroll container at viewport edges on small screens; y-axis only is sufficient for the parallax depth effect.

## Hero & Nav Enhancement
- **Conic-gradient ring over CSS border-image**: conic-gradient is animated via rotate transform (GPU), giving a true glowing sweep effect that a static border-image cannot.
- **Navbar 4 links**: Research shows recruiters scan portfolios in under 90 seconds. A minimal nav (Home, About, Projects, Contact) maps directly to the recruiter's mental model � who is this person, what have they built, how do I reach them.
- **No React Native in Education**: Removed the separate Mobile Development group since React Native isn't listed as a primary skill; updated description to keep it accurate.

## Hero Profile Image Overhaul
- **5-Layer Architecture**: Used a layered approach to achieve depth and premium feel. Layer 1: Image, Layer 2: Conic Gradient Border, Layer 3: Outer Glow, Layer 4: Glassmorphism Blobs, Layer 5: Accents (Code bracket, dots, particles).
- **Conic Gradient with Mask**: Used conic-gradient and WebkitMask to create the thin rotating gradient border efficiently.

## Refine Hero Profile Image Design
- **Simplification**: Stripped away Layers 4 and 5 (the floating outer glass shapes and glowing particles) because they distracted from the subject and felt too busy. The image itself, with its high-quality glowing border, now anchors the Hero section powerfully and cleanly.
- **Color Coordination**: Shifted the border gradient to strictly adhere to the brand palette (Purple/Violet/Indigo), completely eliminating the bright 'cyan/blue' that clashed with the user's intended aesthetic.

## SMIT Education Update
- **Curriculum Accuracy**: Swapped JavaScript for TypeScript to better reflect the advanced nature of the course. Reinstated the 'Mobile App Development' category since React Native is actively being learned.

## Hero Section Cleanup
- **Simplification**: Removed the statistical milestones and scroll indicator to focus entirely on the core introduction, resulting in a significantly cleaner first impression.

## UX and Content Improvements
- **Interactive Feedback**: Enforced cursor-pointer on all glass cards to give users immediate feedback that the items are interactive or contain hover states.
- **Education Accuracy**: Realigned the timeline dates to 2025-2026 and combined the year text with the status badge for a cleaner, unified UI presentation.

## SMIT Course Update
- **Content Accuracy**: Updated the AI tools list to include Cursor AI and revised the description to properly highlight hands-on experience with modern AI development tools in a production environment.

## VYBE AI Tech Stack Revision
- **Architecture Update**: Swapped out the old Node/Express backend for a modern Next.js + Supabase architecture in the VYBE AI project description, reflecting current AI integration paradigms.
