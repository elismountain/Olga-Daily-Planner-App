// $(document).ready(function(){

//     function displayTime() {
//         $('#currentDay').text(dayjs().format
//         ('dddd, MMMM D, YYYY'))
//         $('#currentTime').text(dayjs().format
//         ('h:mm:ss'))
//     }
// })

// // displayTime();

const timeDisplayEl = $('#time-display');


function displayTime() {
    const rightNow = dayjs().format('DD MMM YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

  setInterval(displayTime);