# 🌊 VibePortfolio

> A stunning, ocean-themed personal portfolio showcasing projects, experience, and skills with modern animations and interactive elements.

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20Portfolio-blue?style=for-the-badge)](https://vibeportfolio-c300af397aaf.herokuapp.com/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/Lopez-Jordan/VibePortfolio)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

## ✨ Features

- **🎨 Modern Design**: Clean, professional interface with ocean-inspired color palette
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🎭 Smooth Animations**: Engaging animations using Framer Motion and GSAP
- **🌊 Interactive Elements**: Dynamic particle effects and parallax scrolling
- **📧 Contact Integration**: Direct contact form and social media links
- **🚀 Production Ready**: Deployed on Heroku with Express.js server

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - Modern React with latest features
- **Vite** - Next generation frontend tooling
- **CSS Modules** - Scoped styling with custom animations
- **Font Awesome** - Professional icon library

### Animations & Effects
- **Framer Motion** - Production-ready motion library
- **GSAP** - Professional animation toolkit
- **React Spring** - Spring-physics based animations
- **TSParticles** - Interactive particle backgrounds
- **React Parallax Tilt** - 3D tilt effects

### Backend & Deployment
- **Express.js** - Minimal web server for production
- **Heroku** - Cloud platform deployment
- **Node.js 18.x** - JavaScript runtime

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Lopez-Jordan/VibePortfolio.git
   cd VibePortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
# Build the project
npm run build

# Preview production build locally
npm run preview

# Start production server
npm start
```

## 📁 Project Structure

```
VibePortfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   ├── components/        # React components
│   │   ├── Landing.jsx    # Hero section
│   │   ├── Projects.jsx   # Project showcase
│   │   ├── Education.jsx  # Education background
│   │   └── Experience.jsx # Work experience
│   ├── styles/           # CSS modules
│   │   ├── Landing.css
│   │   ├── Projects.css
│   │   ├── Education.css
│   │   └── Experience.css
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles
│   └── main.jsx          # Application entry point
├── dist/                 # Production build files
├── server.js             # Express server for production
├── Procfile              # Heroku deployment config
├── static.json           # Static file configuration
└── package.json          # Project dependencies
```

## 🎨 Key Components

### 🏠 Landing Section
- Hero introduction with typewriter effect
- Social media integration
- Smooth scroll navigation
- Animated profile elements

### 💼 Projects Showcase
- Interactive project cards with hover effects
- Detailed project descriptions
- Technology stack highlights
- Live demo and GitHub links

### 🎓 Education & Experience
- Timeline-style presentation
- Institution and company details
- Skill development progression
- Achievement highlights

## 🚀 Deployment

This portfolio is deployed on Heroku using an Express.js server to serve the built React application.

### Deploy to Heroku

1. **Create Heroku app**
   ```bash
   heroku create your-portfolio-name
   ```

2. **Set up environment**
   ```bash
   heroku config:set NODE_ENV=production
   ```

3. **Deploy**
   ```bash
   git push heroku main
   ```

### Environment Configuration

The application uses environment variables for deployment:
- `PORT` - Server port (automatically set by Heroku)
- `NODE_ENV` - Environment mode (production/development)

## 🎯 Performance Optimizations

- **Code Splitting**: Dynamic imports for optimal loading
- **Image Optimization**: Compressed assets for faster loading
- **Lazy Loading**: Components loaded on demand
- **Bundle Analysis**: Optimized build sizes
- **CDN Ready**: Static assets optimized for CDN delivery

## 🔧 Customization

### Colors & Theming
The ocean theme uses a carefully crafted color palette:
- Primary: `#0f1923` (Deep Ocean)
- Secondary: `#1a242e` (Midnight Blue)
- Accent: `#c4ba9d` (Sandy Gold)
- Text: `#ffffff` (Pure White)

### Animations
Customize animations in component CSS files:
- `Landing.css` - Hero section animations
- `Projects.css` - Project card interactions
- `Education.css` - Timeline animations
- `Experience.css` - Career progression effects

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Lopez-Jordan/VibePortfolio/issues).

## 📞 Contact

**Jordan Lopez**
- 🌐 Portfolio: [https://vibeportfolio-c300af397aaf.herokuapp.com/](https://vibeportfolio-c300af397aaf.herokuapp.com/)
- 📧 Email: [jordanlopezemail@gmail.com](mailto:jordanlopezemail@gmail.com)
- 💼 LinkedIn: [Connect with me](https://linkedin.com/in/jordan-lopez)
- 🐙 GitHub: [@Lopez-Jordan](https://github.com/Lopez-Jordan)

---

<div align="center">
  <p>Made with ❤️ by Jordan Lopez</p>
  <p><em>Bringing ideas to life through code</em></p>
</div>
