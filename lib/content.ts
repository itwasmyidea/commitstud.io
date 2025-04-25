// Site metadata
export const siteMetadata = {
  title: "CommitStudio — AI-Powered Git Commit Reviews",
  description: "Automate your code reviews with CommitStudio. Get instant AI-powered feedback on every commit directly in your terminal and GitHub pull requests. Improve code quality and save developer time.",
  keywords: "git, commit, code review, AI, automation, developer tools, code quality, GitHub, pull request, commit message, yolo mode, terminal, CLI, static analysis, productivity",
  generator: "commitstudio.com",
  applicationName: "CommitStudio",
  author: { name: "Ali Geramy", url: "https://github.com/aligeramy" },
  creator: "Ali Geramy",
  publisher: "CommitStudio",
};

// Navigation items
export const navItems = [
  { label: "Docs", href: "https://docs.commitstud.io" },
  { label: "Features", id: "feature-grid" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Testimonials", id: "testimonials" },
];

// Hero section content
export const heroContent = {
  title: ["Code", "review", "at", "the", "speed", "of", "thought"],
  description: "Transform every commit into actionable insights with AI-powered reviews—right from your terminal.",
};

// How It Works steps
export const howItWorksSteps = [
  {
    title: "Install",
    description: "Get started in seconds with a single npm command.",
    code: "npm install -g commitstudio",
  },
  {
    title: "Run",
    description: "Launch CommitStudio in any Git repo directory.",
    code: "commitstudio",
  },
  {
    title: "Review",
    description: "AI analyzes your commits and delivers context-aware feedback.",
    details: [
      "Automatically detects your Git repository and target commits",
      "Analyzes diffs using advanced AI models",
      "Identifies bugs, security issues, and style inconsistencies"
    ],
  },
];

// Testimonials data
export const testimonials = [
  {
    quote: "CommitStudio has completely transformed our code review process. The AI-powered suggestions are spot on and have helped us catch issues we would have missed.",
    author: "Sarah Chen",
    role: "Lead Developer",
    company: "TechScale Inc.",
    rating: 5,
  },
  {
    quote: "The integration with our GitHub workflow is seamless. Our team's productivity has increased dramatically since we started using CommitStudio.",
    author: "James Rodriguez",
    role: "Engineering Manager",
    company: "Flux Systems",
    rating: 5,
  },
  {
    quote: "I was skeptical about AI code reviews, but CommitStudio has proven its value. The contextual understanding of our codebase is impressive.",
    author: "Aditya Patel",
    role: "Senior Engineer",
    company: "DataFlow",
    rating: 4,
  },
  {
    quote: "We've reduced our PR review time by 40% and improved our code quality significantly. Our entire team loves using CommitStudio daily.",
    author: "Emma Wilson",
    role: "CTO",
    company: "Quantum Stack",
    rating: 5,
  },
  {
    quote: "The CLI integration is perfect for our workflow. The suggestions are relevant and have helped our junior devs improve faster than traditional mentoring alone.",
    author: "Michael Torres",
    role: "Tech Lead",
    company: "Nexus Labs",
    rating: 5,
  },
  {
    quote: "CommitStudio has become an essential part of our development process. The insights it provides have improved our code structure and consistency.",
    author: "Olivia Kim",
    role: "Frontend Developer",
    company: "Pixel Perfect",
    rating: 4,
  },
  {
    quote: "Finding bugs before they hit production has saved us countless hours of debugging. CommitStudio feels like having an expert reviewer always available.",
    author: "Daniel Johnson",
    role: "Backend Developer",
    company: "Serverless Solutions",
    rating: 5,
  },
  {
    quote: "Our team's code quality metrics have improved by 35% since implementing CommitStudio. It's been a game-changer for maintaining our standards.",
    author: "Sophia Martinez",
    role: "DevOps Manager",
    company: "CloudScale",
    rating: 5,
  },
  {
    quote: "As a team lead, I appreciate how CommitStudio helps maintain consistency across different contributors. It's like having a style guide that's actually followed.",
    author: "Alex Taylor",
    role: "Team Lead",
    company: "FinTech Solutions",
    rating: 4,
  },
  {
    quote: "The ability to catch potential security vulnerabilities before they're merged has been invaluable. Our security team is equally impressed with the results.",
    author: "Nadia Rahman",
    role: "Security Engineer",
    company: "SecureStack",
    rating: 5,
  },
];

// Analytics card data
export const analyticsCardData = {
  header: {
    title: "Performance Impact",
    subtitle: "After using CommitStudio for 3 months",
  },
  metrics: [
    { label: "Commits Reviewed", value: "1,340+" },
    { label: "Issues Fixed", value: "3,762" },
  ],
  detailCards: [
    {
      title: "Clarity Improvement",
      value: "94%",
      description: "Unclear commits caught before production",
      comparison: "+46%",
      metric: "Improved clarity",
    },
  ],
};

// Package installer configs
export const packageManagers = {
  npm: {
    global: "npm install -g commitstudio",
    local: "npm install commitstudio",
  },
  pnpm: {
    global: "pnpm add -g commitstudio",
    local: "pnpm add commitstudio",
  },
  bun: {
    global: "bun add -g commitstudio",
    local: "bun add commitstudio",
  },
};

// Footer links
export const footerLinks = [
  { label: "Terms", type: "terms" },
  { label: "Privacy", type: "privacy" },
  { label: "License", type: "license" },
];

// Footer copyright text
export const footerCopyright = {
  prefix: "CommitStudio – ",
  company: {
    name: "SofTx Innovations Inc.",
    url: "https://softx.ca"
  },
  suffix: "Proudly Developed by"
};

// Resource links for footer
export const resourceLinks = [
  { 
    label: "GitHub", 
    url: "https://github.com/itwasmyidea",
    icon: "Github" 
  },
  { 
    label: "npm", 
    url: "https://www.npmjs.com/package/commitstudio",
    icon: "ExternalLink" 
  },
  { 
    label: "Changelog", 
    url: "https://github.com/itwasmyidea/commitstudio/blob/main/CHANGELOG.md",
    icon: "ExternalLink" 
  }
];

// Company links for footer
export const companyLinks = [
  { 
    label: "About", 
    url: "https://docs.commitstud.io",
    icon: null 
  },
  { 
    label: "SofTx Innovations", 
    url: "https://softx.ca",
    icon: null 
  },
  { 
    label: "X", 
    url: "https://x.com/GitCommitStudio",
    icon: null 
  }
];

// Legal content
export const legalContent = {
  terms: [
    {
      title: "1. Terms of Use",
      content:
        "By accessing and using CommitStudio, you agree to these Terms of Service. CommitStudio provides AI-powered code review for Git commits.",
    },
    {
      title: "2. User Accounts",
      content:
        "Some features require GitHub authentication. You are responsible for your account credentials and activities.",
    },
    {
      title: "3. Acceptable Use",
      content: "You agree not to use CommitStudio to:",
      list: [
        "Violate any laws or regulations",
        "Infringe third-party intellectual property",
        "Distribute malware or harmful code",
        "Exploit or harm vulnerable users",
      ],
    },
    {
      title: "4. AI Analysis Disclaimer",
      content:
        "CommitStudio uses AI to suggest improvements. While suggestions aim for accuracy, we do not guarantee they are optimal for every use case.",
    },
    {
      title: "5. Termination",
      content:
        "We may suspend or terminate access for violations of these terms at our discretion.",
    },
    {
      title: "6. Changes to Terms",
      content:
        "We may update these terms periodically. Continued use constitutes acceptance of changes.",
    },
  ],
  privacy: [
    {
      title: "1. Information We Collect",
      content: "We collect:",
      list: [
        "Git commit metadata",
        "Code diffs for analysis",
        "Usage and analytics data",
      ],
    },
    {
      title: "2. How We Use Your Data",
      content:
        "To power AI reviews, improve the service, and communicate with you about CommitStudio.",
    },
    {
      title: "3. Data Security",
      content:
        "Your code is processed securely and not shared except as described here.",
    },
    {
      title: "4. Data Retention",
      content:
        "We retain your data while your account is active or as needed to provide the service. You may request deletion at any time.",
    },
    {
      title: "5. Cookies",
      content:
        "We use cookies to remember preferences and collect usage metrics.",
    },
    {
      title: "6. Third-Party Services",
      content:
        "We may use third-party tools for analytics, hosting, and related functions—all subject to their own policies.",
    },
  ],
  license: {
    mitLicense: {
      title: "MIT License",
      copyright: "Copyright (c) 2023-2025 CommitStudio",
      terms: [
        "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction...",
        "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.",
        "THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND..."
      ],
    },
    dependencies:
      "CommitStudio uses open-source libraries under their respective licenses. See our repository for full details.",
  },
};

// Feature grid content
export const featureGridItems = [
  {
    content: "Instant AI Reviews. Transform every commit into actionable code feedback—no manual pull-requests needed.",
  },
  {
    content: "GitHub Repo Detection. Simply authenticate once, select your repo, and post comments back to GitHub with a single command.",
  },
  {
    content: "Intuitive Commit Caching. Skip duplicate analyses by caching reviewed commits—stay fast, stay focused.",
  },
];

// Documentation section content
export const documentationItems = [
  {
    title: "Quick Start Guide",
    description: "Get up and running with CommitStudio in under 5 minutes with our step-by-step quickstart guide.",
    link: "https://docs.commitstud.io/docs/1-getting-started/quick-start",
    external: true,
    icon: "BookOpen"
  },
  {
    title: "Standard Mode",
    description: "Learn how to use CommitStudio's standard mode for thorough AI-powered code reviews.",
    link: "https://docs.commitstud.io/docs/2-usage/standard-mode",
    external: true,
    icon: "Code"
  },
  {
    title: "YOLO Mode",
    description: "Explore YOLO mode for automated commit message improvements and streamlined workflows.",
    link: "https://docs.commitstud.io/docs/2-usage/yolo-mode",
    external: true,
    icon: "Terminal"
  },
  {
    title: "Configuration Options",
    description: "Learn how to customize CommitStudio's behavior for your specific project needs.",
    link: "https://docs.commitstud.io/docs/3-configuration/options",
    external: true,
    icon: "FileText"
  },
  {
    title: "FAQ",
    description: "Find answers to frequently asked questions about using CommitStudio.",
    link: "https://docs.commitstud.io/docs/6-troubleshooting/faq",
    external: true,
    icon: "HelpCircle"
  },
  {
    title: "Common Issues",
    description: "Solutions for common problems you might encounter when using CommitStudio.",
    link: "https://docs.commitstud.io/docs/6-troubleshooting/common-issues",
    external: true,
    icon: "AlertCircle"
  }
];
