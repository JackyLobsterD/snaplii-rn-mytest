/* eslint-disable react/no-unstable-nested-components */
import React, { useLayoutEffect } from 'react';
import { StyleSheet, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParams } from './src/type/RootStackParams';
import { useTranslation } from 'react-i18next';
import { initHttpConfig } from './src/http';
import { initI18nConfig } from './src/i18n';
import HeaderLeft from './src/components/HeaderLeft';
import Home from './src/views/test/Home';
import List from './src/views/test/List';
import Detail from './src/views/test/Detail';
import SwiperDemo from './src/views/test/SwiperDemo';
import LoadingDemo from './src/views/test/LoadingDemo';
import PrivacyTerms from './src/views/me/PrivacyTerms';
import IntentModule from './src/bridges/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

type AppProps = {
  /** pageName from Native to route to rn page */
  pageName?: keyof RootStackParams;
};

initHttpConfig();
initI18nConfig(IntentModule.language);

const Stack = createNativeStackNavigator<RootStackParams>();

const App = (props: AppProps) => {
  const { t } = useTranslation('test'); // test is namespace

  useLayoutEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBarStyle('dark-content');
    StatusBar.setBackgroundColor('#fff');
  }, []);

  return (
    <GestureHandlerRootView style={styles.gestureWrap}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={props.pageName ? props.pageName : 'TestHome'}
          screenOptions={{
            animation:
              Platform.OS === 'android' ? 'slide_from_right' : 'default',
            orientation: 'portrait_up',
            headerBackVisible: false,
            headerLeft: () => <HeaderLeft />,
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen
            name="TestHome"
            component={Home}
            options={{
              title: t('home page') || 'Home',
            }}
          />
          <Stack.Screen name="TestList" component={List} />
          <Stack.Screen
            name="TestDetail"
            component={Detail}
            options={({ route }) => ({
              title: `${route.params.itemName} detail`,
            })}
          />
          <Stack.Screen name="TestSwiperDemo" component={SwiperDemo} />
          <Stack.Screen name="TestLoadingDemo" component={LoadingDemo} />
          <Stack.Screen
            name="MePrivacyTerms"
            component={PrivacyTerms}
            options={{
              title: '',
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: '#fff',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
export default App;

const styles = StyleSheet.create({
  gestureWrap: {
    flex: 1,
  },
});
