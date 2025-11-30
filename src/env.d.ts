/// <reference types="vite-plugin-svgr/client" />

declare module "*.mp3" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}
