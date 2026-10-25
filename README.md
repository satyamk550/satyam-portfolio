<div align="center">

# Satyam Kumar | Portfolio

**Blockchain & software development portfolio with a cyber/Web3 visual style.**

[![Live Site](https://img.shields.io/badge/Live_Site-TODO_SITE_URL-00d4ff?style=for-the-badge)](TODO_SITE_URL)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=three.js&logoColor=white)

![Portfolio preview](docs/screenshot.png)

</div>

## About

A personal portfolio that presents my background, skills, projects, and contact details. It is a fully static site with no build step, an animated Three.js background, 3D tilt cards, and an interactive terminal where visitors can explore my work by typing commands.

## Features

- **Animated 3D background** built with Three.js
- **Interactive terminal** that responds to commands such as `help`, `skills`, `projects`, and `clear`
- **Project showcase** covering blockchain, security, and web development work
- **Skills matrix** grouped by languages, Web3, tools, and core fundamentals
- **Education timeline, certifications, and clubs** in one place
- **Responsive layout** with a mobile navigation menu
- **Downloadable resume** (`resume.pdf`)
- **Zero build tooling**: open the file and it runs

## Tech stack

| Area | Tools |
|---|---|
| Markup and styling | HTML5, CSS3 (custom properties, grid, flexbox) |
| Logic | Vanilla JavaScript |
| 3D / visuals | [Three.js](https://threejs.org/) (r128, loaded from CDN) |
| Icons | [Font Awesome](https://fontawesome.com/) 6 |
| Fonts | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) |
| Hosting | Vercel (static) |

## Getting started

No installation or build step is needed.

**Option 1: open directly**

Open `index.html` in your browser.

**Option 2: run a local server (recommended)**

```bash
# Python 3
python -m http.server 5500
```

Then visit `http://localhost:5500`.

> An internet connection is required for the hosted fonts, Font Awesome icons, and the Three.js background.

## Project structure

```text
.
├── index.html            # Homepage and all portfolio content
├── resume.pdf            # Downloadable resume
├── profile.webp          # Profile image
├── styles/
│   └── main.css          # Styles and responsive layout
├── scripts/
│   └── main.js           # Three.js background, terminal, tilt effect, mobile nav
└── docs/
    └── screenshot.png    # README preview image
```

## Customization

| What to change | Where |
|---|---|
| Name, bio, projects, skills, education | `index.html` |
| Colors, spacing, fonts | CSS variables at the top of `styles/main.css` |
| Terminal commands and replies | `scripts/main.js` |
| Resume | Replace `resume.pdf` (keep the same filename) |
| Profile photo | Replace `profile.webp` and update the `alt` text in `index.html` |

## Deployment

The site is static, so any static host works. To deploy on Vercel:

1. Push this repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Leave the build command and output directory empty. `index.html` must be at the project root.
4. Deploy.

GitHub Pages and Netlify work the same way.

## Contact

**Satyam Kumar**, B.Tech in Blockchain Technology, CGC University

- Email: [satyamkumar42143@gmail.com](mailto:satyamkumar42143@gmail.com)
- GitHub: [@satyamk550](https://github.com/satyamk550)
- LinkedIn: [satyamkumar-dev](https://www.linkedin.com/in/satyamkumar-dev/)

## License

TODO_CHOOSE_LICENSE (for example, MIT)

Note: the license covers the code only. My photo, resume, and personal content are not licensed for reuse.

---

<div align="center">

Designed and built by Satyam Kumar

</div>
