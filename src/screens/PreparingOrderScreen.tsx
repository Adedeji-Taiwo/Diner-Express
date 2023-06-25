import { View, Text, SafeAreaView } from 'react-native'
import React, {useEffect} from 'react'
import * as Animmatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'
import { DeliveryScreenNavigationProp } from '../types'


const PreparingORderScreen = () => {
  const { navigate } = useNavigation<DeliveryScreenNavigationProp>();

  useEffect(() => {
    setTimeout(() => {
      navigate('Delivery')
    }, 4000)
  }, [])
  

  return (
    <SafeAreaView className="bg-[#0dccbb] flex-1 justify-center items-center">
        <Animmatable.Image 
          source={require("../../assets/order-loading.gif")}
          animation="slideInUp"
          iterationCount={1}
          className='h-96 w-96'
        />

        <Animmatable.Text
          animation="slideInUp"
          iterationCount={1}
          className='text-lg my-10 text-white font-bold text-center'
        >
          Waiting for Restaurant to accept your order
        </Animmatable.Text>
        <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  )
}

export default PreparingORderScreen