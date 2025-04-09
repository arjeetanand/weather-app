import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss(),  // 👈 use this, NOT 'tailwindcss' directly
    autoprefixer()
  ],
};
