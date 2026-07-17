// Data for skills and projects (previously sourced from Prisma/DB)
window.PORTFOLIO_DATA = {
  skills: [
    { id: "html", name: "HTML", level: 100, category: "frontend", icon: "assets/HTML.svg" },
    { id: "css", name: "CSS", level: 90, category: "frontend", icon: "assets/CSS.svg" },
    { id: "javascript", name: "JavaScript", level: 90, category: "frontend", icon: "assets/JS.svg" },
    { id: "react", name: "React", level: 90, category: "frontend", icon: "assets/react.svg" },
    { id: "nextjs", name: "Next.js", level: 80, category: "frontend", icon: "assets/next.svg" },
    { id: "tailwindcss", name: "Tailwind CSS", level: 90, category: "frontend", icon: "assets/Tailwind CSS.svg" },
    { id: "nodejs", name: "Node.js", level: 80, category: "backend", icon: "assets/Node JS.svg" },
    { id: "expressjs", name: "Express.js", level: 75, category: "backend", icon: "assets/Express JS.svg" },
    { id: "mongodb", name: "MongoDB", level: 70, category: "backend", icon: "assets/mongoDB.svg" },
    { id: "axios", name: "Axios", level: 75, category: "backend", icon: "assets/Axios.svg" },
    { id: "stripe", name: "Stripe", level: 80, category: "backend", icon: "assets/stripe.svg" },
    { id: "firebase", name: "Firebase", level: 85, category: "backend", icon: "assets/Firebase.svg" },
    { id: "github", name: "GitHub", level: 90, category: "tools", icon: "assets/Github.svg" },
    { id: "docker", name: "Docker", level: 70, category: "tools", icon: "assets/docker.svg" },
    { id: "figma", name: "Figma", level: 85, category: "tools", icon: "assets/Figma.svg" },
    { id: "vscode", name: "VS Code", level: 95, category: "tools", icon: "assets/VS Code.svg" }
  ],
  projects: [
    {
      id: "paynode",
      title: "Paynode",
      images: ["assets/projects/project1.jpg", "assets/projects/project1-2.png", "assets/projects/project1-3.png", "assets/projects/project1-4.png", "assets/projects/project1-5.png"],
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
    },
    {
      id: "repair-right",
      title: "RepairRight",
      images: ["assets/projects/project2.png", "assets/projects/project2-2.png", "assets/projects/project2-3.png", "assets/projects/project2-4.png", "assets/projects/project2-5.png"],
      overview: "RepairRight is a comprehensive, full-stack home repair and service booking platform that connects homeowners with trusted professionals. It offers seamless booking, management, and tracking of home repair services with real-time updates and secure authentication.",
      features: [
        "Firebase Authentication with email/password and Google sign-in",
        "JWT-based API security and role-based access control",
        "Service management with CRUD operations and advanced search",
        "One-click booking and real-time status tracking",
        "Booking history for customers and providers",
        "Responsive design with dark/light theme and smooth animations",
        "Custom notifications and loading states",
        "Popular services dashboard and provider profiles",
        "SEO-friendly dynamic page titles and custom error pages"
      ],
      techStacks: {
        frontend: ["React", "Vite", "React Router", "Tailwind CSS", "DaisyUI", "Framer Motion"],
        backend: ["Node.js", "Express", "React", "Firebase Admin"],
        tools: ["ESLint", "Axios", "CORS", "dotenv"]
      },
      challenges: [
        "Implementing secure JWT authentication with Firebase integration",
        "Building responsive search and filtering for large service catalogs",
        "Ensuring smooth theme transitions and animations without performance impact",
        "Handling edge cases in booking conflicts and cancellations"
      ],
      futurePlans: [
        "Add GPS tracking for service providers",
        "Implement rating and review system for service quality",
        "Add payment gateway integration for seamless transactions",
        "Implement push notifications for booking updates"
      ],
      demoUrl: "https://repair-right-1a8c9.web.app",
      githubUrl: "https://github.com/Purab2001/RepairRight-client"
    },
    {
      id: "hobbyhub",
      title: "HobbyHub",
      images: ["assets/projects/project3.png", "assets/projects/project3-2.png", "assets/projects/project3-3.png", "assets/projects/project3-4.png", "assets/projects/project3-5.png"],
      overview: "HobbyHub is a full-stack web application that connects people through shared interests. Users can discover, join, and manage hobby groups, interact with like-minded enthusiasts, and share experiences.",
      features: [
        "Discover and join hobby groups",
        "Create and manage communities",
        "Comment, like, and interact in real time",
        "Personalized dashboard for group and profile management",
        "Responsive design with light/dark theme",
        "Smooth animations and error handling",
        "Firebase authentication and real-time database",
        "REST API for group management"
      ],
      techStacks: {
        frontend: ["React 19.1", "Vite 6.3.5", "Tailwind CSS 4.1.8", "React Router 7.6.1", "Lottie", "React Icons", "Framer Motion"],
        backend: ["Node.js/Express", "React (Atlas)", "Firebase (Auth, Hosting, Realtime DB)", "Vercel (Server deployment)"],
        tools: []
      },
      challenges: [
        "Managing state consistency between Firebase Realtime Database and React",
        "Handling complex user permissions and group management features"
      ],
      futurePlans: [
        "Implement event scheduling and calendar integration",
        "Implement location-based group discovery for local meetups"
      ],
      demoUrl: "https://hobbyhub-19bff.web.app",
      githubUrl: "https://github.com/Purab2001/HobbyHub_Client"
    }
  ]
};
