import { colors } from "../utils/colors";
import { 
  View,
  Text,
  TouchableHighlight,
} from "react-native";
//@ts-ignore
import { Flyout } from "react-native-windows";


export const Modal = (props:{
  title: string,
  description: string,
  isOpen: boolean,
  setIsOpen: (state: boolean) => void,
} & Flyout) => {
  return (
    <Flyout
      isOpen={props.isOpen}
      onDismiss={() => {
        props.setIsOpen(false);
      }}>
      <View>
        <Text>This is a flyout.</Text>
        <TouchableHighlight
          onPress={() => {
            props.setIsOpen(false);
          }}
          activeOpacity={0.2}
          underlayColor={colors.item}>
          <Text>Close Flyout</Text>
        </TouchableHighlight>
      </View>
    </Flyout>
  )
}