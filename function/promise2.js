

function p1Func() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise1");
      resolve("Result from Promise1"); // resolve with a value
    }, 1000);
  });
}

function p2Func() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise2");
      resolve("Result from Promise2");
    }, 4000);
  });
}

function p3Func() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise3");
      resolve("Result from Promise3");
    }, 2000);
  });
}

Promise.all([p1Func(), p2Func(), p3Func()])
  .then(([p1, p2, p3]) => {
    console.log(p1); // "Result from Promise1"
    console.log(p2); // "Result from Promise2"
    console.log(p3); // "Result from Promise3"
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("I am blocked");
  });