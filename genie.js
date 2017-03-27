// GenieJS Test Suite

function Wish(name, subject) {
  this.name = name;
  this.subject = subject;
};

Wish.prototype.isDefined = function () {
  if (typeof(this.subject) === "undefined")
    throw new Error("%c" + this.name + ": Fail", "color: red;");
  else {console.log("%c" + this.name + ": Granted", "color: green;");}
};

Wish.prototype.isEmptyString = function() {
  if (this.subject !== "")
    throw new Error("%c" + this.name + ": Fail", "color: red;");
  else {console.log("%c" + this.name + ": Granted", "color: green;");}
}
