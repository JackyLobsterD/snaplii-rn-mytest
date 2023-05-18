import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '@/type/RootStackParams';

type Props = NativeStackScreenProps<RootStackParams, 'TestList'>;

const List = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>List</Text>
      <View style={styles.section}>
        <Button
          onPress={() => {
            navigation.navigate('TestDetail', {
              itemName: 'Laptop',
            });
          }}
          title="go to Laptop detail"
        />
      </View>
      <View style={styles.section}>
        <Button
          onPress={() => {
            navigation.navigate('TestDetail', {
              itemName: 'Phone',
            });
          }}
          title="go to Phone detail"
        />
      </View>
      <View style={styles.section}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default List;

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
