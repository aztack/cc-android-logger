const { ccclass } = cc._decorator;
import { AndroidLogger as Logger } from './android-logger';
@ccclass
export default class BaseClass extends cc.Component {
  public verbose(message: string) {
    Logger.v(message);
  }
  public debug(message: string) {
    Logger.d(message);
  }
  public info(message: string) {
    Logger.i(message);
  }
  public warn(message: string) {
    Logger.w(message);
  }
  public error(message: string) {
    Logger.e(message);
  }
}