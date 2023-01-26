import { Platform } from "react-native";
import { DrawerNavigationOptions } from "@react-navigation/drawer";
const platform = Platform.OS === 'windows' ||  Platform.OS === 'macos';

console.log(platform);

const screenOptions: DrawerNavigationOptions  = {
  headerShown: false,
  drawerType:  'back',
  drawerStyle:{
    width: 300,
    borderRadius:0,
    borderWidth:0,
  },
  drawerContentContainerStyle:{
    borderWidth:0,
  },
  drawerContentStyle:{
    borderWidth:0,

  }
}

export { screenOptions };