import { useState}  from "react";

import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator
} from "react-native";
import { colors } from "../utils/colors";
import { useNavigation,useRoute } from "@react-navigation/native";





export const CalendarSquareItem = (props:{
  index: number,
  avalability: boolean,
  day: string,
}) => {
  console.log("CalendarSquareItem")
  const [ onHover, setOnHover ] = useState(false);
  const [ isActive, setIsActive ] = useState(false);
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("DayCalendar")}>
      {({pressed}) => (
        <>
        {pressed && <ActivityIndicator color={colors.itemActive} style={styles.circularIndicator}/>}
        <View
          //@ts-ignore
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          style={[
            styles.item,         
            onHover && { backgroundColor: colors.itemHovered },
              props.day === props.index.toString() && {
              backgroundColor: colors.itemActive
            }
          ]}
        >
          <View
            style={[
              styles.circularActiveIndicator,
              isActive && { backgroundColor: colors.itemActive},
            ]}
          />
          <Text>{props.index}</Text>
        </View>      
        </>
      )}
    </Pressable>
  )
}


const styles = StyleSheet.create({
  circularIndicator:{
    zIndex: 1,
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "50%",
    bottom: "50%",
    color: colors.itemActive
  },
  item: {
    backgroundColor: colors.item,
    width: 75,
    height: 75,
    margin: 1,
  },
  circularActiveIndicator:{
    height: 8,
    width: 8,
    borderRadius: 8 / 2,
  },
})