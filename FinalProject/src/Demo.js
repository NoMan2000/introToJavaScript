/* global describe beforeEach expect it */
(function tester(global) {
    var Demo = function () {
        if (!this instanceof Demo) {
            return new Demo();
        }
        /**
         * Insert return objects here
         */
        return {

        };
    };
    global.Demo = Demo;

}(this));
