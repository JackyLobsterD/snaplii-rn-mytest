import { StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import IntentModule from '@/bridges/native';

const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        if (navigation.canGoBack()) {
          navigation.goBack();
        } else {
          IntentModule.callFunction('CloseRnPage', {});
          console.log('root back');
        }
      }}>
      <FontAwesomeIcon icon={faChevronLeft} size={18} style={styles.backIcon} />
    </Pressable>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#ddd',
    width: 44,
    height: 44,
    // alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    // marginLeft: -10,
  },
  backIcon: {
    marginLeft: 8,
  },
});
