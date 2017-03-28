// GenieJS Test Suite

function Wish(name, subject) {
  this.name = name;
  this.subject = subject;
};

Wish.prototype.assert = function (x) {
  try{
    if(!x){
      throw new Error(this.name + ": Fail");
    }
    else {
      console.log("%c" + this.name + ": Granted", "color: green;");
    }
  }
  catch(error){
    console.log("%c" + error, "color: red;")
  }
};

Wish.prototype.isDefined = function () {
  this.assert(typeof(this.subject) !== "undefined")
};

Wish.prototype.isEmptyString = function() {
  this.assert(this.subject === "")
};
