import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setRestaurant } from '../store/restaurantSlice'

const RestaurantScreen = () => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      shortDescription,
      dishes,
      long,
      lat,
    },
  } = useRoute()
  const navigation = useNavigation()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description: shortDescription,
        dishes,
        long,
        lat,
      }),
    )
  }, [])

  return (
    <View>
      <Text>RestaurantScreen</Text>
    </View>
  )
}

export default RestaurantScreen

const styles = StyleSheet.create({})
