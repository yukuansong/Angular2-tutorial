var Test = (function () {
    function Test() {
    }
    Test.prototype.run = function () {
        console.log("I amd running....");
    };
    return Test;
}());

l = new Test();
l.run()
