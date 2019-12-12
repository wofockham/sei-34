// setTimeout expects a callback -- it does not use Promises
// HW TASK: wrap setTimeout in a Promise

// YOUR CODE HERE:
const wait = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};


// Make this code work:
wait(2000).then(function () {
  console.log('2 seconds have passed');
}).then(function () {
  console.log('And also this function runs');
});
