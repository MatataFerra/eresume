/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        blue: '#5EDCE1',
        yellow: '#FDF0A2',
        red: '#E78A88',
        green: '#A2E8A2',
        white: '#FEFEFE',
        black: '#363636',
        gray: '#6E6E6E',
        chakra: '#319795',
        tailwind: '#38B2AC',
        next: '#000000',
        react: '#61DAFB',
        mongo: '#47A248',
        material: '#0081CB',
        sass: '#CD679A',
        svelte: '#FF3E00',
        vue: '#4FC08D',
        factory: '#ED1965',
        strategy: '#ED1965',
        vitest: '#6E9F18',
        typescript: '#3178C6',
        redux: '#764ABC',
        express: '#000000',
        node: '#339933',
        javascript: '#F7DF1E',
        vitest: '#6E9F18',
        vtex: '#E60014',
        nextauth: '#B327E2',
        cloudinary: '#1E8CBE',
        mapbox: '#3BB2D0',
        jwt: '#D63AFF'
      },

      fontFamily: {
        fira: ['Fira Code', 'monospace'],
        sofia: ['Sofia', 'sans-serif'],
        space: ['Space Mono', 'monospace']
      }
    }
  },
  plugins: []
};
