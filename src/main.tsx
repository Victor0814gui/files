import { useState } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import { TabSelectItem } from "./components/tab-select-item";
import { colors } from "./utils/colors";
import { useNavigation } from "@react-navigation/native";
import { MonthCalendar } from "./screens/month-calendar";
import { DayCalendar } from "./screens/day-calendar";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { screenOptions } from "./utils/route-config";
import { CreateAppointment } from "./screens/create-appointment";
import { EditAppointment } from "./screens/edit-appointment";

type RoutesNamesTypes = {
  MonthCalendar: undefined;
  DayCalendar: undefined;
  CreateAppointment: undefined;
  EditAppointment: {
    id: string;
  };
}
const Stack = createDrawerNavigator<RoutesNamesTypes>();


export const Main = () => {
  const [ index, setIndex ] = useState<number>(1)
  const { navigate } = useNavigation()


  const navigationClickRedirectTab = (props:{index: number, routeName: keyof RoutesNamesTypes}) => {
    setIndex(props.index);
    //@ts-ignore
    navigate(props.routeName);
  }


  return (
    <View style={styles.container}>
      <View style={styles.tagSelectorContainer}>
        <TabSelectItem 
          label="MonthCalendar" 
          isActive={index === 1} 
          onPress={() => navigationClickRedirectTab({
            index:1,
            routeName: "MonthCalendar",
          })}
        />
        <TabSelectItem 
          label="DayCalendar" 
          isActive={index === 2} 
          onPress={() => navigationClickRedirectTab({
            index:2,
            routeName: "DayCalendar",
          })}
        />
      </View>
      <View style={styles.content}>
        <Stack.Navigator 
          useLegacyImplementation
          screenOptions={screenOptions}
          initialRouteName="MonthCalendar"
        >
          <Stack.Screen name="MonthCalendar" component={MonthCalendar} />
          <Stack.Screen name="DayCalendar" component={DayCalendar} />
          <Stack.Screen name="CreateAppointment" component={CreateAppointment} />
          <Stack.Screen name="EditAppointment" component={EditAppointment} />
        </Stack.Navigator>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.black,
  },
  tagSelectorContainer:{
    flexDirection: "row",
  },
  content:{
    flex: 1,
    backgroundColor: colors.background,
  },
})