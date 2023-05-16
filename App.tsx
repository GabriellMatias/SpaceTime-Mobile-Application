import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="bg-gray-700 flex-1">
      <Text className="text-white m-auto font-bold">Hellow word</Text>
      <StatusBar style="light" />
    </View>
  )
}
