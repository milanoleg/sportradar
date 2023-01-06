module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '\\.(js|ts|jsx|tsx)$': 'ts-jest',
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/src/test/__mocks__/styleMock.js',
    '\\.(png|jpg|jpeg|gif|ttf|eot|svg)$':
      '<rootDir>/src/test/__mocks__/fileMock.js',
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '<rootDir>/src/setupTests.ts',
  ],
};