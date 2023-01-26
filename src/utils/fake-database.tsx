import { v4 as uuidV4 } from "uuid";
type DataCalendarItemType = {
  avalability: boolean;
  day: string;
}

type Appointment = {
  id: string;
  title: string;
  description?: string;
  content?: string;
  badgeColor: string;
}

type DayDataType = {
  appointments: Appointment[];
  hour: string;
  hourId: string;
}


const data:DataCalendarItemType[] = new Array(35).fill({
  avalability: true,
  day: new Date().getDay().toString()
})
//  console.log(new Date())

const DayData:DayDataType[] = new Array(24).fill({
  appointments: [
    {
      id:  uuidV4().toString(),
      title: "como criar datas",
      description:"ao criar datas emfrento problemas com o retorno dos dados em relação ao mês, onde eu tinha a espectativa de que ele retornasse dois digitos, mas eles retorna apenas um",
    },
    {
      id:  uuidV4().toString(),
      title: "SQL queries",
      description:"ainda não estudei querys em SQL mas quero fazer uma relação many to Many que retorne 1M de usuarios.",
      content: "asdfasdf kjaçlskdfç lajdçlkfjçasjçdflkajsdf"
    },
    {
      id:  uuidV4().toString(),
      title: "como criar datas",
      description:"ao criar datas emfrento problemas com o retorno dos dados em relação ao mês, onde eu tinha a espectativa de que ele retornasse dois digitos, mas eles retorna apenas um",
      content: `React Native
      React Query is designed to work out of the box with React Native, with the exception of the devtools, which are only supported with React DOM at this time.
      
      There is a 3rd party Flipper plugin which you can try: https://github.com/bgaleotti/react-query-native-devtools
      
      If you would like to help us make the built-in devtools platform agnostic, please let us know!
      
      Online status management
      React Query already supports auto refetch on reconnect in web browser. To add this behavior in React Native you have to use React Query onlineManager as in the example below:
      <Text style={{color: "red"}}>asdfasdfasdf</Text>
       import NetInfo from '@react-native-community/netinfo'
       import { onlineManager } from 'react-query'
       
       onlineManager.setEventListener(setOnline => {
         return NetInfo.addEventListener(state => {
           setOnline(state.isConnected)
         })
       })`
    },
  ],
  hour: new Date().getHours().toString(),
  hourId: uuidV4().toString()
})


export type {
  Appointment,
  DayDataType 
}
export {
  data,
  DayData,
}