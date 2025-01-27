import { Client } from "@upstash/workflow";
import config from "./config";

export const workflowClient = new Client({
  baseUrl: config.env.upstash.qstashUrl,
  token: config.env.upstash.qstashToken,
});
