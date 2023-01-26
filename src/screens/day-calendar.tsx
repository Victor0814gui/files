import { useState } from "react";
import { 
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Platform,
  Pressable,
  ActivityIndicator
} from "react-native";
import { colors } from "../utils/colors";
import { Appointment, DayData, data } from "../utils/fake-database";
import { useNavigation } from "@react-navigation/native";
import { AnimationSection } from "../components/animations-section";

export const CurrentTimeIndicator = () => {
  return(
    <View style={styles.currentTimeIndicator}>
      <View style={styles.currentTimeIndicatorText}/>
    </View>
  )
}


const Appointement = (props:{
  title: string,
  description: string,
  index: number,
  hourId: string,
}) => {
  const { navigate } = useNavigation();

  return (
    <Pressable onPress={() => navigate("EditAppointment",{
      id:props.index,
      hourId:props.hourId,
    })}>
      {({pressed}) => (
        <View style={styles.appointment}>
          {pressed && <ActivityIndicator style={{position: "absolute", top: "50%",left: "50%"}}/>}
            <View style={[pressed &&{opacity: 0.2},{flexDirection: "row",justifyContent: "space-between"}]}>
              <Text style={styles.appointmentTitle}>{props.title}</Text>    
              <View style={styles.badgeColor}/>
            </View>
            <Text style={[pressed &&{opacity: 0.2},styles.appointmentDescription]}>{props.description}</Text>
        </View>
      )}
    </Pressable>
  )
}


const HourItem = (props:{
  hour: string,
  index: number,
  appointments: Appointment[],
  hourId: string,
}) => {
  const { navigate } = useNavigation();

  return (
    <Pressable>
      <View style={styles.hourContent}> 
        {`${props.index}` === props.hour && <CurrentTimeIndicator/>}
        <Text style={styles.hourContentText}>{props.index}{props.index > 12 ? "PM" : "AM"}</Text>
        <View style={{flexDirection: "row",alignItems: "baseline"}}>
          {/* {props.appointments.map((appointment,index) =>(
            <Appointement
              key={index}
              title={appointment.title}
              description={appointment.description!}
            />
          ))} */}

          <FlatList
            data={props.appointments}
            renderItem={({item,index}) => (
              <Appointement
                index={index}
                hourId={props.hourId}
                key={index}
                title={item.title}
                description={item.description!}
              />
            )}
            horizontal
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </Pressable>
  )
}


export const DayCalendar = () => {
  return(
    <View style={styles.container}>
      <FlatList 
        data={DayData}
        renderItem={({item,index}) => (
          <HourItem
            hour={item.hour}
            index={index}
            appointments={item.appointments}
            hourId={item.hourId}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 21,
  },
  text:{
    color: colors.text
  },
  hourContent:{
    flexDirection: "row",
    // height: 41,
    borderBottomWidth: 2,
    borderColor: colors.item,
  },
  currentTimeIndicator:{
    flexDirection: "row"
  },
  currentTimeIndicatorText:{
    fontSize: 14,
    padding: 7,
    backgroundColor: colors.itemHovered,
  },
  hourContentText:{},
  appointment:{
    borderWidth: 2,
    borderColor: colors.item,
    maxWidth: 240,
    margin: 3,
    padding: 7,
    borderRadius: 3,
  },
  appointmentContent:{
  },
  appointmentTitle:{
    fontSize: 14,
    fontWeight: "600",
    color: "#ebebeb",
  },
  appointmentDescription:{
    fontSize: 12,
    lineHeight: 14,
    color: "#c7c7c7",
    fontWeight: "600",
  },
  badgeColor:{
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.itemActive,
    margin: 4,
  },
  separatorItem:{
    width: 2,
    backgroundColor: colors.itemActive,
  },
})