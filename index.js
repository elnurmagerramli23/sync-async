//1
let promise = new Promise(function(resolve) {
    setTimeout(() => resolve('success'), 4000);
  });
  //2
let promise = new Promise(function(resolve) {
    setTimeout(() => resolve('success'), 4000);
  });
      promise.then(
        value => console.log(value));
//3
let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Oooops something went wrong!")), 1000);
});
    promise.catch(console.log());

let promise2 = Promise.reject(new Error('faild'))
    promise2.then(
        function(resolve){
            console.log(resolve)
        },
        function (error) {
            error.message = 'Oooops something went wrong';
            console.log(error);
        });