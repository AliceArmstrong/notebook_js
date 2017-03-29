// GenieJS Test Suite

(function(exports) {
    function Wish(name, subject) {
        this.name = name;
        this.subject = subject;
    };

    var assert = function(name, x) {
        try {
            var printedTestResult = document.createElement('li')
            if (!x) {
                throw new Error(name + ": Fail");
            } else {
                printedTestResult.innerHTML = name + ": Granted"
                document.getElementById('passingtestresults').appendChild(printedTestResult)
                console.log("%c" + name + ": Granted", "color: green;");
            }
        } catch (error) {
            console.log("%c" + error.stack, "color: red;");
            printedTestResult.innerHTML = error.stack
            document.getElementById('failingtestresults').appendChild(printedTestResult)
        }
    }
    Wish.prototype.isDefined = function() {
        assert(this.name, typeof(this.subject) !== "undefined");
    }

    Wish.prototype.isEmptyString = function() {
        assert(this.name, this.subject === "")
    };

    Wish.prototype.isType = function(type) {
        assert(this.name, (this.subject.constructor.name) === type.constructor.name)
    }
    exports.Wish = Wish
})(this);
