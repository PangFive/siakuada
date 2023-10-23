import { BootstrapBreakpoints } from "./types";

export const UNKNOWM_ERROR = "UNKNOWM_ERROR";
const ROOT_API: string = process.env.NEXT_PUBLIC_API_URI as string;
const ROOT_PATH: string = process.env.NEXT_PUBLIC_API_PATH as string;

export const API_URI = ROOT_API + ROOT_PATH;

