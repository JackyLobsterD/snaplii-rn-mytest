import { NativeModules, Platform } from 'react-native';

const bridgeOnWeb: IntentModuleType = {
  callFunction: () => {
    return new Promise((resolve, reject) => {
      reject('not on phone');
    });
  },
  httpHost: '',
  token: '',
  language: 'en',
};

// 下一句中的 IntentModule 即对应上文
// 客户端 public String getName()中返回的字符串
const IntentModule =
  Platform.OS === 'web' ? bridgeOnWeb : NativeModules.IntentModule;

export default IntentModule as IntentModuleType;

/**
 * bridge 类型定义
 */
type IntentModuleType = {
  callFunction: (
    funcName: string,
    params: Record<string, string>,
  ) => Promise<string>;
  httpHost: string;
  token: string;
  language: 'en' | 'zh';
};
