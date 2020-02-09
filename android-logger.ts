const LoggerClass = "org/cocos2dx/javascript/Logger";
const MethodSignature = "(Ljava/lang/String;)V";

export class AndroidLogger {
  static v(message: string) {
    jsb.reflection.callStaticMethod(LoggerClass, "v", MethodSignature, message);
  }
  static d(message: string) {
    jsb.reflection.callStaticMethod(LoggerClass, "d", MethodSignature, message);
  }
  static w(message: string) {
    jsb.reflection.callStaticMethod(LoggerClass, "w", MethodSignature, message);
  }
  static i(message: string) {
    jsb.reflection.callStaticMethod(LoggerClass, "i", MethodSignature, message);
  }
  static e(message: string) {
    jsb.reflection.callStaticMethod(LoggerClass, "e", MethodSignature, message);
  }
}