/**
 *  观察者模式
 * 【定义】：定义对象间的一种一对多的依赖关系，当一个对象状态发生改变时所有依赖它的对象都将得到通知
 * 【应用场景】：Dom事件、Vue React的生命周期、Vue watch、Vue组件更新、各种异步回调、MutationObserver
 * 【观察者模式和发布订阅模式区别】
 *  观察者：Subject和Object直接绑定无需媒介
 *  发布订阅模式：Publisher和Observer互不认识，中间有媒介
 * 【优点】：相互对应，关系明确，占用内存资源容易进行回收
 * 【缺点】：两者之间的关系耦合
 */

export default function observerPattern() {
  class Subject {
    private state: number = 0;
    private observers: Observer[] = [];

    getState(): number {
      return this.state;
    }
    setState(newSate: number) {
      this.state = newSate;
      this.notify();
    }
    attach(observer: Observer) {
      this.observers.push(observer);
    }
    private notify() {
      this.observers.forEach((observer) => {
        observer.update(this.state);
      });
    }
  }

  class Observer {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    update(state: number) {
      console.log(`${this.name} updated, state is ${state}`);
    }
  }
  const sub = new Subject();
  const observer1 = new Observer("A");
  sub.attach(observer1);
  const observer2 = new Observer("B");
  sub.attach(observer2);
  sub.setState(1);
}
