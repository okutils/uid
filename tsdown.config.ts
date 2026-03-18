import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.ts"],
  target: "es2021",
  format: ["cjs", "esm"],
  dts: {
    tsgo: false,
  },
  exports: true,
});
