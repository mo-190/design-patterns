/**
 * 【定义】：实现可循环遍历获取集合中各数据项，不关心数据项中的数据结构
 * 【应用场景】：清单 TodoList。每日清单有学习类、生活类、工作类、运动类等项目，清单列表只管罗列，不管类别
 * 【优点】：活性更佳，适用面广，能应对更加复杂的迭代需求
 * 【缺点】：需显示调用迭代进行（手动控制迭代过程），外部调用方式较复杂
 */

export default function iteratorPattern() {
  class DataContainer {
    data = [10, 20, 30, 40, 50];
    getIterator(): DataIterator {
      return new DataIterator(this);
    }
  }

  class DataIterator {
    private index: number = 0;
    private data: number[];
    constructor(container: DataContainer) {
      this.data = container.data;
    }
    next(): number | null {
      if (this.hasNext()) {
        return this.data[this.index++];
      }
      return null;
    }
    hasNext(): boolean {
      if (this.index >= this.data.length) return false;
      return true;
    }
  }
}
