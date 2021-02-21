// реализуйте функцию по созданию счётчика

function createCounter(initialValue) {
    return {
        count: initialValue ? initialValue : 0,
        showValue: function() {
            console.log(this.count);
            return this.count;
        },
        increment: function(val) {
            this.count = (val) ? (this.count + val) : (this.count + 1);
            return this;
        },
        decrement: function(val) {
            this.count = (val) ? this.count - val : this.count -1;
            return this;
        },
        discard: function() {
            this.count = initialValue ? initialValue : 0;
            return this;
        }
    }

}

/**
  1.
  const counter = createCounter();
  counter.showValue() --> 0
  counter.increment() --> 1
  counter.increment() --> 2
  counter.increment(3) --> 5
  counter.decrement() --> 4
  counter.increment(3) --> 1
  counter.showValue() --> 1
  counter.discard() --> 0
  2.
  const counter = createCounter(5);
  counter.showValue() --> 5
  counter.increment() --> 6
  counter.increment() --> 7
  counter.increment(7) --> 14
  counter.decrement() --> 13
  counter.increment(3) --> 10
  counter.showValue() --> 10
  counter.discard() --> 5
*/
