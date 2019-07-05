//we're grabbing everything by id
//DOM elements
//const are all the elements we need to interact with and udpate

const time = document.getElementById('time');
  greeting = document.getElementById('greeting');
  name = document.getElementById('name');
  focus = document.getElementById('focus');

//function to show the time - call the function within itself every second so that the time is updated every second
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //set AM or PM
  const amPm = hour >=12 ? 'PM' : 'AM';

  //12 hour format
  hour = hour % 12 || 12;

  //Output the time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  //call this every second or 1000 mili seconds
  setTimeout(showTime, 1000);
}

  function addZero(n){
    return (parseInt(n,10) <10 ? '0' : '') + n;
  }

  //function to set background and greeting

  //run
  showTime();
