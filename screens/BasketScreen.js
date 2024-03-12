import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../store/restaurantSlice'
import { selectBasketItems, selectBasketTotal } from '../store/basketSlice'

const BasketScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasketItems)
  const basketTotal = useSelector(selectBasketTotal)
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState({})
  const dispatch = useDispatch()

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      ;(results[item.id] = results[item.id] || []).push(item)
      return results
    }, {})
    setGroupedItemsInBasket(groupedItems)
  }, [items])

  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  )
}

export default BasketScreen

const styles = StyleSheet.create({})
