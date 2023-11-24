// vite.config.js
import ReactRefresh from '@vitejs/plugin-react-refresh';

export default {
  plugins: [ReactRefresh()],
  build: {
    rollupOptions: {
      input: {
        main: './src/index.jsx', // Adjust the path accordingly
      },
    },
  },
};
