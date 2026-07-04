# Coding Guidelines

## Naming Conventions
- React Components: PascalCase (e.g., `ProjectCard.jsx`)
- Hooks: camelCase, prefixed with `use` (e.g., `useScroll.js`)
- Utility functions: camelCase (e.g., `formatDate.js`)
- CSS Classes: lowercase, kebab-case (via Tailwind)

## Component Structure
- Keep components small and focused.
- Extract complex logic into custom hooks.
- Use PropTypes or TypeScript for prop validation (using standard JS for this project).

## Comments
- Explain *why* a piece of logic exists, not *what* it does (unless it's highly complex).
- Document all reusable UI components.
