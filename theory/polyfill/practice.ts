class MyPromise {
  executor: Function;
  state: {
    status: string;
    data: any;
  };

  constructor(executor: Function) {
    this.executor = executor;
    this.state = {
      status: "pending",
      data: undefined,
    };

    const resolve = (value: any) => {
      this.state.status = "fulfilled";
      this.state.data = value;
    };

    const reject = (error: any) => {
      this.state.status = "rejected";
      this.state.data = error;
    };
  }

  then(successFunction: Function) {}

  catch(errorFunction: Function) {}
}

const promise = new MyPromise((resolve, reject) => {
  let shouldResolve = true;
  if (shouldResolve) {
    resolve("OK");
  }
  reject();
});

promise.then((res) => console.log(res));
