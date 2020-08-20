let obj = {
  data: ["hello", "world", { a: 1, b: 2 }],
  [Symbol.iterator]() {
    const self = this;
    let index = 0;
    return {
      next() {
        if (index < self.data.length) {
          return {
            value: self.data[index++],
            done: false,
          };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};
