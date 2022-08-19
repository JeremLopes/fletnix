import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.fletnix.app",
  appName: "Fletnix",
  webDir: "dist",
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.1.48:5173",
    cleartext: true,
  },
};

export default config;
