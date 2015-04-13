/*jshint unused: true, node: true */
/*jslint unparam: true, browser: true, node: true */
(function VariableTests(global, doc) {
    var Variable = {
        innerPublic : true,
        // This syntax utterly sucks though.
        set inner (value) {
            this.innerValue = value;
        },
        get value () {
            return this.innerValue || "Unknown";
        }
    },
        Truthiness = {
           "true": true,
           "trueOne":1,
           "trueString":'string',
           "trueObj": {},
           "trueFunction":function(){}
        },
        Falsiness = {
          "false":false,
          "falseZero":0,
          "falseEmpty":'',
          "falseNull":null,
          "falseUndefined":undefined
        },
        private = true,
        nonGlobalPrivate = "This private variable";
    globalVariable = "This global variable";
    public = true;
    Object.defineProperty(Variable, "postProperty", {
        get: function() {
            return postProperty || null;
        },
        set: function(value) { 
            postProperty = value; 
        }
    });
    global.Variable = Variable;
    global.Truthiness = Truthiness;
    global.Falsiness = Falsiness;
}(window, document));
