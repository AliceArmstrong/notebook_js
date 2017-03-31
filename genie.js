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
                printedTestResult.innerHTML = name
                printedTestResult.className += " passed"
                document.getElementById('testresults').appendChild(printedTestResult)
            }
        } catch (error) {
            document.getElementById('the-don').setAttribute("src", "sadgenieface.gif");
            console.log("%c" + error.stack, "color: red;");
            printedTestResult.innerHTML = error.stack
            printedTestResult.className += " failed"
            document.getElementById('testresults').appendChild(printedTestResult)
        }
    }

    Wish.prototype.isDefined = function() {
        assert(this.name, typeof(this.subject) !== "undefined");
    }

    Wish.prototype.isEmptyString = function() {
        assert(this.name, this.subject === "")
    };

    Wish.prototype.isType = function(type) {
        assert(this.name, this.subject.constructor.name === type)
    }

    Wish.prototype.isEqualTo = function(objectToMatch) {
        assert(this.name, this.subject === objectToMatch)
    }

    exports.Wish = Wish
})(this);
