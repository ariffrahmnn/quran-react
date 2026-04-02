# Quran-Web: React API 
A high-performance, Single Page Application (SPA) built to demonstrate modern React development patterns, focusing on efficient data fetching and modular architecture.

## 🎯 Main Focused
- Modular Architecture: Separation of concerns between UI Components and Data Services.
- State Management: Utilizing React Hooks (useState, useEffect) for handling asynchronous data flows.
- Dynamic Routing: Implementing client-side navigation for seamless user experience.
- Performance: Optimized API calls using Axios with a centralized instance configuration.

## ⏳ Duration
Total Development Time: 1 Day (Speedrun Learning Path).
Phase: Initial Prototype & Learning Foundation.

## 🛠️ What I Did
- Environment Setup: Initialized the project using Vite for a fast development cycle and hot module replacement.
- Service Layer Implementation: Created a dedicated services/ directory to decouple API logic from React components, mirroring backend service-repository patterns.
- REST API Integration: Consumed the equran.id public API to fetch real-time surah lists and detailed verse data.
- Global Styling: Implemented specialized Typography for Arabic scripts to ensure readability and proper line spacing (Harakat safety).
- Routing System: Configured react-router-dom to handle dynamic segments (e.g., /surat/:nomor) for deep-linking capabilities.

## 🧠 Key Concepts Learned
- Declarative UI: Understanding how React re-renders based on state changes rather than direct DOM manipulation.
- Component Lifecycle: Managing side effects and cleanup within useEffect to prevent memory leaks and infinite loops.
- Prop Drilling & Composition: Passing data effectively between parent and child components.
- Axios Interceptors & Instances: Centralizing API configurations for better maintainability.
- Conditional Rendering: Implementing "Loading" and "Error" states to provide a robust user interface.

## 🚀 Potential Future (Enhancement & Styling)
- Advanced UI/UX Overhaul: Implementing Tailwind CSS or Material UI to create a more modern, responsive, and aesthetically pleasing interface.
- Dark Mode Optimization: Adding a theme switcher to enhance readability during night-time usage.
- Typography Refinement: Integrating variable fonts and advanced CSS line-height calculations to perfectly align Arabic calligraphy with Indonesian translations.
- Animation Transitions: Utilizing Framer Motion for smooth page transitions between the surah list and verse details.
- Client-Side Caching: Implementing TanStack Query (React Query) to cache API responses, reducing server load and improving instant navigation.
