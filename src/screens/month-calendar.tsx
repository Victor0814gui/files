import { useState } from "react";
import { 
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight
} from "react-native";
import { data } from "../utils/fake-database";
import { colors } from "../utils/colors";
import { Modal } from "../components/modal";
import { CalendarSquareItem } from "../components/calendar-square-item";


export function MonthCalendar(){
  const [ isOpen,setIsOpen ] = useState(false);

  console.log("App")
  return (
    <View style={{flex: 1,padding: 12,}}>
      <Text style={styles.calendarTitle}>today's tasks (25/01/2023)</Text>
      <FlatList
        data={data}
        key={7}
        style={styles.list}
        renderItem={({item,index}) => (
          <CalendarSquareItem 
            avalability={item.avalability}
            day={item.day}
            index={index}
          />
        )}
        numColumns={7}
      />
      <Text style={styles.text}>hello world</Text>
      <TouchableHighlight
        onPress={() => {
          setIsOpen(true);
        }}
        activeOpacity={0.2}
        underlayColor={colors.item}>
        <Text>Open Popup</Text>
      </TouchableHighlight>
      <Modal
        isOpen={isOpen}
        onDismiss={() => {
          setIsOpen(false);
        }}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  calendarTitle:{
    fontWeight: "600",
    marginTop: 31,
    fontSize: 18,
    color: colors.text
  },
  list:{
    alignSelf: "center",
  },
  text:{
    fontSize: 16,
    color: "#ffffff",
  },
  item: {
    backgroundColor: colors.item,
    width: 45,
    height: 45,
    margin: 1,
  },
})