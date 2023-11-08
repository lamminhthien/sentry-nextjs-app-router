/** @type {import('next').NextConfig} */
const nextConfig = {}

const { withSentryConfig } = require("@sentry/nextjs");

const sentryWebpackPluginOptions = {
  silent: true,
  org: "abc-software-solution-compa-27",
  project: "quizne-fe-stage",
}

const sentryOptions = {
  widenClientFileUpload: true,
  transpileClientSDK: true,
  tunnelRoute: "/monitoring",
  hideSourceMaps: true,
  disableLogger: true,
}

module.exports = withSentryConfig(
  nextConfig,
  sentryWebpackPluginOptions,
  sentryOptions
);
