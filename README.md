# react-native-expo-using-native-with-rust

![GitHub License](https://img.shields.io/github/license/alk-neq-me/react-native-expo-using-native-with-rust/)
![GitHub Stars](https://img.shields.io/github/stars/alk-neq-me/react-native-expo-using-native-with-rust/)

Welcome to the **React Native Expo using Native with Rust** project! In this repository, we explore how to integrate a Rust native module into a React Native Expo project. This allows you to harness the power and performance of Rust within your Expo-based mobile application.

## Prerequisites

Before you get started, make sure you have the following prerequisites:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
- [Expo CLI](https://docs.expo.dev/get-started/installation/) installed globally.
- [Rust](https://www.rust-lang.org/tools/install) installed.
- [Android NDK](https://developer.android.com/ndk) installed (for building Rust code for Android).

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/alk-neq-me/react-native-expo-using-native-with-rust.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-native-expo-using-native-with-rust
   ```

3. Install project dependencies:

   ```bash
   yarn
   ```

4. Build the Rust library for the target architecture (e.g., aarch64):

   ```bash
   cd rust/flat/
   sh build.sh
   ```

5. Return to the project root directory:

   ```bash
   cd ..
   ```

6. Start the Expo development server:

   ```bash
   yarn android
   ```

7. Use Expo Go on your mobile device or an emulator to run the app.

## Usage

The main purpose of this project is to demonstrate how to use a Rust native module within a React Native Expo app. To integrate your Rust code, you can follow these steps:

1. Create or modify your Rust code in the `rust/flat/` directory.
2. Build the Rust library for the target architecture using `cargo build`.
3. Update the `config` file for custom linker settings if necessary (inside `.cargo`).
4. Import and use your Rust module in your React Native component.
5. Call Rust functions using the React Native bridge.

For detailed instructions and examples, refer to the project's source code and documentation.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

- GitHub: [alk-neq-me](https://github.com/alk-neq-me)

## Acknowledgments

This project was made possible thanks to the open-source community and the following libraries:

- [React Native](https://reactnative.dev/)
- [Expo](https://docs.expo.dev/)
- [Rust](https://www.rust-lang.org/)

Feel free to contribute, open issues, or provide feedback to help improve this project further.

Have fun coding with Rust and React Native Expo!
