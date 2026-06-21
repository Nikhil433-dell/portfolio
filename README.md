# Nikhil Jangir - Personal Portfolio

A sleek, premium, dark-mode portfolio website showcasing your experience, publications, projects, and skills. Built with pure HTML5, modern semantic Vanilla CSS3, and interactive Vanilla JavaScript (no build step, super-fast loading, fully responsive).

## Features
- **Sleek Dark Mode Theme**: Dark indigo/space backdrop with vibrant cyan, violet, and pink neon gradient accents.
- **Glassmorphism Design**: High-end frosted glass elements with subtle borders and card layout styling.
- **Pointer Spotlight Glow**: Interactive mouse-tracking radial glow that moves behind your layout and highlights elements dynamically.
- **Chronological Experience Timeline**: Clean interactive timeline detailing your internship and developer positions.
- **Academic Research Spotlight**: Special section highlighting your co-authored VR psychology publication.
- **Micro-Animations**: Smooth scroll-reveal transitions, floating assets, pulse indicators, and hover highlights.
- **Responsive Layout**: Designed to look stunning on desktops, laptops, tablets, and smartphones.

## File Structure
- `index.html`: Web page markup and content structure.
- `style.css`: Modern responsive design, layout styling, theme variables, and keyframe animations.
- `app.js`: Interactive elements, mobile menu toggler, sticky nav, card mouse hover trackers, and Intersection Observer scroll-reveals.
- `assets/hero_art.jpg`: Premium digital hero illustration generated specifically to match your visual aesthetic.

## How to View Locally
You can open this website in any web browser without compiling or installing anything.

### Option 1: Direct File Open
Simply double-click the `index.html` file in your file explorer to open it directly in Safari, Chrome, Edge, or Firefox.

### Option 2: Local Static Server (Recommended)
If you want to run it via a local development server with live reloading, run the following command in your terminal from this directory:
```bash
npx -y http-server .
```
Then visit `http://127.0.0.1:8080` in your web browser.

## Deployment Instructions

### GitHub Pages (Free Hosting)
Since this is a static site, you can host it for free on GitHub Pages in under a minute:
1. Push this `portfolio` directory's files to a new repository on your GitHub account (e.g. `github.com/Nikhil433-dell/portfolio`).
2. Go to your repository settings on GitHub.
3. In the left-hand menu, click **Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose your branch (usually `main`) and root folder `/ (root)`, then click **Save**.
6. GitHub will generate your live link (e.g., `https://nikhil433-dell.github.io/portfolio/`).

### Vercel / Netlify
You can also connect your GitHub repository directly to Vercel or Netlify. Since there is no build step required, simply set the build command to empty and publish!

## Customization Tips
- **Contact Form**: The contact form is currently set up with a static placeholder alert. To make it functional, sign up for a free form handler at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com), copy your unique endpoint URL, and replace the `action="..."` attribute on the `<form>` tag in `index.html` (around line 424).
- **CV Download**: If you generate an HTML or PDF resume through the `career-ops` system, you can rename/copy it into this folder (e.g., `assets/Nikhil_Jangir_CV.pdf`) and link it to the "Get in touch" or create a "Download CV" button.
