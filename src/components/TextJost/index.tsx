import { StyleSheet, Text, StyleProp, TextStyle } from 'react-native';
import React from 'react';

type TextJostProps = {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
};

/**
 * TextJost
 * only add the Jost as fontFamily to the Text
 * reference: https://reactnative.dev/docs/text#limited-style-inheritance
 * @returns \<Text\>
 */
const TextJost = (props: TextJostProps) => {
  return <Text style={[styles.text, props.style]}>{props.children}</Text>;
};

export default TextJost;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Jost-Regular',
  },
});
