/**
 * 单例模式
 * 【定义】：保证一个类仅有一个实例，并提供一个访问它的全局访问点。
 * 【应用场景】：登录框，遮罩层，一个系统只有一个，多了无用。
 *  Vuex Redux 的 store，一个系统只能有一个，多了会出错。
 * 【优点】：唯一实例，节约内存开销。
 * 【缺点】：违背单一职责原则，不好维护、不容易扩展。
 *  不适用于容易变化的实例。
 */

export default function singletonPattern() {
  class Singleton {
    private constructor() {}
    private static instance: Singleton | null;
    static getInstance(): Singleton {
      if (Singleton.instance === null) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
  }
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();
  // console.log(s1 === s2);
}

export function loginForm() {
  class LoginForm {
    private state: string = "hide";
    private static instance: LoginForm;
    private constructor() {}
    show() {
      if (this.state === "show") return;
      this.state = "show";
    }
    hide () {
      if (this.state === 'hide') return;
      this.state = 'hide';
    }
    static getInstance(): LoginForm {
      if (LoginForm.instance === null) {
        LoginForm.instance = new LoginForm();
      }
      return LoginForm.instance;
    }
  }
}
