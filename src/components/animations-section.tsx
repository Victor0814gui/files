import { useRef,ReactNode, useEffect } from "react";
import {
  View,
  Animated,
  Dimensions
} from "react-native";




export const AnimationSection = ({children}:{children: ReactNode}):JSX.Element => {
  const fadeAnim = useRef(new Animated.Value(-20)).current;
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: -20,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn();
    return () => fadeOut();
  },[])

  return (
    <Animated.View
      style={{
        transform:[{
          translateY: fadeAnim
        }]
      }}
    >
      {children}
    </Animated.View>
  )
}