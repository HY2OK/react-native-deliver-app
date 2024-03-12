import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToBasket,
  clearBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from '../store/basketSlice'

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false)
  const items = useSelector((state) => selectBasketItemsWithId(state, id))
  const dispatch = useDispatch()

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }))
  }

  const removeItemFromBasket = () => {
    if (!items.length > 0) return

    dispatch(removeFromBasket({ id }))
  }

  const clearItemsFromBasket = () => {
    dispatch(clearBasket())
  }

  return (
    <View>
      <Text>DishRow</Text>
    </View>
  )
}

export default DishRow

const styles = StyleSheet.create({})
