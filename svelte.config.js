import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    env: {
      privatePrefix: "KW_SECRET_",
      publicPrefix: "KW_PUBLIC_",
    },
  },
};

export default config;
