import * as React from "react";
import { Main } from "./src/main";
import { NavigationContainer,DefaultTheme, Theme } from '@react-navigation/native';
import { colors } from "./src/utils/colors";


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
  },
};
const App = () => (
  <NavigationContainer theme={MyTheme}>
    <Main/>   
  </NavigationContainer>
)

export default App;