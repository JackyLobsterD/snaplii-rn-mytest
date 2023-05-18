import React, { FC } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import CustomIndicator from './CustomIndicator';

type Props = {
  /** 是否显示loading */
  showLoading: boolean;
};

/**
 * 全屏 loading
 * @param showLoading 是否显示loading
 */
const OverlayLoading: FC<Props> = (props) => {
  const { showLoading } = props;
  return (
    <>
      <Spinner
        visible={showLoading}
        textContent=""
        animation="fade"
        customIndicator={<CustomIndicator />}
      />
    </>
  );
};

export default OverlayLoading;
