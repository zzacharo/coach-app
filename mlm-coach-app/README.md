# CERN Rides Mobile App

## Bootstrap

See [React Native](https://facebook.github.io/react-native/docs/getting-started.html) documentation to setup iOS and Android emulators.

Ensure you have Node > 8.13. Install React Native.

```shell
$ node --version
v10.11.0
$ npm install -g react-native-cli
```

For iOS, install XCode and Command Line Tools. For Android, install SDK (set `local.properties`) and Emulator.

## Start React Native packager

```shell
$ cd ../mobile-app/rides
$ react-native start --reset-cache
```

**[What is the Metro bundler?](https://stackoverflow.com/questions/51116811/what-is-metro-bundler-in-react-native)**

* Combines all your Javascript code into a single file, and translates any Javascript code that your device won’t understand (like JSX or some of the newer JS syntax).
* Converts assets (e.g. PNG files) into objects that can be displayed by an Image component.

## Start iOS/Android app

In another shell (choose between `ios` and `android`):

```shell
$ cd ../mobile-app/rides
$ react-native run-[ios|android]
```

If build failed, try with:

```shell
$ react-native run-[ios|android] -- --reset-cache
```
