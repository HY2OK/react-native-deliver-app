import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DeliveryScreen = () => {
  return (
    <SafeAreaView>
      <View className="flex-row items-center pb-3 mx-4 space-x-2">
        <View className="flex-1">
          <Text className="text-xs font-bold text-gray-400">배송 앱</Text>
          <Text className="text=xl font-bold">현재 위치</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default DeliveryScreen

const styles = StyleSheet.create({})
