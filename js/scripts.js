function cypher(input) {
  let code = input.charAt(0);
  return document.getElementById("output").innerHTML = code

}

$(document).ready(function() {
  $("#submit").click(function() {
    let input = document.getElementById("input").value;
    cypher(input);
  });
});