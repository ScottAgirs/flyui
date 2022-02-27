# Getting Started

- `yarn add @flyui/core@latest`
- install Tailwind
- add tailwind.config.js:
```
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '@flyui/core/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```