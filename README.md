# Aarvi Industrial Materials Website

A responsive React website for Aarvi Industrial Materials, focused on insulation materials, product categories, applications, company information, careers, and contact/WhatsApp inquiry flows.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Getting Started

Install dependencies:

```powershell
npm install
```

Start the local development server:

```powershell
npm run dev
```

The site will usually be available at:

```text
http://127.0.0.1:5173/
```

## Production Build

Create an optimized production build:

```powershell
npm run build
```

The generated production files will be placed in:

```text
dist/
```

Preview the production build locally:

```powershell
npm run preview
```

Or serve the built `dist` folder with the included static server:

```powershell
npm run serve:dist
```

## Vercel Deployment

This project includes a `vercel.json` file with a rewrite rule so client-side routes like `/about`, `/products`, and individual product pages work correctly after refresh.

Recommended Vercel settings:

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

Typical deployment flow:

```powershell
git add .
git commit -m "Update Aarvi website"
git push
```

Then import the GitHub repository in Vercel or let Vercel auto-deploy from the connected repository.

## Project Structure

```text
src/
  App.tsx       Main React application, pages, layout, and components
  data.ts       Company details, product data, applications, and careers content
public/         Static assets
scripts/        Local helper scripts
dist/           Production build output
vercel.json     Vercel routing configuration
```

## Useful Commands

```powershell
npm run dev        # Start local development server
npm run build      # Type-check and build for production
npm run preview    # Preview production build locally
npm run serve:dist # Serve the built dist folder
```

