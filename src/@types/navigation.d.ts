import { ViewPropTypes } from "react-native-windows";



export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList{
      MonthCalendar: undefined;
      DayCalendar: undefined;
      CreateAppointment:undefined;
      EditAppointment: {
        id: number;
        hourId: string;
      }
    }
  }
}