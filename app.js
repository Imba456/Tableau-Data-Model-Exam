// Set the date we're counting down to
let countDownDate = new Date().getTime()+30*60000;

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  let miliseconds = Math.floor((distance % (1000 )) );

  // Display the result in the element with id="timer"
  document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s " + miliseconds +"ms ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "YOU FAILED";
  }
}, 1);

//get exambuton id
const startexam=document.getElementById("exambutton");

//create a date time for when the teaching day is and timetoday
let examdate = new Date("Feb 02, 2021 15:00:00").getTime();
let timetoday = new Date().getTime();

//time diff between examdate and now
let datecheck = examdate-timetoday;
//examfunction
function examfunction(){
    console.log("user clicked");
    setTimeout(
        function() {
            if (datecheck > 0) {
            alert("You cannot take the exam yet, wait until at least 02-02-2021 15:00")                }
                else {
            alert("Just joking, it's time for questions test")};
        },
        1000);
}

//run exam funtion on click
startexam.addEventListener("click", examfunction)
