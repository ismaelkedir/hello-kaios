window.addEventListener("load", function() {
  // Store elements from the HTML document in a variable
  var sayHelloButton = this.document.getElementById('sayHelloButton');
  var batteryLevelProgress = this.document.getElementById('batteryLevelIndicator');


  // Add event listener to our 'Say Hello' button
  sayHelloButton.addEventListener('click', function () {
    console.log('Hello from your app')
  });
  
  // Using the Kai API to get the battery level
  this.navigator.getBattery().then(function (batteryLevel) {
    var phoneBatteryLevel = batteryLevel.level * 100;

    batteryLevelProgress.setAttribute('aria-valuenow', phoneBatteryLevel)
    batteryLevelProgress.style = 'width: ' + phoneBatteryLevel + '%'
    batteryLevelProgress.innerHTML = phoneBatteryLevel + '%'
  });
});
