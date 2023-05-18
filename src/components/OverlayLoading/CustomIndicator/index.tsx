import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';

const CustomIndicator = () => {
  const { t } = useTranslation('common');
  return (
    <View style={styles.wrap}>
      <Image source={require('./snaplii_loading.gif')} style={styles.image} />
      <Text style={styles.text}>{t('loading')}</Text>
    </View>
  );
};

export default CustomIndicator;

const styles = StyleSheet.create({
  wrap: {
    padding: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 30,
  },
  image: {
    width: 120,
    height: 120,
  },
  text: {
    marginTop: 24,
    fontSize: 14,
    color: '#6b6b6b',
    textAlign: 'center',
  },
});
