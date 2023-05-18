import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const windowWidth = Dimensions.get('window').width;
console.log(windowWidth);

const listData = ['#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9', '#C5CAE9'];

const SwiperDemo = () => {
  const [data] = useState([...new Array(4).keys()]);
  console.log(data);

  return (
    <View style={styles.wrap}>
      <Text>SwiperDemo</Text>
      <Carousel
        vertical={false}
        width={windowWidth}
        height={windowWidth / 2}
        loop
        autoPlay
        autoPlayInterval={2000}
        data={listData}
        pagingEnabled
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ index }) => (
          <View
            key={listData[index]}
            style={{
              ...styles.swiperItem,
              backgroundColor: listData[index],
              width: windowWidth,
              height: windowWidth / 2,
            }}>
            <Text style={styles.swiperItemText}>{index}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SwiperDemo;

const styles = StyleSheet.create({
  wrap: {},
  swiperItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiperItemText: {
    fontSize: 20,
  },
});
