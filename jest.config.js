export default {
  roots: ["<rootDir>/src"],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom:["<rootDir>/src/**/*.{ts,tsx}"],
  testEnvironment:"node",
  coverageProvider: "v8",
  testMatch: [
   "**/?(*.)+(spec|test).[t]s?(x)"
  ],
  transform: {
    ".+\\.ts$":"ts-jest"
  }

};
