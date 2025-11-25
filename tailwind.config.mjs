/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          blue: '#0066CC',
          purple: '#7C3AED',
          teal: '#0891B2',
        },
      },
      backgroundImage: {
        'gradient-miami': 'linear-gradient(135deg, #0066CC 0%, #7C3AED 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #0891B2 0%, #0066CC 100%)',
        'gradient-sky': 'linear-gradient(180deg, #60A5FA 0%, #0066CC 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

