// Data for skills and projects (previously sourced from Prisma/DB)
window.PORTFOLIO_DATA = {
  skills: [
    // Frontend
    { id: "html", name: "HTML5", level: 100, category: "frontend", icon: "assets/HTML.svg" },
    { id: "css", name: "CSS3", level: 90, category: "frontend", icon: "assets/CSS.svg" },
    { id: "javascript", name: "JavaScript", level: 90, category: "frontend", icon: "assets/JS.svg" },
    { id: "typescript", name: "TypeScript", level: 85, category: "frontend", icon: "assets/typescript.svg" },
    { id: "react", name: "React", level: 90, category: "frontend", icon: "assets/react.svg" },
    { id: "nextjs", name: "Next.js", level: 80, category: "frontend", icon: "assets/next.svg" },
    { id: "tailwindcss", name: "Tailwind CSS", level: 90, category: "frontend", icon: "assets/Tailwind CSS.svg" },
    // Backend
    { id: "nodejs", name: "Node.js", level: 80, category: "backend", icon: "assets/Node JS.svg" },
    { id: "expressjs", name: "Express.js", level: 75, category: "backend", icon: "assets/Express JS.svg" },
    { id: "php", name: "PHP", level: 70, category: "backend", icon: "assets/php.svg" },
    { id: "laravel", name: "Laravel", level: 65, category: "backend", icon: "assets/Laravel.svg" },
    // Database
    { id: "postgresql", name: "PostgreSQL", level: 80, category: "database", icon: "assets/Postgresql.svg" },
    { id: "mongodb", name: "MongoDB", level: 70, category: "database", icon: "assets/mongoDB.svg" },
    { id: "mysql", name: "MySQL", level: 75, category: "database", icon: "assets/MySQL.svg" },
    { id: "prisma", name: "Prisma", level: 75, category: "database", icon: "assets/prisma.svg" },
    { id: "firebase", name: "Firebase", level: 85, category: "database", icon: "assets/firebase.svg" },
    // APIs & Services
    { id: "axios", name: "Axios", level: 75, category: "apis", icon: "assets/Axios.svg" },
    { id: "stripe", name: "Stripe", level: 80, category: "apis", icon: "assets/stripe.svg" },
    { id: "clerk", name: "Clerk", level: 75, category: "apis", icon: "assets/clerk.svg" },
    { id: "cloudinary", name: "Cloudinary", level: 70, category: "apis", icon: "assets/cloudinary.svg" },
    // DevOps & Tools
    { id: "docker", name: "Docker", level: 70, category: "devops", icon: "assets/docker.svg" },
    { id: "git", name: "Git", level: 90, category: "devops", icon: "assets/Git.svg" },
    { id: "github", name: "GitHub", level: 90, category: "devops", icon: "assets/github.svg" },
    { id: "vercel", name: "Vercel", level: 85, category: "devops", icon: "assets/vercel.svg" },
    { id: "vscode", name: "VS Code", level: 95, category: "devops", icon: "assets/VS Code.svg" },
    { id: "postman", name: "Postman", level: 80, category: "devops", icon: "assets/postman.svg" },
    { id: "figma", name: "Figma", level: 85, category: "devops", icon: "assets/Figma.svg" }
  ],
  projects: [
    {
      id: "eazycart",
      title: "EazyCart",
      images: ["assets/projects/project1.webp", "assets/projects/project1-2.webp", "assets/projects/project1-3.webp", "assets/projects/project1-4.webp", "assets/projects/project1-5.webp"],
      overview: "EazyCart is a full-featured, open-source multi-vendor e-commerce platform that enables multiple sellers to manage their own stores on a unified marketplace. Built with modern web technologies, it offers a seamless shopping experience for customers, comprehensive tools for vendors, and powerful admin controls for platform management.",
      features: [
        "Browse products from multiple vendors with a smart shopping cart and real-time updates",
        "Secure payments via Stripe and Cash on Delivery",
        "Order tracking, history, and coupon code support",
        "Product ratings, reviews, and multiple address management",
        "Comprehensive vendor store dashboard with product CRUD operations",
        "AI-powered product listing with OpenAI integration",
        "Sales analytics, order tracking, and inventory management",
        "Image upload with ImageKit integration",
        "Admin platform control with store approval system",
        "Coupon management, analytics, and store monitoring"
      ],
      techStacks: {
        frontend: ["Next.js 15.5", "React 19", "Tailwind CSS 4", "Redux Toolkit", "Recharts", "Lucide React", "React Hot Toast"],
        backend: ["PostgreSQL (Neon)", "Prisma", "Clerk", "Stripe", "OpenAI", "Inngest"],
        tools: ["ImageKit", "Axios", "date-fns"]
      },
      challenges: [
        "Building a scalable multi-vendor architecture with isolated store management",
        "Integrating Stripe payments alongside Cash on Delivery workflows",
        "Implementing AI-powered product listings with OpenAI",
        "Managing background jobs and data consistency with Inngest and Prisma"
      ],
      futurePlans: [
        "Add advanced vendor analytics and reporting dashboards",
        "Implement multi-currency and multi-language support",
        "Introduce AI-driven product recommendations for customers"
      ],
      demoUrl: "https://geteazycart.vercel.app",
      githubUrl: "https://github.com/Purab2001/EazyCart"
    },
    {
      id: "ascendai",
      title: "AscendAI",
      images: ["assets/projects/project2.webp", "assets/projects/project2-2.webp", "assets/projects/project2-3.webp", "assets/projects/project2-4.webp", "assets/projects/project2-5.webp"],
      overview: "AscendAI is a comprehensive AI-powered platform that streamlines content creation workflows. From generating blog posts and titles to creating stunning images and analyzing resumes, AscendAI empowers creators with cutting-edge artificial intelligence tools. Built with modern web technologies and featuring a freemium model with Clerk-powered subscription management.",
      features: [
        "AI Article Generator with customizable length",
        "SEO-friendly blog title generation with smart prompts",
        "AI image generation from text descriptions",
        "One-click background removal and intelligent object removal",
        "Community gallery to share and discover AI-generated art",
        "AI-powered resume review with constructive feedback",
        "Freemium model with 10 free generations per month",
        "Pro plan with unlimited access and Stripe-integrated pricing",
        "Clerk-powered authentication and subscription management",
        "Usage tracking and creation history"
      ],
      techStacks: {
        frontend: ["React 19.1", "Vite 7.1", "Tailwind CSS 4.1", "Clerk React", "React Router 7.9", "React Markdown", "Lucide React", "React Hot Toast"],
        backend: ["Express 5.1", "OpenAI (Gemini API)", "Cloudinary", "Neon PostgreSQL", "Clerk Express", "PDF Parse", "Multer"],
        tools: ["Axios", "CORS", "dotenv"]
      },
      challenges: [
        "Integrating multiple AI services for text, image, and document analysis",
        "Building a freemium model with usage limits and Clerk subscriptions",
        "Handling file uploads and PDF parsing for resume analysis",
        "Optimizing image generation and transformation via Cloudinary"
      ],
      futurePlans: [
        "Expand AI toolset with more content generation features",
        "Add team collaboration and shared workspaces",
        "Introduce advanced analytics for content performance"
      ],
      demoUrl: "https://ascend-ai-2025.vercel.app",
      githubUrl: "https://github.com/Purab2001/AscendAI"
    },
    {
      id: "paynode",
      title: "Paynode",
      images: ["assets/projects/project3.webp", "assets/projects/project3-2.webp", "assets/projects/project3-3.webp", "assets/projects/project3-4.webp", "assets/projects/project3-5.webp"],
      overview: "Paynode is a modern, full-stack employee management and payroll platform designed to streamline HR operations, automate payroll, and deliver real-time analytics. It empowers organizations with secure authentication, role-based dashboards, and seamless payment processing.",
      features: [
        "Role-based dashboards for Admin, HR, and Employees",
        "Secure authentication with email/password and Google sign-in",
        "Role-based route protection and access control",
        "Employee management and payroll automation",
        "Stripe integration for secure payment processing",
        "Real-time chat and instant messaging",
        "Service catalog with detailed pages and categorization",
        "Interactive charts and dashboard analytics",
        "Responsive UI with Tailwind CSS and Lottie animations",
        "Booking history and payment records for employees",
        "Custom notifications and beautiful alerts"
      ],
      techStacks: {
        frontend: ["React", "Vite", "React Router", "Tailwind CSS", "Lottie", "React Query", "SweetAlert2", "React Hot Toast"],
        backend: ["Node.js", "Express", "React", "Firebase Admin", "Stripe"],
        tools: ["ESLint", "Axios", "CORS", "dotenv"]
      },
      challenges: [
        "Implementing secure role-based authentication and route protection across multiple user types",
        "Integrating Stripe payment processing with real-time payroll calculations",
        "Optimizing React queries for large employee datasets and payroll records",
        "Ensuring data consistency across different user dashboards and access levels"
      ],
      futurePlans: [
        "Implement advanced reporting and analytics dashboard",
        "Add multi-language support for international companies",
        "Implement AI-powered payroll insights and recommendations"
      ],
      demoUrl: "http://paynode-2025.web.app",
      githubUrl: "https://github.com/Purab2001/Paynode_client"
    }
  ]
};
