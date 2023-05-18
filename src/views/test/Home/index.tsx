import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Switch,
  ToastAndroid,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { RootStackParams } from '@/type/RootStackParams';
import IntentModule from '@/bridges/native';
import { checkIfAllowApply } from '@/http';
import { CheckIfAllowApplyResponse } from '@/http/credit/type';

type Props = NativeStackScreenProps<RootStackParams, 'TestHome'>;

const Home = ({ navigation }: Props) => {
  const { t, i18n } = useTranslation('test'); // test is namespace
  const [count, setCount] = useState(0);
  const [allowApplyResult, setAllowApplyResult] =
    useState<CheckIfAllowApplyResponse>();
  const [isChinese, setIsChinese] = useState(i18n.language === 'zh');

  useEffect(() => {
    checkIfAllowApply().then((res: any) => {
      console.log(res);
      setAllowApplyResult(res);
    });
    return () => {
      console.log('react', 'onDestroy');
    };
  }, []);

  const toggleSwitch = () => {
    setIsChinese((pre) => !pre);
  };

  useEffect(() => {
    i18n.changeLanguage(isChinese ? 'zh' : 'en');
  }, [i18n, isChinese]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('home page')}</Text>
      <View style={styles.language}>
        <Text>English</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isChinese ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isChinese}
        />
        <Text>中文</Text>
      </View>

      <Text style={styles.title2}>status 测试</Text>
      <View style={styles.section}>
        <Button
          onPress={() => {
            setCount(count + 1);
            console.log(count);
          }}
          title={t('add 1')}
        />
        <Text>{count}</Text>
      </View>

      <Text style={styles.title2}>跳转测试</Text>
      <View style={styles.section}>
        <Button
          onPress={() => {
            IntentModule.callFunction('JumpToPage', {
              router: '/main/ReactNativeActivity',
            });
          }}
          title={t('go to native')}
        />
      </View>
      <View style={styles.section}>
        <Button
          onPress={() => {
            IntentModule.callFunction('JumpToWeb', {
              vuePath: '/test/RNJump',
            });
          }}
          title="jump to web"
        />
      </View>
      <View style={styles.section}>
        <Button
          onPress={() => {
            IntentModule.callFunction('JumpToPage', {
              router: '/credit/ApplyCreditActivity',
            });
          }}
          title="跳转信用付"
        />
      </View>
      <View style={styles.section}>
        <Button
          onPress={() => {
            navigation.navigate('TestList');
          }}
          title={t('go to list')}
        />
      </View>
      <View style={styles.section}>
        <Button
          onPress={() => {
            navigation.navigate('MePrivacyTerms');
          }}
          title={'Privacy & Terms'}
        />
      </View>
      <Text style={styles.title2}>请求测试</Text>
      <View style={styles.section}>
        <View style={styles.row}>
          <Button
            onPress={() => {
              checkIfAllowApply().then((res) => {
                console.log(res);
                setAllowApplyResult(res);
              });
            }}
            title={t('Http request Test')}
          />
          <Pressable
            style={styles.pressBtn}
            onPress={() => {
              setAllowApplyResult(undefined);
            }}
            android_ripple={{
              color: '#bbb',
            }}>
            <Text>{t('Clear')}</Text>
          </Pressable>
        </View>
        <View style={styles.row}>
          <Text>checkIfAllowApply: {allowApplyResult?.code}</Text>
        </View>
      </View>
      <Text style={styles.title2}>Toast 测试</Text>
      <View style={styles.section}>
        <Button
          onPress={() => {
            ToastAndroid.show(t('Hello Toast'), ToastAndroid.LONG);
          }}
          title={t('Hello Toast')}
        />
      </View>

      <Text style={styles.title2}>组件Demo</Text>
      <View style={styles.section}>
        <Button
          onPress={() => {
            navigation.navigate('TestSwiperDemo');
          }}
          title={'Swiper Demo'}
        />
      </View>

      <View style={styles.section}>
        <Button
          onPress={() => {
            navigation.navigate('TestLoadingDemo');
          }}
          title={'Loading Demo'}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  title: {
    fontFamily: 'Jost-Regular',
    fontSize: 24,
    marginLeft: 20,
  },
  title2: {
    fontSize: 18,
    marginLeft: 20,
    marginTop: 14,
  },
  section: {
    marginTop: 10,
    paddingLeft: 20,
  },
  row: {
    flexDirection: 'row',
  },
  pressBtn: {
    marginLeft: 20,
    padding: 10,
    backgroundColor: '#ccc',
  },
  language: {
    flexDirection: 'row',
    width: 140,
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
