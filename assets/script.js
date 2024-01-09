
    // function displayTime() {
    //     $('#currentDay').text(dayjs().format
    //     ('dddd, MMMM D, YYYY'))
    //     $('#currentTime').text(dayjs().format
    //     ('h:mm:ss'))
    // }
    
    // displayTime();

//added the function to desplay current time and the day

const timeDisplayEl = $('#time-display');


function displayTime() {
    const rightNow = dayjs().format('DD MMM YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

  setInterval(displayTime);


  // added function to update hours

  function updateHour() {

    let currentHour = dayjs().hour();
    console.log(currentHour);
    let timeBlock = $('.time-block');
    console.log(timeBlock);

    timeBlock.each(function() {
        let blockHour = parseInt($(this).attr('id'));
        console.log(blockHour);

        if (currentHour > blockHour) {
            $(this).addClass('past');
        } else if (currentHour === blockHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
        }else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('feauture');
        }
    })
  }


  setInterval(updateHour, 15000);


//   $('.saveBtn').click(function () {
//     // grab values of the textareas (class of description)
//     // Save the values to local storage using the ids as the keys and the values of the textareas for the values
//   })

// //   Load any saved data from localStorage



  

