import { post } from '../request';
import { CheckIfAllowApplyResponse } from './type';

export const checkIfAllowApply = () =>
  post<{}, CheckIfAllowApplyResponse>('/user/checkIfAllowApply.do');
