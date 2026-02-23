// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import astroLlmsTxt from '@4hse/astro-llms-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://ender.jimscope.com',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    astroLlmsTxt({
      title: 'Ender SMS Gateway',
      description: 'Documentation for Ender - self-hosted SMS gateway platform',
      mainSelector: 'main',
      ignoreSelectors: ['nav', 'footer', 'aside', '.sidebar'],
      docSet: [
        {
          title: 'Full Documentation',
          description: 'Complete documentation in Markdown format',
          url: '/llms-full.txt',
          include: ['**/*'],
          onlyStructure: false,
        },
        {
          title: 'Compact Documentation',
          description: 'Structure and headings only',
          url: '/llms-small.txt',
          include: ['**/*'],
          onlyStructure: true,
        },
      ],
    }),
  ],
});