# Gopher WEB

This project follows the [Bulletproof React](https://github.com/alan2207/bulletproof-react) architecture pattern for scalable and maintainable code organization.

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) with App Router (Turbopack)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 with custom animations
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Code Quality:** ESLint, Prettier, Husky, lint-staged
- **Architecture:** Bulletproof React pattern

## 📁 Project Structure

This project follows the Bulletproof React architecture pattern for better scalability and maintainability:

```
inventory-web/
├── app/                    # Next.js App Router pages
│   ├── solutions/         # Solutions page route
│   └── page.tsx           # Home page
├── components/            # Shared/generic components
│   ├── layouts/          # Layout components (navigation, footer)
│   └── ui/               # Reusable UI components (buttons, dropdowns, etc.)
├── features/             # Feature-based modules (Bulletproof React pattern)
│   ├── landing/         # Landing page feature
│   │   └── components/  # Landing-specific components
│   └── solutions/       # Solutions page feature
│       └── components/  # Solutions-specific components
├── config/              # App configuration
├── constants/           # App-wide constants and routes
├── hooks/               # Custom React hooks
├── lib/                 # Utility libraries
├── providers/           # React context providers
├── stores/              # State management
├── styles/              # Global styles and fonts
├── types/               # TypeScript type definitions
└── utils/               # Utility functions
```

### Bulletproof React Pattern

Each feature module in the `features/` directory is self-contained with its own:

- Components
- Hooks (if needed)
- Types (if needed)
- Utils (if needed)

This pattern promotes:

- **Separation of concerns** - Features are isolated and independent
- **Scalability** - Easy to add new features without affecting existing ones
- **Maintainability** - Clear organization makes code easier to understand
- **Reusability** - Shared components live in `components/`, feature-specific ones stay in their feature

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/arkbusiness/inventory-web.git
cd inventory-web

# Install dependencies
npm install
```

### Development

```bash
# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

The app uses Turbopack for fast refresh - changes are reflected instantly as you edit files.

### Build

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

### Code Quality

```bash
# Run ESLint
npm run lint
```

The project includes:

- **Husky** - Git hooks for pre-commit checks
- **lint-staged** - Runs linters on staged files
- **Prettier** - Code formatting
- **ESLint** - Code linting

Pre-commit hooks automatically:

- Format code with Prettier
- Lint and fix issues with ESLint

## 🎨 Styling

This project uses:

- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Re-usable components built with Radix UI and Tailwind CSS
- **Custom fonts** - Optimized font loading with `next/font`
- **Class Variance Authority** - Component variant management
- **tw-animate-css** - Additional Tailwind animations

## 📦 Key Dependencies

- `next` - React framework with App Router
- `react` & `react-dom` - React 19
- `typescript` - Type safety
- `tailwindcss` - Styling
- `shadcn/ui` - Component library (built on Radix UI)
- `lucide-react` - Icon library
- `swiper` - Touch slider
- `nextjs-toploader` - Page loading indicator

## 📝 Contributing

1. Follow the Bulletproof React pattern when adding new features
2. Keep feature-specific code in the `features/` directory
3. Place shared components in `components/`
4. Run linting before committing (automatic with Husky)
5. Write meaningful commit messages

## 📄 License

Private - ARK Business

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Bulletproof React](https://github.com/alan2207/bulletproof-react)
- [shadcn/ui](https://ui.shadcn.com/)
