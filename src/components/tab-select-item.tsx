import {
  View,
  Text,
  StyleSheet,
  TouchableHighlightProps,
  TouchableHighlight,
} from "react-native";
import { colors } from "../utils/colors";




export const TabSelectItem = (props:{
  isActive?: boolean | false
  label: string,
} & TouchableHighlightProps) => {

  return (
    <TouchableHighlight {...props} style={{flexDirection: "row",backgroundColor: "transparent"}}>
      <>
      {props.isActive && <View style={[styles.tabSquareStyle,{borderBottomRightRadius:0}]}>
        <View style={styles.tabSquareStyleOverlappingCircle}/>
      </View>}
      <View style={[styles.tabSelector,props.isActive && {backgroundColor: colors.background}]}>
        <Text style={styles.tabText}>{props.label}</Text>
        <Text style={[styles.tabText,{marginLeft: "auto"}]}>X</Text>
      </View>
      {props.isActive && <View style={[styles.tabSquareStyle,{borderBottomLeftRadius:0}]}>
        <View style={styles.tabSquareStyleOverlappingCircle}/>
      </View>}
      </>
    </TouchableHighlight>
  )
}


const tabCircularBottomStyle = 14;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.black,
  },
  tagSelectorContainer:{
    flexDirection: "row",
  },
  tabSelector:{
    height: 31,
    width: 230,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 12,
  },
  tabSquareStyle:{
    height: tabCircularBottomStyle,
    width: tabCircularBottomStyle,
    alignSelf: "flex-end",
    backgroundColor: colors.background,
    borderRadius: 12,
  },
  tabSquareStyleOverlappingCircle:{
    height: tabCircularBottomStyle,
    width: tabCircularBottomStyle,
    borderRadius: tabCircularBottomStyle / 2,
    backgroundColor: colors.black,
  },
  tabText:{
    fontSize: 14,
    marginLeft: 7,
    fontWeight: "600",
    alignSelf: "center"
  },
  content:{
    backgroundColor: colors.background,
    flex: 1,
  },
})