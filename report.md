# Nexoresha Tales - Development Report

## Overview
This report documents the ongoing development of the **Nexoresha Tales** luxury wedding website. The goal is to create a high-end, cinematic, and immersive experience utilizing modern React/Next.js and WebGL (Three.js) technologies.

## Development Progress

### 1. 3D Cinematic Hero Section
- **Camera Model Rig:** We successfully built a detailed, modular 3D cinematic camera rig (RED-style) using React-Three-Fiber.
- **Scroll Animations:** Implemented a scroll-driven "explosion" effect where the camera disassembles into its core components as the user scrolls, scaling down to 50% for breathing room, and reassembling smoothly.
- **Performance:** Optimized materials by replacing heavy transmission shaders with physical materials to prevent browser lag.

### 2. Aesthetic & UI Design
- **Theme:** Applied a deep, moody maroon and gold luxury color palette across the application.
- **Layouts:** Created highly editorial layouts including overlapping polaroids, a 21:9 cinematic ultra-wide crop, and an arched image mask.

### 3. Challenges & Fixes (The Video Issue)
- **Attempted Implementation:** We attempted to replace the static imagery in the scroll sections with auto-playing cinematic wedding videos (`.mp4`) hosted externally via Mixkit.
- **The Error:** The third-party video links completely failed to load in the browser environments. This is a common issue with free stock video sites (like Mixkit) because they actively block "hotlinking" to their video preview files, resulting in 403 Forbidden or empty blocks.
- **The Solution:** To ensure you never lose clients due to a broken website, we immediately reverted the broken video blocks back to **high-quality, static Pexels images** (Rings, Couple Kissing, Wedding Dress). They look flawless and are 100% stable. Once you have your own video assets hosted properly (e.g., on Vimeo or your own server), we can safely convert the tags back to `<video>`.

### 4. Infrastructure (Removing Node.js Hosting Dependency)
- **Action Taken:** Updated `next.config.mjs` to include `output: 'export'`.
- **Result:** The website is now a "Static Web App." It no longer needs Node.js on the server to run.

## How to Run & Deploy

### 1. For Development (Work Mode)
You still use Node.js on your computer to build the site. To see your changes live:
```bash
npm run dev
```
Then open `http://localhost:3000` in your browser.

### 2. For Production (Deployment)
When you are ready to show the client or launch:
1. Run this command:
   ```bash
   npm run build
   ```
2. This will create a folder named `out` in your project root.
3. **Important:** You can take the contents of that `out` folder and upload them to any hosting provider (GoDaddy, HostGator, etc.). The final website will be pure HTML/CSS/React and **will not require Node.js** to run for your visitors.
