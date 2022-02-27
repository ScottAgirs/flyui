module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // We need this to pick up styles from the core package, since Tailwind doesn't do it on its own.
    // When installed this should reference @flyui/core in node_modules.
    "../../packages/flyui-core/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
