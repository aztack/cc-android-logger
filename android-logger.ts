const LoggerClass = "org/cocos2dx/javascript/Logger";
const MethodSignature = "(Ljava/lang/String;)V";

export class AndroidLogger {
  static v(message: string) {
    if (typeof jsb !== 'undefined') {
      jsb.reflection.callStaticMethod(LoggerClass, "v", MethodSignature, message);
    } else if (typeof console !== 'undefined') {
      console.log(message);
    }
  }
  static d(message: string) {
    if (typeof jsb !== 'undefined') {
      jsb.reflection.callStaticMethod(LoggerClass, "d", MethodSignature, message);
    } else if (typeof console !== 'undefined') {
      console.debug(message);
    }
  }
  static w(message: string) {
    if (typeof jsb !== 'undefined') {
      jsb.reflection.callStaticMethod(LoggerClass, "w", MethodSignature, message);
    } else if (typeof console !== 'undefined') {
      console.warn(message);
    }
  }
  static i(message: string) {
    if (typeof jsb !== 'undefined') {
      jsb.reflection.callStaticMethod(LoggerClass, "i", MethodSignature, message);
    } else if (typeof console !== 'undefined') {
      console.info(message);
    }
  }
  static e(message: string) {
    if (typeof jsb !== 'undefined') {
      jsb.reflection.callStaticMethod(LoggerClass, "e", MethodSignature, message);
    } else if (typeof console !== 'undefined') {
      console.error(message);
    }
  }
}
