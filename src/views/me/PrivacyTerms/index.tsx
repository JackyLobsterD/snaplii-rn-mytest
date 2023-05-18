/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useTranslation } from 'react-i18next';
import TextJost from '@/components/TextJost';
import TextJostSemiBold from '@/components/TextJostSemiBold';
import PrivacyPolicies from './PrivacyPolicies';
import Terms from './Terms';

const renderScene = SceneMap({
  privacyPolicies: PrivacyPolicies,
  terms: Terms,
});

const PrivacyTerms = () => {
  const { t } = useTranslation('privacyTerms');
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'privacyPolicies', title: t('Privacy policies') },
    { key: 'terms', title: t('Terms') },
  ]);

  return (
    <View style={styles.container}>
      {/* <StatusBar
        translucent
        barStyle="dark-content"
        animated={true}
        backgroundColor="#fff"
      /> */}
      <TextJostSemiBold style={styles.title}>
        {t('Privacy Terms')}
      </TextJostSemiBold>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={{
              backgroundColor: '#fff',
              shadowColor: '#rgba(0,0,0,0)',
              elevation: 0,
              left: 24,
            }}
            tabStyle={{
              width: 114,
              height: 42,
            }}
            gap={0}
            pressColor={'transparent'} // remove ripple effect
            indicatorStyle={{ backgroundColor: '#6170bd' }}
            renderLabel={({ route, focused }) => (
              <TextJost style={{ color: focused ? '#333' : '#6b6b6b' }}>
                {route.title}
              </TextJost>
            )}
          />
        )}
      />
    </View>
  );
};

export default PrivacyTerms;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    // paddingLeft: 24,
    // paddingRight: 24,
  },
  title: {
    // fontWeight: '500',
    fontSize: 24,
    color: '#333333',
    marginLeft: 24,
    // marginTop: 8,
  },
});
