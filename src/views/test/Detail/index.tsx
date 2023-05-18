import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '@/type/RootStackParams';

type Props = NativeStackScreenProps<RootStackParams, 'TestDetail'>;

const Detail = ({ route, navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Detail</Text>
      <Text>{route.params?.itemName}</Text>
      <View style={styles.section}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.section}>
        <Button
          title="Go Home"
          onPress={() => navigation.navigate('TestHome')}
        />
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    marginTop: 10,
  },
});
