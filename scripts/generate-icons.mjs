// Generates the PNG app icons in /public from app/icon.svg.
// Run with: node scripts/generate-icons.mjs
import { readFile, writeFile } from "node:fs/promises";
import { ImageResponse } from "next/og.js";
import { createElement as h } from "react";

const svg = await readFile(new URL("../app/icon.svg", import.meta.url), "utf8");
const dataUri = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

// Full-bleed square (no rounded corners) with the glyph inside the maskable safe zone.
async function render(size, file, pad) {
  const inner = Math.round(size * (1 - pad * 2));
  const res = new ImageResponse(
    h(
      "div",
      {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#7d5239",
        },
      },
      h("img", { src: dataUri, width: inner, height: inner })
    ),
    { width: size, height: size }
  );
  await writeFile(new URL(`../public/${file}`, import.meta.url), Buffer.from(await res.arrayBuffer()));
  console.log("wrote", file);
}

await render(192, "icon-192.png", 0.08);
await render(512, "icon-512.png", 0.1);
await render(180, "../app/apple-icon.png", 0.06);
