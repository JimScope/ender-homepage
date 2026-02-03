// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import astroLlmsTxt from '@4hse/astro-llms-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://ender-landing.com', // Cambia esto por tu dominio real
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    astroLlmsTxt({
      title: 'Ender Landing',
      description: 'Documentación del sitio Ender Landing - Sistema de envío de SMS',
      mainSelector: 'main',
      ignoreSelectors: ['nav', 'footer', 'aside', '.sidebar'],
      docSet: [
        {
          title: 'Documentación Completa',
          description: 'Toda la documentación en formato Markdown',
          url: '/llms-full.txt',
          include: ['**/*'],
          onlyStructure: false,
        },
        {
          title: 'Documentación Compacta',
          description: 'Solo estructura y títulos',
          url: '/llms-small.txt',
          include: ['**/*'],
          onlyStructure: true,
        },
      ],
    }),
  ],
});