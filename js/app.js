const countdown = document.querySelector('.countdown');

//Set Launch Date 
const launchDate = new Date('Sep 1, 2019 13:00:00').getTime();

// Update every Second
const interv = setInterval(() => {
 //Get Today date and time (ms)
 const now = new Date().getTime();

 //Get Distance from now to the set date
 const distance = launchDate - now;

 // Time Calculation
 const days = Math.floor(distance / (1000 * 60 * 60 * 24));
 const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 const mins = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60 ));
 const seconds = Math.floor((distance % (1000 * 60 )) /  1000 );

 //Display Result
 countdown.innerHTML = `
 <div>${days}<span>Days</span></div>
 <div>${hours}<span>Hours</span></div>
 <div>${mins}<span>Minutes</span></div>
 <div>${seconds}<span>Seconds</span></div>
 `;
 // If launch date passed
 if(distance < 0){

     //Stop CountDown
     clearInterval(interv);

     //Style and output text
     countdown.style.color = '#223843';
     countdown.innerHTML = 'Launched';
 }
},1000);
