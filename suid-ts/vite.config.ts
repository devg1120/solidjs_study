import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
//import suidPlugin from "@suid/vite-plugin";

export default defineConfig({
  //plugins: [suidPlugin(), solidPlugin()],
  plugins: [ solidPlugin()],
  build: {
    target: "esnext",
  },
});

