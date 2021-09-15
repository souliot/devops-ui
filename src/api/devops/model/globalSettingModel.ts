/**
 * @description: GlobalSetting interface parameters
 */

export interface GlobalSettingInfo {
  SnapExpireDays?: number;
  MqServer?: string;
  ClickAddress?: string;
  GateWay?: string;
  StreamAddress?: string;
  DbAddress: string[];
  DbName?: string;
  UserName?: string;
  Password?: string;
  EtcdAddress: string[];
  RedisAddress: string[];
  RedisPassword?: string;
  RedisDB?: number;
}
