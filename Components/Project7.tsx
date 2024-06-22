import {useState} from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import Sample1 from './Sample/Sample1';
function Project7() {
  const [show, setshow] = useState(false);
  return (
    <View>
      <Text className="text-center text-xl">
        useEffect for Unmounting Component{' '}
      </Text>

      {/* component */}
      <View className="my-7 ">
        <Text className="text-center text-5xl text-green-600 my-16">
          Hello g
        </Text>
        <Button title="Click me" onPress={() => setshow(!show)} />

        {show ? <Sample1 /> : null}
      </View>
    </View>
  );
}

export default Project7;
