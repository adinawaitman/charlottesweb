$(document).ready( function() {

  console.log("Ready!");

  document.getElementById("us").innerHTML = new Date();

  var usaTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
  usaTime = new Date(usaTime);
  document.getElementById("us").innerHTML = usaTime.toLocaleString();


  usaTime.setHours(usaTime.getHours() + 6);
  document.getElementById("madrid").innerHTML = usaTime.toLocaleString();



  var aestTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"});
  aestTime = new Date(aestTime);
  document.getElementById("aus").innerHTML = aestTime.toLocaleString();

})
