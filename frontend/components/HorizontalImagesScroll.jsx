import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AddImageCard from './AddImageCard';

const images = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const HorizontalImagesScroll = () => {
  return (
    <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ backgroundColor: "white", minHeight: '100%', maxHeight: '100%'}}
                contentContainerStyle={{ alignItems: "center"}}
              >
                {images.map((img) => (
                  <View key={img}
                    style={{ maxWidth: '40%', paddingHorizontal: 15 }}
                  >
                    <AddImageCard />
                  </View>
                ))}
              </ScrollView>
  )
}

export default HorizontalImagesScroll