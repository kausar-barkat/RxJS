var Observable = Rx.Observable;

//Get the parent and widget reference
var parent = document.getElementById("parent");
var widget = document.getElementById("widget");

//Create collections
var mouseDowns = Observable.fromEvent(widget, "mousedown");
var parentMouseMoves = Observable.fromEvent(parent, "mousemove");
var parentMouseUps = Observable.fromEvent(parent, "mouseup");

//Make a collection of all the drags of the widget
var drags = mouseDowns
  .map(function (e) {
    throw "error";
    return parentMouseMoves.takeUntil(parentMouseUps);
  })
  .concatAll();

var subscription = drags.forEach(
  function onNext(e) {
    widget.style.left = e.clientX + "px";
    widget.style.top = e.clientY + "px";
  },
  function onError(error) {
    console.log("error", error);
  },
  function onCompleted() {}
);

//If we mention here, it will execute synchronously
// subscription.dispose();
