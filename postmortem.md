# Postmortem: TypeScript Migration & Dependency Update

## Summary
The project was successfully migrated from JavaScript/React 18 to TypeScript/React 19 (rc). All dependencies were updated to their latest stable versions. The build, linting, and testing pipelines are green.

## Changes Implemented
1.  **TypeScript Migration:**
    - Renamed all `.jsx` files to `.tsx` and `.js` to `.ts`.
    - Created `tsconfig.json` and `tsconfig.node.json` with strict type checking enabled.
    - Updated `vite.config.ts` to use TypeScript.

2.  **Dependency Updates:**
    - Updated `react` and `react-dom` to `^19.0.0` (via latest tag).
    - Updated `vite`, `vitest`, `eslint`, and `prettier` to latest versions.

3.  **Modern Linting Config:**
    - Migrated from legacy `.eslintrc.cjs` to modern `eslint.config.js` (Flat Config).
    - Integrated `typescript-eslint` plugin.
    - Added `globals` to fix environment variables in the new config format.

## Issues Encountered & Fixes
### 1. ESLint Configuration
- **Issue:** ESLint 9+ deprecated the `.eslintrc.*` format and the `--ext` CLI flag.
- **Error:** `ESLint couldn't find an eslint.config.(js|mjs|cjs) file.` and `Invalid option '--ext'`.
- **Fix:** Created `eslint.config.js`, removed `.eslintrc.cjs`, and updated the `lint` script in `package.json` to remove `--ext`. Installed `typescript-eslint`, `globals`, and `@eslint/js` packages for compatibility.

### 2. TypeScript null checks
- **Issue:** `ReactDOM.createRoot` expects a non-null `HTMLElement`.
- **Error:** `Argument of type 'HTMLElement | null' is not assignable to parameter of type 'Container'.`
- **Fix:** Added a non-null assertion `!` to `document.getElementById('root')!`.

### 3. Peer Dependency Warnings
- **Issue:** `npm install` showed peer dependency warnings for React 19 vs 18 libraries.
- **Resolution:** This is expected when upgrading to a Release Candidate or very new major version of React. Most libraries will update soon. The application runs correctly despite warnings.

### 4. Vite Config Type Mismatch
- **Issue:** TypeScript error "No overload matches this call" in `vite.config.ts` because the `test` property is unknown to `vite`'s `defineConfig`.
- **Error:** `Object literal may only specify known properties, and 'test' does not exist in type 'UserConfigExport'.`
- **Fix:** Switched import from `vite` to `vitest/config` to access the extended configuration types that include Vitest options.

## Future Recommendations
- Ensure all new components are written in `.tsx`.
- define explicit types for Props instead of `any`.
- Keep an eye on library updates for React 19 compatibility.
