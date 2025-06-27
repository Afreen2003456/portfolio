# Alam Afreen - Interactive 3D Portfolio

A modern, interactive portfolio website built with Next.js, featuring 3D Spline scenes, beautiful animations, and responsive design.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **3D Interactive Scenes** with Spline
- **Framer Motion** animations  
- **Responsive Design**
- **Spotlight Effects**
- **Modern UI/UX**

## 🛠️ Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- shadcn/ui
- Spline (@splinetool/react-spline)
- Framer Motion
- Lucide React (for icons)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   │   ├── card.tsx      # Card component
│   │   ├── spotlight.tsx # Spotlight effect
│   │   ├── splite.tsx    # Spline scene wrapper
│   │   └── interactive-spotlight.tsx # Interactive spotlight
│   └── demo.tsx          # Demo component with 3D scene
├── lib/                  # Utility functions
│   └── utils.ts         # cn() utility for classes
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.js       # Next.js configuration
```

## 🎨 Components Overview

### SplineScene (`components/ui/splite.tsx`)
- Lazy-loaded 3D scene component
- Suspense wrapper with loading fallback
- Integrates with Spline 3D scenes

### SplineSceneBasic (`components/demo.tsx`)
- Main demo component combining:
  - Interactive 3D scene
  - Spotlight effects
  - Responsive layout
  - Modern typography

### Card Components
- Reusable card components following shadcn/ui patterns
- Fully typed with TypeScript
- Customizable with Tailwind classes

### Spotlight Effects
- **Aceternity Spotlight**: Static SVG-based spotlight
- **Interactive Spotlight**: Mouse-tracking spotlight with Framer Motion

## 🔧 Configuration

### Tailwind CSS
- Configured with shadcn/ui design tokens
- Custom animations for spotlight effects
- Responsive breakpoints
- Dark mode support

### TypeScript
- Strict mode enabled
- Path aliases configured (`@/*`)
- Next.js plugin integration

### Spline Integration
- 3D scenes loaded from Spline cloud
- Optimized with lazy loading
- Responsive scene handling

## 🎯 Usage

### Adding New 3D Scenes
```tsx
<SplineScene 
  scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode"
  className="w-full h-full"
/>
```

### Using Spotlight Effects
```tsx
// Static spotlight
<Spotlight className="-top-40 left-0" fill="white" />

// Interactive spotlight
<InteractiveSpotlight size={300} />
```

### Adding New Components
1. Create component in `components/ui/`
2. Follow shadcn/ui patterns
3. Use `cn()` utility for className merging
4. Add proper TypeScript types

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
- Responsive typography scales
- Touch-friendly interactions

## 🎨 Customization

### Colors & Themes
Modify `tailwind.config.js` and `app/globals.css` for custom themes.

### 3D Scenes
Create your own scenes in [Spline](https://spline.design/) and replace the scene URLs.

### Animations
Customize animations in `tailwind.config.js` keyframes section.

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Other Platforms
```bash
npm run build
npm start
```

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Contact

**Alam Afreen**
- Email: [Contact Email]
- LinkedIn: [LinkedIn Profile]
- GitHub: [GitHub Profile]

---

*Built with ❤️ by Alam Afreen* 