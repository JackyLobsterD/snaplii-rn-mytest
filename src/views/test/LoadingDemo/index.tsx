import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import OverlayLoading from '@/components/OverlayLoading';

const LoadingDemo = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    showLoading();
  }, []);

  const showLoading = () => {
    console.log('clicked showLoading');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <ScrollView>
      <OverlayLoading showLoading={loading} />

      <Text>LoadingDemo</Text>
      <View style={styles.section}>
        <Button onPress={showLoading} title={'Loading Demo for 5s'} />
      </View>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
        <View style={styles.box} key={item}>
          <Text>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default LoadingDemo;

const styles = StyleSheet.create({
  section: {
    marginTop: 10,
    paddingLeft: 10,
    width: 200,
  },
  box: {
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    margin: 10,
  },
});
