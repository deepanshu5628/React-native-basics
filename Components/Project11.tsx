import { View, Text, Button, Modal } from 'react-native'
import React, { useState } from 'react'

export default function Project11() {
    let [showmodal,setshowmodal]=useState(false);
  return (
    <View className='flex-1 bg-gray-600 justify-between my-2'>
        <Text className='text-center text-4xl'>Modal</Text>
        <Modal  transparent={true} animationType='slide' visible={showmodal}>
            <View  className="bg-red-800 p-8  my-auto">
                <View>
                    <Text>Important info is there</Text>
                    <Button title='Close it ' onPress={()=>setshowmodal(false)}/>
                </View>
            </View>
        </Modal>
        <Button title='Click me ' onPress={()=>setshowmodal(true)}/>
    </View>
  )
}