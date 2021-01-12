function cypher1(input) {
  let code = (input.charAt(0) + input.charAt(input.length - 1)).toUpperCase();
  return document.getElementById("output").innerHTML = code;
}

function cypher2(input) {
  let code = (input.charAt(input.length - 1) + input.charAt(0)).toUpperCase();
  return document.getElementById("output").innerHTML = code;
}

function cypher3(input) {
  let code = cypher2(cypher1(input)).toUpperCase();
  return document.getElementById("output").innerHTML = code;
}

function cypher4(input) {
  let code = input + cypher2(cypher1(input)).toUpperCase();
  return document.getElementById("output").innerHTML = code;
}

function cypher5(input) {
  let index = Math.floor((input.length - 1) / 2);
  let code = input.charAt(index) + input + cypher2(cypher1(input)).toUpperCase();
  return document.getElementById("output").innerHTML = code;
}

function cypher6(input) {
  let str = cypher5(input);
  let code = str.split("").reverse().join("");
  return document.getElementById("output").innerHTML = code;
}



$(document).ready(function() {
  $("#cypher1").click(function() {
    let input = document.getElementById("input").value;
    cypher1(input);
  });

  $("#cypher2").click(function() {
    let input = document.getElementById("input").value;
    cypher2(input);
  });

  $("#cypher3").click(function() {
    let input = document.getElementById("input").value;
    cypher3(input);
  });

  $("#cypher4").click(function() {
    let input = document.getElementById("input").value;
    cypher4(input);
  });

  $("#cypher5").click(function() {
    let input = document.getElementById("input").value;
    cypher5(input);
  });

  $("#cypher6").click(function() {
    let input = document.getElementById("input").value;
    cypher6(input);
  });

});