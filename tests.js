// utilities for testing

// this function just adds the test result to the page
function addTestDom(element, color, text) {
  var body = document.getElementsByTagName("body")[0];
  var elem = document.createElement(element);
  elem.style.color = color;
  elem.innerHTML = text;
  body.appendChild(elem);
}

// this it() function describes a group of tests
function it(description, contents) {
  var body = document.getElementsByTagName("body")[0];
  var elem = document.createElement("h3");
  elem.innerHTML = "It " + description;
  body.appendChild(elem);
  console.log("\n\n It " + description + "");
  contents();
}

// checks strict equality of expectation and target for passing test
// eg. expect(calvin.mood).tobe("happy");
function expect(expectation) {
  return {
      tobe: function(target) {
        if (target === expectation) {
          var passTxt = "PASSED " + "Expected " + target + " to be " + expectation;
          addTestDom("p", "green", passTxt);
          console.log('\n   %cPASSED', 'color:green;', 'Expected', target, 'to be', expectation );
        return true;
        } else {
          var failTxt = "FAILED " + "Expected " + target + " to be " + expectation;
          addTestDom("p", "red", failTxt);
          console.log('\n     %cFAILED', 'color:red;', 'Expected', target, 'to be', expectation );
          return false;
        }
      }
    };
}

var speedWeight;

function Athlete(name, sport, speed, distance) {

  this.name = name;
  this.sport = sport;
  this.speed = speed;
  this.distance = distance;
  this.eat = function(food) {
    var speedWeight = this.speed + food.weight;
    if (speedWeight > 110) {
    console.log("WOW!! That gave you a nice boost of energy, your speed is now " + speedWeight + "!");
  }
    else if(speedWeight > 70 && speedWeight < 110){
      console.log("Hopefully you can finish the workout, your speed is now " + speedWeight + "!");
    }
    else {
    console.log("It is going to be a long day for you, your speed is now " + speedWeight + "!");
  }
  this.speed += food.weight
  };

  this.footwear = function(shoe) {
    var speedFoot = this.distance + shoe.endurance;
    if (speedFoot > 8){
      console.log("Run forest run! Your distance is now " + speedFoot + "!");
    } else if (speedFoot <= 8 && speedFoot > 4) {
      console.log("Run forest! Your distance is now " + speedFoot + "!");
    } else { $(".footer2").text("Run! Your distance is now " + speedFoot + "!");
    }
    this.distance += shoe.endurance;
  };

}

function Food(item, weight, effect) {

  this.item = item;
  this.weight = weight;
  this.effect = effect;

}

function Shoe(brand, endurance) {

  this.brand = brand;
  this.endurance = endurance;

}

var Chris = new Athlete("Chris", "Frisbee", 65, 5);
var Bolt = new Athlete("Bolt", "Running", 95, 2);
var Peterson = new Athlete("Peterson", "Football", 90, 10);
var Athletes = [Chris, Bolt, Peterson];

var IceCream = new Food("IceCream", -40, "Sick");
var Protein = new Food("Protein", 10, "Healthy");
var RedBull = new Food("RedBull", 50, "Full of toxins");

var Nike = new Shoe("Nike", 3);
var Puma = new Shoe("Puma", 5);
var Sandal = new Shoe("Sandal", -3);

var Athletes = [Chris, Bolt, Peterson];
var Foods = [IceCream, Protein, RedBull];
var Shoes = [Nike, Puma, Sandal]


it("Chris' name should be Chris", function() {

  expect(Chris.name).tobe("Chris");

});

it("Peterson's speed and distance", function() {

  expect(Peterson.speed).tobe(90);
  expect(Peterson.distance).tobe(10);
});


it("RedBull's effect should be full of toxins", function() {

  expect(RedBull.effect).tobe("Full of toxins");
});

it("Puma's should have a endurance of 5", function() {

  expect(Puma.endurance).tobe(5);
});

it("Bolts's speed should drop when he eats Ice Cream", function() {

  Bolt.eat(IceCream);
  expect(Bolt.speed).tobe(55);

});

it("Peterson's distance should increase when he wears Nike's", function() {

  Peterson.footwear(Nike);
  expect(Peterson.distance).tobe(13);

});
