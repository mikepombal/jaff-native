# jaffNative

Based on [jhen0409/react-native-boilerplate](https://github.com/jhen0409/react-native-boilerplate).

## Included

* [React](https://github.com/facebook/react) & [React Native](https://github.com/facebook/react-native) v0.28
* [Redux](https://github.com/reactjs/redux) & [Remote Redux DevTools](https://github.com/zalmoxisus/remote-redux-devtools) & [On Debugger](https://github.com/jhen0409/remote-redux-devtools-on-debugger)
* [Immutable](https://github.com/facebook/immutable-js) & [Immutable DevTools](https://github.com/andrewdavey/immutable-devtools)
* [Babel](https://github.com/babel/babel) & Plugins: [transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy)

## Installation

See [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to install requirement tools.

```bash
$ npm install -g react-native-cli
$ npm install
```

## Development

#### Start local server

```bash
$ npm start
```

#### iOS

Run command to open iOS simulator and run app:

```bash
$ npm run ios
```

Or open `ios/jaffNative.xcodeproj` file with XCode:

```bash
$ npm run ios-open
```

#### Android (5.0+)

Open Android emulator (recommented [Genymotion](https://www.genymotion.com)) and run command: (Or connect real device via USB)

```bash
$ adb reverse tcp:8081 tcp:8081  # react-native local server
$ adb reverse tcp:5678 tcp:5678  # remotedev local server
$ npm run android
```

__*[Emulator only]*__ If you're still use Android 4.0, it will cannot use `adb reverse`, you should use `10.0.2.2` (Genymotion: `10.0.3.2`) instead of `localhost` in [configureStore.js](src/configureStore.js#L15).

## DevTools

__*[OS X]*__ In development mode, you can install [React Native Debugger](https://github.com/jhen0409/react-native-debugger) as default debugger. if not install, it will use [Remote Redux DevTools](https://github.com/zalmoxisus/remote-redux-devtools) and [On Debugger](https://github.com/jhen0409/remote-redux-devtools-on-debugger).

## Test

We used [react-native-mock](https://github.com/lelandrichardson/react-native-mock), and test with [Mocha](https://github.com/mochajs/mocha), [Enzyme](https://github.com/airbnb/enzyme).

```bash
$ npm test
```

## LICENSE

[MIT](LICENSE)
