/**
 * 信用付状态码
 */
export enum CreditStatusCode {
  /** 已开户 */
  APPROVED = 'APPROVED',
  /** 可以申请 */
  APPLICABLE = 'APPLICABLE',
  /** 不可申请 */
  NOT_APPLICABLE = 'NOT_APPLICABLE',
  /** 申请处理中 */
  IN_PROGRESS = 'IN_PROGRESS',
}

/**
 * 信用付申请状态
 */
export enum CreditApplicationStatus {
  PENDING = 'PENDING',
  IN_REVIEW = 'IN_REVIEW',
  DOCV = 'DOCV',
}

export interface CheckIfAllowApplyResponse {
  /** 信用付状态 */
  code: CreditStatusCode;
  /** 只有code为 IN_PROGRESS 会有值 */
  applicationNo?: string;
  /** 只有code为 IN_PROGRESS 会有值 */
  applicationStatus?: CreditApplicationStatus;
  /** true为显示开户入口 */
  displayFlag: 'true' | 'false';
  rspMsgCd: string;
  rspMsgInf: string;
  serviceTime: string;
}
