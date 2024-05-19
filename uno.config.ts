import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  shortcuts: {
    "text-ts":
      "bg-gradient-to-r from-[#3178C6] from-30% via-purple-500 via-45% to-[#1AC9CF] to-90% font-extrabold bg-clip-text text-transparent",
    "text-gradient-apple":
      "bg-gradient-to-r from-cyan-400 from-1% via-purple-500 via-30% to-pink-600 to-90% font-extrabold bg-clip-text text-transparent",
    "text-gradient-js":
      "bg-gradient-to-t from-yellow-600 from-10% to-yellow-300 to-90%  bg-clip-text bg-clip-text text-transparent",
    "text-quote":
      "rounded-sm py-1.5 px-2 text-sm font-serif text-#d1d5db bg-#18181b border-l-4 border-#0d9488 size-w-160",
    "text-file-name": "text-xs text-secondary italic ",
    "text-gradient-html":
      "bg-gradient-to-r from-[#e34d26] from-10% via-[#f16529] via-50% to-[#ffb300] to-90% font-extrabold bg-clip-text text-transparent",
  },
  theme: {
    colors: {
      primary: "#d1d5db",
      secondary: "#a3a3a3",
      accent: "#0d9488",
      comment: "#6b7280",
      status: {
        success: "#22ce55",
        info: "#3b82f6",
        warning: "#f59e0b",
        danger: "#ef4444",
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {},
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
