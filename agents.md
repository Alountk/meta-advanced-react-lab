# AI Agent Guidelines

This document outlines the coding standards and best practices for this repository. All AI agents must adhere to these rules when generating or modifying code.

## 1. Technology Stack

- **Framework:** React 18+ (Functional Components only).
- **Build Tool:** Vite.
- **Testing:** Vitest + React Testing Library.
- **Styling:** CSS Modules or plain CSS (located in `src`).
- **Linter/Formatter:** ESLint + Prettier.

## 2. Coding Standards

### React Components

- Use **Functional Components** with Hooks. Class components are strictly forbidden.
- **Props:** Use simple prop types or JSDoc if Typescript is not enabled (currently JS-only).
- **File Structure:**
  - Place components in `src/01-components`, `src/02-hooks`, etc., corresponding to the module.
  - One component per file, named `ComponentName.jsx`.

### Hooks

- Follow the **Rules of Hooks**.
- Exhaustive dependency arrays in `useEffect`, `useCallback`, `useMemo` are mandatory.
- Custom hooks must start with `use`.

### State Management

- Prefer local state (`useState`, `useReducer`) for component-specific logic.
- Lift state up only when necessary.
- Use **Context API** for global state as per Module 1 requirements.

## 3. Testing

- **Mandatory:** Every new component or hook MUST have a corresponding test file (`.test.jsx` or `.test.js`).
- **Tools:** Use `vitest` syntax (compatible with Jest).
- **Scope:**
  - Unit test for helper functions.
  - Component test for rendering and user interaction (using `@testing-library/react`).
  - Hook testing (using `@testing-library/react`'s `renderHook` if applicable).

## 4. Quality Assurance

- **Linting:** Code must pass `npm run lint` with 0 warnings/errors.
- **Formatting:** Code must be formatted using Prettier (`npm run format`).
- **No Console Logs:** Remove `console.log` before committing, except for error logging in catch blocks.

## 5. Directory Structure

- `src/01-components/`: Module 1 exercises.
- `src/02-hooks/`: Module 2 exercises.
- `src/03-jsx-testing/`: Module 3 exercises.
- `src/04-portfolio-project/`: Final project.
