/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import Profile from './src/profile';
import PullToRefreshExample from './src/PullToRefreshExample';

const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color: 'black',
  },
  label: {
    backgroundColor: 'white',
    color: 'black',
  },
});

const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
  },
  label: {
    backgroundColor: 'black',
    color: 'white',
  },
});

type Theme = typeof lightTheme | typeof darkTheme;
interface Context {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
}

export const ThemeContext = React.createContext<Context>({
  theme: lightTheme,
  setTheme: (_: typeof lightTheme | typeof darkTheme) => {},
});

function App() {
  return (
    <SafeAreaProvider>
      <MainApp />
    </SafeAreaProvider>
  );
}

function MainApp() {
  const [theme, setTheme] = React.useState(lightTheme);
  const insets = useSafeAreaInsets();

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <View style={[theme.container, { paddingTop: insets.top }]}>
        <Text
          onPress={() => {
            setTheme(theme === lightTheme ? darkTheme : lightTheme);
          }}
          style={[theme.label]}
        >
          Toggle Theme
        </Text>
        <Profile name="januswel" />
      </View>
      <PullToRefreshExample />
    </ThemeContext.Provider>
  );
}

export default App;
