import { View, TextInput } from 'react-native'
import React from 'react'
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'

const SearchBox = () => {
  return (
    <View className='flex-row items-center space-x-2 pb-2 mx-4'>
    <View className='flex-row items-center flex-1 space-x-2 bg-gray-200 p-3'>
      <MagnifyingGlassIcon color="gray" size={20} />
      <TextInput 
        placeholder='Restaurants and cuisines'
        keyboardType='default'
      />
    </View>

  <AdjustmentsHorizontalIcon color="#0DCCBB" />
</View>
  )
}

export default SearchBox