import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';

const CopyRight = () => {
  const { t } = useTranslation('privacyTerms');
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Snaplii {t('copyright')}</Text>
      <Text style={styles.content}>
        Copyright©2022 Snaplii Inc. All Rights Reserved.
      </Text>
    </View>
  );
};

export default CopyRight;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 60,
  },
  content: {
    color: '#6b6b6b',
    fontSize: 12,
  },
});
