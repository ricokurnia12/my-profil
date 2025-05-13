// next.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './shared/**/*.{js,ts,jsx,tsx}' // Pastikan semua folder yang berisi kelas Tailwind di-cover
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  typescript: {
    // ⚠️ Only do this if absolutely necessary
    ignoreBuildErrors: true
  },
  eslint: {
    // ⚠️ Only do this if absolutely necessary
    ignoreDuringBuilds: true
  }
};
