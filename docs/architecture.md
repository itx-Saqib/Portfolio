# System Architecture

## Folder Structure
- `/src/components`: UI components separated by domain (ui, layout, sections, cards)
- `/src/pages`: Top-level route components
- `/src/hooks`: Custom React hooks
- `/src/styles`: Global CSS and Tailwind directives
- `/docs`: Project documentation

## Data Flow
- Standard unidirectional React data flow.
- Global state is currently unnecessary; component-level state and React Router for navigation will suffice.
- Static data (skills, projects) will be stored in `/src/constants`.
