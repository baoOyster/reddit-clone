export default {
    testEnvironment: "jest-environment-jsdom", // Ensure this is correctly set
    transform: {
      "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
    },
    moduleNameMapper: {
      "\\.(css|scss|sass|less)$": "identity-obj-proxy",
    },
    setupFilesAfterEnv: ["<rootDir>/tests/setupTests.ts"],
  };
  