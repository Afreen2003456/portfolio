# Afreen Alam - Cybersecurity Portfolio

A modern, interactive portfolio website showcasing cybersecurity expertise, data analysis skills, and blockchain development experience.

## 🚀 Features

### Interactive Elements
- **Smooth Navigation**: Click-based navigation with smooth scrolling
- **Interactive Buttons**: 
  - View My Work: Scrolls to showcase section
  - Download Resume: Downloads PDF resume
  - Contact buttons: Direct phone/email/LinkedIn actions
- **3D Spline Integration**: Interactive 3D scenes
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Framer Motion Animations**: Smooth page transitions and effects

### Sections
- **Hero Section**: Introduction with animated background and call-to-action buttons
- **About**: Education, certifications, and background
- **Skills**: Technical skills with visual indicators
- **Experience**: Cybersecurity projects and tools
- **Showcase**: Interactive 3D demonstrations
- **Contact**: Multiple contact methods with interactive elements

## 🛠️ Technologies Used

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **3D Graphics**: Spline (react-spline)
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages with GitHub Actions

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/USERNAME/haaris-portfolio.git
   cd haaris-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Deployment

### Automatic Deployment with GitHub Actions

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the main branch.

#### Setup Instructions:

1. **Update package.json homepage**
   ```json
   "homepage": "https://YOUR-USERNAME.github.io/haaris-portfolio"
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set Source to "GitHub Actions"

3. **Push your changes**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

The GitHub Actions workflow will automatically:
- Install dependencies
- Build the project
- Deploy to GitHub Pages
- Make your site available at the configured URL

### Manual Deployment

You can also deploy manually using:
```bash
npm run deploy
```

## 🎯 Interactive Features

### Button Functionality

1. **Hero Section Buttons**
   - **"View My Work"**: Smoothly scrolls to the showcase section
   - **"Download Resume"**: Downloads `Afreen_Alam_Resume.pdf` from the public folder

2. **Contact Information**
   - **Phone**: Opens phone dialer with number
   - **Email**: Opens email client with pre-filled subject

3. **Navigation**
   - **Desktop**: Hover effects with smooth scrolling to sections
   - **Mobile**: Collapsible menu with the same functionality

4. **Contact Section**
   - **Contact Cards**: Click to directly contact via phone, email, or LinkedIn
   - **"Get In Touch"**: Opens email with professional inquiry template

### 3D Interactive Elements
- Mouse-responsive 3D scenes using Spline
- Real-time interaction feedback
- Professional cybersecurity visualizations

## 📄 Resume Setup

To use the resume download functionality:

1. **Add your resume** to the `public` folder as `Afreen_Alam_Resume.pdf`
2. **Or update the path** in `src/components/ui/hero-section.tsx`:
   ```typescript
   link.href = '/your-resume-filename.pdf';
   ```

## 🎨 Customization

### Updating Content
1. **Personal Information**: Update in `hero-section.tsx`
2. **Skills**: Modify `skills-section.tsx`
3. **Projects**: Update `experience-section.tsx`
4. **Contact Details**: Update in `contact-section.tsx` and `hero-section.tsx`

### Styling
- **Colors**: Modify in `tailwind.config.js`
- **Animations**: Adjust Framer Motion settings in components
- **Layout**: Update component structures

### 3D Scenes
- **Spline URLs**: Update scene URLs in Spline components
- **Interactive Elements**: Modify in `SplineScene` components

## 🔧 Scripts

- `npm start`: Start development server
- `npm run build`: Build for production
- `npm test`: Run tests
- `npm run deploy`: Deploy to GitHub Pages (manual)

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Contact

- **Email**: alamafreen93@gmail.com
- **Phone**: +91 93242 08312
- **LinkedIn**: [linkedin.com/in/afreen-alam2003](https://linkedin.com/in/afreen-alam2003)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ using React, TypeScript, and modern web technologies**
