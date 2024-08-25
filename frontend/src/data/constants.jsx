import { COINFLIP_ABI } from "./coinFlipAbi";

export const DEFAULT_THEME = "dark";
export const WAITFOR_CONFIRMATIONS = 2;

export const COINFLIP_ADDRESS = import.meta.env.VITE_COINFLIP_ADDRESS;
console.log("d", COINFLIP_ADDRESS);

export const COINFLIP = {
  address: COINFLIP_ADDRESS,
  abi: COINFLIP_ABI,
};

export const CHAINS = {
  1: {
    name: "MainNet",
    etherScanPrefix: "",
  },
  11155111: {
    name: "Sepolia",
    etherScanPrefix: "sepolia.",
  },
};
export const SUPPORTED_CHAINS = [11155111];
