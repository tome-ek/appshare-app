import "../src/index.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "900",
    values: [
      {
        name: "900",
        value: "#111827",
      },
      {
        name: "800",
        value: "#1F2937",
      },
      {
        name: "700",
        value: "#374151",
      },
    ],
  },
  layout: "centered",
};
