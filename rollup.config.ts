import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";

import { RollupOptions } from "rollup";

const external = ["node:net", "net"]

const config: RollupOptions[] = [
  {
    input: "src/index.ts",
    output: [
      {
        file: `dist/index.js`,
        format: "cjs",
        sourcemap: false,
      },
      {
        file: `dist/index.mjs`,
        format: "es",
        sourcemap: false,
      },
    ],
    external: (name) => external.includes(name),
    plugins: [esbuild()]
  },
  {
    input: "src/index.ts",
    external: (name) => external.includes(name),
    plugins: [dts()],
    output: {
      file: `dist/index.d.ts`,
      format: "es",
    },
  }
];

export default config;
