import { useEffect,useState } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { Appointment, DayData, data } from "../utils/fake-database";
import { useRoute } from "@react-navigation/native";
import { colors } from "../utils/colors";


export const EditAppointment = () => {
  const [ appointment,setAppointment ] = useState<Appointment>({} as Appointment)
  const route  = useRoute()
  const { id,hourId } = route.params as { id: number,hourId: string};

  const response = DayData[id]

  useEffect(() => {
    setAppointment(response?.appointments[id]!)
  },[])

  return (
    <View style={styles.container}>
      <Text>{id}</Text>
      <Text>{hourId}</Text>
      <View style={{flexDirection: "row",alignItems: "center"}}>
        <Text selectable style={styles.appointmentTitle}>{appointment?.title}</Text>
        <View style={styles.appointmentId}>
          <Text selectable style={styles.appointmentIdText}>{appointment?.id}</Text>
        </View>
      </View>
      <Text selectable style={styles.appointmentDescription}>{appointment?.description}</Text>
      <Text selectable style={styles.appointmentContent}>{appointment?.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 12,
  },
  appointmentId:{
    alignSelf: "flex-end",
    padding: 7,
    marginLeft: "auto",
    borderWidth: 1,
    borderColor: colors.itemActive,
    borderRadius: 31,
  },
  appointmentIdText:{
    fontSize: 16,
    color: colors.itemActive,
  },
  appointmentTitle:{
    fontSize: 18,
    fontWeight: "600",
    alignSelf: "center",
    textAlign: "center"
  },
  appointmentDescription:{
    fontSize: 16,
    color: "#d6d6d6",
  },
  appointmentContent:{
    marginTop: 12,
    paddingHorizontal: 12,
    color: "#cfcfcf",
    fontSize: 14,
  },
})