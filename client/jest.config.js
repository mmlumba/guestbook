module.exports = {
    verbose: true,
    setupFilesAfterEnv: ["<rootDir>src/setupTests.js"],
    moduleFileExtensions: ["js", "jsx"],
    moduleDirectories: ["node_modules", "src"],
    moduleNameMapper: {
      "\\.(css|less|scss)$": "identity-obj-proxy"
    },
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/file.js",
    }
  };