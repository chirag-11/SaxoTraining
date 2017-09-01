onmessage = function(e) {
    debugger;
  console.log('Message received from main script');
  var workerResult = 'Result: ' + (e.data[0] * 12);
  console.log('Posting message back to main script');
  postMessage(workerResult);
}