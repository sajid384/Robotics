# Physical AI and Humanoid Robotics Book - Docusaurus Site

This is the Docusaurus-based documentation site for "Physical AI and Humanoid Robotics: From Embodied Intelligence to Sim‑to‑Real Systems".

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:
```bash
USE_SSH=true npm run deploy
```

Not using SSH:
```bash
GH_TOKEN=<GITHUB_TOKEN> npm run deploy
```

For more details on deployment, see the [Docusaurus documentation](https://docusaurus.io/docs/deployment).

## Structure

- `docs/` - Contains all the book chapters organized by parts
- `docs/part_i/` - Part I: Physical AI Foundations & Embodied Intelligence
- `docs/part_ii/` - Part II: ROS 2 as the Robotic Nervous System
- `docs/part_iii/` - Part III: Digital Twins with Gazebo & Unity
- `docs/part_iv/` - Part IV: AI-Robot Brain using NVIDIA Isaac
- `docs/part_v/` - Part V: Vision–Language–Action (VLA) for Humanoid Control
- `sidebars.js` - Defines the sidebar navigation structure
- `docusaurus.config.js` - Main configuration file for the Docusaurus site
- `src/css/custom.css` - Custom CSS styling for the site