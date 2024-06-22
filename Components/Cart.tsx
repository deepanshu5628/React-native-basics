import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
  let cartitems=useSelector((state)=>state.Cart.cartitems);
  console.log(cartitems);
  return (
    <View>
      {
        cartitems.length ===0 ? <Text>Cart is empty</Text>:<View>
          <Text className='text-black text-3xl text-center'>Items are here</Text>
          {
            cartitems.map((item,index)=>{
              return <View key={index} className='border-y-red-200 border-2'>
                <Text className='text-black'>{item.name}</Text>
                <Text className='text-black'>{item.price}</Text>
                 </View>
            })
          }
        </View>
      }
    </View>
  )
}