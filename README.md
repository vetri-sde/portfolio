# Vetrivel SDE - Portfolio

A modern, responsive portfolio website showcasing professional experience, skills, certifications, and projects. Built with cutting-edge web technologies for optimal performance and user experience.

## 🎯 About the Project

This portfolio website is designed to present a professional profile with an emphasis on clean design, accessibility, and interactivity. It serves as a comprehensive platform for displaying work experience, technical skills, certifications, and notable projects to potential employers and collaborators.

**Live Demo:** [Portfolio](https://vetri-sde.github.io/portfolio/)

## ✨ Key Features

- **Professional Profile Section** - Hero section with profile image, headline, and compelling introduction
- **Skills Showcase** - Comprehensive display of technical competencies across multiple domains
- **Career Timeline** - Interactive timeline visualizing career progression and experience
- **Certifications Gallery** - Detailed certification showcase with links to verified credentials
- **Projects Portfolio** - Project grid highlighting key work with descriptions and visual elements
- **Responsive Design** - Fully responsive layout that works seamlessly across all devices
- **Dark Mode Support** - Built-in dark mode for comfortable viewing in any lighting condition
- **Resume Integration** - Quick access to downloadable resume
- **Social Links** - Direct links to LinkedIn and GitHub profiles
- **Contact CTA** - Call-to-action section encouraging potential collaborations

## 🛠 Tech Stack

### Frontend Framework & Build Tools
- **React 18.1.0** - UI library for building interactive components
- **Vite 7.1.3** - Next-generation build tool for fast development and optimized production builds
- **React Router DOM 6.23.1** - Client-side routing for multi-page navigation

### Styling & Design
- **Tailwind CSS 4.1.11** - Utility-first CSS framework for rapid UI development
- **PostCSS 8.5.6** - Tool for transforming CSS with plugins
- **Autoprefixer 10.4.21** - Adds vendor prefixes to CSS for cross-browser compatibility

### Icon Library
- **Heroicons React 2.2.0** - Beautiful hand-crafted SVG icons for React

### Build & Deployment
- **npm** - Package manager for dependency management
- **Vite** - Fast HMR (Hot Module Replacement) for rapid development
- **GitHub Pages** - Hosting and deployment platform

## 📋 Project Structure

```
vetrivelsde/
├── src/
│   ├── components/
│   │   ├── CertificationShowcase.jsx  - Main portfolio component
│   │   ├── CareerTimeline.jsx         - Career experience timeline
│   │   ├── Certifications.jsx         - Certifications display
│   │   ├── ProjectsGrid.jsx           - Projects showcase
│   │   ├── Skills.jsx                 - Technical skills section
│   │   ├── ResumeButton.jsx           - Resume download button
│   │   ├── ResumeViewer.jsx           - PDF resume viewer
│   │   ├── ImageComponent.jsx         - Image handling utilities
│   │   └── LinkedInCallback.jsx       - LinkedIn OAuth callback
│   ├── resources/                     - Images and static assets
│   ├── App.jsx                        - Main application component
│   ├── main.jsx                       - Application entry point
│   ├── style.css                      - Global styles
│   └── postcss.config.js              - PostCSS configuration
├── public/                            - Public static assets
├── vite.config.js                     - Vite build configuration
├── tailwind.config.js                 - Tailwind CSS configuration
├── package.json                       - Project dependencies and scripts
└── README.md                          - Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vetri-sde/portfolio.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will open at `http://localhost:3001` with automatic browser refresh on code changes.

### Build

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Deployment

Deploy to GitHub Pages:

```bash
npm run predeploy
npm run deploy
```

## 📄 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR on port 3001 |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Deploy to GitHub Pages |

## 🎨 Customization

### Update Profile Information

Edit the `fetchProfileDetails()` function in `src/CertificationShowcase.jsx` to update:
- Personal information (name, contact details)
- Professional headline and description
- Technical skills
- Career timeline entries
- Certifications and achievements
- Project portfolio

### Styling

Customize colors and styles through:
- **Tailwind Config** - `tailwind.config.js` for design tokens
- **Global CSS** - `src/style.css` for custom styles
- **Component Classes** - Modify className props in components

### Adding New Sections

The component-based architecture makes it easy to add new sections:
1. Create a new component in `src/`
2. Import it in `CertificationShowcase.jsx`
3. Add it to the render tree

## 📱 Features Breakdown

### CertificationShowcase
Main component that orchestrates the entire portfolio, displaying profile header, skills, experience, projects, and certifications.

### CareerTimeline
Renders an interactive timeline of professional experience with company, role, duration, and location information.

### Skills Section
Displays a comprehensive list of technical skills, organized by category or displayed as tags.

### ProjectsGrid
Grid layout showcasing notable projects with descriptions and visual indicators using Heroicons.

### Certifications
Gallery view of professional certifications with links to verification URLs and metadata.

### ResumeButton
Integration for resume download or viewing capabilities.

## 🔗 Integration Points

- **LinkedIn** - Direct link to LinkedIn profile
- **GitHub** - GitHub repository links
- **Email** - Contact form integration
- **External Resources** - Certificate verification links

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Content

The portfolio showcases:
- **Experience**: 4+ years of professional development experience
- **Skills**: 30+ technical competencies including Java, React, Spring Boot, and more
- **Certifications**: 20+ professional certifications from leading platforms
- **Projects**: 4+ portfolio projects demonstrating full-stack capabilities

## 🔒 Privacy & Security

- No sensitive data stored locally
- External links open in new tabs with security attributes
- Following best practices for web security

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Contact

**Vetrivel Dharuman**
- Email: vetriveldharuman01@gmail.com
- LinkedIn: [linkedin.com/in/vetrivel-dharuman](https://www.linkedin.com/in/vetrivel-dharuman/)
- GitHub: [github.com/vetri-sde](https://github.com/vetri-sde)

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.

---

**Made with ❤️ by Vetrivel Dharuman**