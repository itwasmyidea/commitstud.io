/**
 * Centralized documentation content
 * This file serves as the single source of truth for technical details in documentation
 */

// Application technical settings that need to be reflected in docs
export const technicalSpecs = {
  // OpenAI configuration
  openai: {
    defaultModel: "gpt-4.1-mini", // Current default model used
    temperature: 0.3, // Default temperature for standard mode
    yoloTemperature: 0.7, // Temperature for YOLO mode
    maxTokens: 2000, // Max tokens for API calls
    availableModels: [
      "gpt-4o",
      "gpt-4.1",
      "gpt-4.1-mini",
      "gpt-4.1-nano",
      "o4-mini",
      "o3-mini",
    ],
  },
  
  // Node.js requirements
  node: {
    minVersion: "18.0.0", // Minimum Node.js version required
  },
  
  // Repository details
  repo: {
    githubUrl: "https://github.com/itwasmyidea/commitstud.io",
    homepage: "https://commitstud.io",
  },
  
  // File system paths
  paths: {
    macosCachePath: "~/Library/Preferences/commitstudio-nodejs",
    linuxCachePath: "~/.config/commitstudio",
    windowsCachePath: "%APPDATA%\\commitstudio-nodejs",
  },
  
  // Command line parameters
  cli: {
    defaultCommitsYolo: 5, // Default number of commits analyzed in YOLO mode
    defaultCommitCount: 10, // Default number of commits to analyze if not specified
    cacheDuration: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
    maxFileSize: 1024 * 1024, // 1MB in bytes
  },
  
  // File analysis
  analysis: {
    ignorePaths: [
      "node_modules/**",
      "dist/**",
      "build/**",
      "*.lock",
      "package-lock.json",
      "yarn.lock",
    ],
    analyzableExtensions: [
      ".js", ".jsx", ".ts", ".tsx", ".py", ".rb", ".java", ".go", 
      ".c", ".cpp", ".cs", ".php", ".html", ".css", ".scss", 
      ".md", ".json", ".yml", ".yaml",
    ],
    defaultPromptTemplate: "Review this code diff and provide feedback on: 1) Potential bugs or errors, 2) Code style and best practices, 3) Performance considerations, 4) Security issues.",
  },
  
  // GitHub settings
  github: {
    clientId: "Ov23liIA45phTP52foql",
    apiUrl: "https://api.github.com",
    graphqlUrl: "https://api.github.com/graphql",
  }
};

// Documentation structure and content
export const docsContent = {
  // Install commands by package manager
  installation: {
    npm: "npm install -g commitstudio",
    pnpm: "pnpm add -g commitstudio",
    npx: "npx commitstudio",
  },
  
  // Environment variables
  envVars: [
    { 
      name: "GITHUB_TOKEN", 
      required: true, 
      description: "GitHub personal access token with 'repo' scope",
    },
    { 
      name: "OPENAI_API_KEY", 
      required: true, 
      description: "OpenAI API key for access to models",
    },
    { 
      name: "GITHUB_CLIENT_ID", 
      required: false, 
      description: "GitHub OAuth Client ID for browser-based authentication flow",
    },
  ],
  
  // Feature list
  keyFeatures: [
    "Auto-detect Repository: Works with local git repositories, automatically connects to GitHub",
    "Smart Analysis: Uses OpenAI's GPT-4.1-mini model to analyze git diffs and generate insightful comments",
    "GitHub Integration: Seamlessly post comments to GitHub pull requests",
    "YOLO Mode: Rewrite your commit messages with AI to be more descriptive and professional",
    "Caching: Smart caching to avoid repeated analyses",
    "Interactive CLI: Easy-to-use command line interface with helpful prompts",
    "Secure Credentials Management: Securely handles GitHub and OpenAI API keys",
    "Parallel Processing: Efficiently processes multiple commits at once",
    "Flexible Options: Analyze specific commits, branches, or time periods",
  ],

  // Command options
  commandOptions: {
    standardMode: [
      { flag: "-p, --path <path>", description: "Path to the git repository (default: current directory)" },
      { flag: "-c, --commits <number>", description: "Number of commits to analyze (default: all)" },
      { flag: "-b, --branch <branch>", description: "Branch to analyze (default: current branch)" },
      { flag: "--since <date>", description: "Analyze commits since date (e.g., \"2023-01-01\")" },
      { flag: "--author <email>", description: "Filter commits by author email" },
      { flag: "--no-cache", description: "Ignore cache and reanalyze all commits" },
      { flag: "--dry-run", description: "Run without posting comments to GitHub" },
      { flag: "--verbose", description: "Show detailed logs" },
      { flag: "--reset", description: "Clear all saved settings and credentials" },
    ],
    yoloMode: [
      { flag: "-p, --path <path>", description: "Path to the git repository (default: current directory)" },
      { flag: "-c, --commits <number>", description: `Number of commits to analyze (default: ${technicalSpecs.cli.defaultCommitsYolo})` },
      { flag: "-b, --branch <branch>", description: "Branch to analyze (default: current branch)" },
      { flag: "--since <date>", description: "Analyze commits since date" },
      { flag: "--author <email>", description: "Filter commits by author email" },
      { flag: "--emoji", description: "Add random emoji to commit messages (default: on)" },
      { flag: "--serious", description: "Generate more professional commit messages (no emojis)" },
      { flag: "--dry-run", description: "Preview changes without applying them" },
      { flag: "--verbose", description: "Show detailed logs" },
    ],
    configMode: [
      { flag: "config", description: "Configure CommitStudio settings" },
      { flag: "config --view", description: "View current configuration" },
      { flag: "config --model <model>", description: "Set AI model to use" },
      { flag: "config --max-tokens <number>", description: "Set maximum tokens for API requests" },
    ],
  },
}; 