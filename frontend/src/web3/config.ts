import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { baseSepolia } from "wagmi/chains";

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;

if (!projectId) {
  throw new Error(
    "Missing WalletConnect Project ID. Add VITE_WALLETCONNECT_PROJECT_ID to frontend/.env",
  );
}

export const wagmiConfig = getDefaultConfig({
  appName: "GhostChat",
  projectId,
  chains: [baseSepolia],
  transports: {
    [baseSepolia.id]: http(),
  },
});
