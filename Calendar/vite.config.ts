/// <reference types="vitest" />
import { defineConfig } from 'vite';

import autoprefixer from "autoprefixer";
import postcss from 'postcss';
import postcssPreset from "postcss-preset-env";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
  },
  css: {
    postcss: {
      plugins: [
        postcss(),
        postcssPreset(),
        autoprefixer({})
      ]
    }
  }
});