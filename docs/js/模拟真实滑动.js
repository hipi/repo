/* 模拟真实滑动 */

function dragandDrop(id, clientX, clientY, distance) {
  var elem = document.getElementById(id),
    k = 0,
    interval;
  iME(elem, "mousedown", 0, 0, clientX, clientY);
  interval = setInterval(function() {
    k++;
    iter(k);
    if (k === distance) {
      clearInterval(interval);
      iME(elem, "mouseup", clientX + k, clientY, 220 + k, 400);
    }
  }, 10);
  function iter(y) {
    iME(elem, "mousemove", clientX + y, clientY, clientX + y, clientY);
  }
  function iME(obj, event, screenXArg, screenYArg, clientXArg, clientYArg) {
    var mousemove = document.createEvent("MouseEvent");
    mousemove.initMouseEvent(
      event,
      true,
      true,
      window,
      0,
      screenXArg,
      screenYArg,
      clientXArg,
      clientYArg,
      0,
      0,
      0,
      0,
      0,
      null
    );
    obj.dispatchEvent(mousemove);
  }
}
window.setTimeout(function() {
  obj = document.getElementById("nc_1_n1z");
  obj.target = "_self";
  var _owh = obj.getBoundingClientRect();
  var _ox = _owh.width / 2,
    _oh = _owh.height / 2;
  _ox = Math.floor(Math.random() * _ox + 60);
  _oh = Math.floor(Math.random() * _oh + 60);
  _ox = _ox + _owh.x;
  _oh = _oh + _owh.y;
  dragandDrop("nc_1_n1z", _ox, _oh, 10000);
}, 1000);
