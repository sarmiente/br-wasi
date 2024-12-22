import { defineConfig } from 'vite';

export default defineConfig({
    
    build: {
        outDir: 'dist',
    },
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    optimizeDeps: {
        include: ['react-compiler-runtime'],
    },
});