import { reactRouter } from "@react-router/dev/vite";
import { sentryReactRouter, type SentryReactRouterBuildOptions } from "@sentry/react-router";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";


const sentryConfig: SentryReactRouterBuildOptions = {
  org: "js-mastery-g5",
  project: "travel-agency",
  // An auth token is required for uploading source maps.
  authToken: "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"
  // ...
};



export default defineConfig(config => {
  return {
  plugins: [tailwindcss(),tsconfigPaths(),reactRouter(),sentryReactRouter(sentryConfig, config)],
  sentryConfig,
  ssr: {
    noExternal: [/@syncfusion/]
  }
  };
});
