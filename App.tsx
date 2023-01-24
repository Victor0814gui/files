import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  PlatformColor,
  TextInput,
  Pressable,
} from "react-native";

const colors = {
  background: "#333333",
  item: "#404040",
  itemHovered: "#00e676",
  itemActive: "#aa00ff",
}

const data = new Array(30).fill(0)


const Modal = (props:{
  description: string,
  title: string,
  id: string,
  icon: string,
  priorityLevel: "low"|"average" |"high"
}) => {

  return (
    <View style={styles.modal}>
      <Text style={styles.modalTitle}></Text>
      <Text style={styles.modalDescription}></Text>
    </View>
  )
}

const Item = (props:{
  index: number,
}) => {
  console.log("Item")
  const [ onHover, setOnHover ] = useState(false);
  const [ isActive, setIsActive ] = useState(false);
  return (
    <>
    <Pressable 
      onPress={() => setIsActive(!isActive)}
    >
      <View
        //@ts-ignore
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        style={[
          styles.item,
          isActive && {
            backgroundColor: colors.itemActive,
          },
          onHover && {
            backgroundColor: colors.itemHovered
          }
        ]}
      />      
    </Pressable>
    <Modal
      description="asdfasdf"
      title="asdfasdf"
       icon="aasd"
       id="1234-1234-1234"
       priorityLevel="low"
    />
    </>
  )
}

export default function App(){
  console.log("App")
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        key={7}
        style={styles.list}
        renderItem={({item,index}) => <Item index={index}/>}
        numColumns={7}
      />
      <Text style={styles.text}>hello world</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.background,
    padding: 12,
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
  modal:{
    position: "absolute",
    width: 400,
    height: 300,
    backgroundColor: colors.item,
  },
  modalTitle:{
    fontSize: 16,
  },
  modalDescription:{
    fontSize: 14,
  },
})