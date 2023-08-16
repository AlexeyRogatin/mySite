import esbuild from "esbuild"
import { html } from "@esbuilder/html"
import CssModulesPlugin from "esbuild-css-modules-plugin"
import { ScssModulesPlugin } from "esbuild-scss-modules-plugin"
import { svgrPlugin } from 'esbuild-svgr-plugin'

async function watch() {
  const ctx = await esbuild.context({
    entryPoints: ["src/index.html"],
    outdir: "build",
    loader: {
      ".ts": "ts",
      ".gif": "dataurl",
      ".jpg": "dataurl",
      ".png": "dataurl"
    },
    bundle: true,
    plugins: [
      html({
        serve: true,
      }),
      CssModulesPlugin(),
      ScssModulesPlugin(),
      svgrPlugin(),
    ],
    metafile: true,
    color: true,
    assetNames: "[name]",
    minify: false,
  });

  ctx.watch();

  await ctx.serve({
    servedir: "build",
    port: 8080,
  });
}

watch();
