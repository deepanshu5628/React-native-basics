import {Button, ScrollView, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from './Components/Cart';
import Products from './Components/Products';
import { useSelector } from 'react-redux';
function App() {
  const Stack = createNativeStackNavigator();
  let items =useSelector((state)=>state.Cart.cartitems);
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Product" component={Products}  options={{headerRight:()=>(<Text  className='text-black'>{items.length}</Text>)}}/>
          <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

let ItmeCournter=()=>{
  return (
    <Text>heel</Text>
  )
}
