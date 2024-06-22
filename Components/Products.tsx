import {Button, Image, ScrollView, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {addtocart} from '../Redux/Slices/CartSlice';
import {useEffect, useState} from 'react';
function Products({navigation}) {
  const dispatch = useDispatch();
  let dummydata = [
    {
      name: 'Samsung',
      price: 2000,
      imageurl: 'https://reactnative.dev/img/tiny_logo.png',
      cart: "false",
    },
    {
      name: 'realme',
      cart: "false",
      price: 1000,
      imageurl:
        'https://t4.ftcdn.net/jpg/05/36/24/13/360_F_536241340_GsrsNhcWC0hyTVaJLilNafyDw6fl0cC8.jpg',
    },
    {
      name: 'poco',
      cart: "false",
      price: 9300,
      imageurl:
        'https://t4.ftcdn.net/jpg/05/36/24/13/360_F_536241340_GsrsNhcWC0hyTVaJLilNafyDw6fl0cC8.jpg',
    },
    {
      name: 'reliance',
      cart: "false",
      price: 200098,
      imageurl: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      name: 'highcourt',
      cart: "false",
      price: 99,
      imageurl:
        'https://t4.ftcdn.net/jpg/05/36/24/13/360_F_536241340_GsrsNhcWC0hyTVaJLilNafyDw6fl0cC8.jpg',
    },
  ];
let [update,setupdate]=useState(false);
  // let [deep,setdep]=useState("deepaika");
  let [data, setdata] = useState(dummydata);
  let itemtocart = (index: Number) => {  
    // let newarr=data;
    setupdate(!update);
    data[index].cart="true"
    dispatch(addtocart(data[index]))
  };


 return (
    <ScrollView>
      <View className=" flex-1 bg-pink-300 ">
        {data.map((item, index) => (
          <View key={index} className="flex-col p-4 my-3   border-2">
            <Image
              className="w-52 h-28 rounded-lg self-center"
              source={{uri: `${item.imageurl}`}}
            />
            <Text className="text-black text-center">{item.name}</Text>
            <Text className="text-black text-center">{item.price}</Text>
            {item.cart ==="true" ? (
              <Button onPress={()=>navigation.navigate("Cart")} title="View Cart" />
            ) : (
              <Button onPress={() =>itemtocart(index)} title="Add to Cart" />
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
export default Products;
