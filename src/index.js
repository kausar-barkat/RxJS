var Observable = Rx.Observable;

var button = document.getElementById("button");

// var handler = function (e) {
//   alert("clicked");
//   button.removeEventListener("click", handler); //unsubscribe from the event after the first click
// };

// button.addEventListener("click", handler);

//Converting to an Observable collection
var clicks = Observable.fromEvent(button, "click");

var points = clicks.map(function (e) {
  return { x: e.clientX, y: e.clientY };
});

// var subscription = clicks.forEach(
//   function onNext(e) {
//     alert("clicked");
//     subscription.dispose();
//   },
//   function onError(error) {
//     console.log("Error!");
//   },
//   function onCompleted() {
//     console.log("Done!");
//   }
// );

var subscription = points.forEach(
  function onNext(point) {
    alert("clicked: " + JSON.stringify(point));
    subscription.dispose();
  },
  function onError(error) {
    console.log("Error!");
  },
  function onCompleted() {
    console.log("Done!");
  }
);
