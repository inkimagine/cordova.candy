document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log("device ready");
    
    var exitBtn = document.getElementById("exitBtn");
    exitBtn.onclick = function (e) {
        console.log("Exit Button pressed");
        
        window.plugins.toast.showWithOptions(
            {
              message: "Exit Button pressed",
              duration: "short", // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
              position: "bottom",
              addPixelsY: -40  // added a negative value to move it up a bit (default 0)
            },
            null, //onSuccess, // optional
            null //onError    // optional
          );

        if(cordova) cordova.plugins.exit();

    };
}