// GenieJS Test Suite

(function(exports) {
    function Wish(name, subject) {
        this.name = name;
        this.subject = subject;
    };

    var assert = function(name, x) {
        try {
            if (!x) {
                throw new Error(name + ": Fail");
            } else {
                console.log("%c" + name + ": Granted", "color: green;");
            }
        } catch (error) {
            console.log("%c" + error.stack, "color: red;");
        }
    }

    Wish.prototype.isDefined = function() {
        assert(this.name, typeof(this.subject) !== "undefined");
    }

    Wish.prototype.isEmptyString = function() {
        assert(this.name, this.subject === "")
    };

    exports.Wish = Wish
})(this);
