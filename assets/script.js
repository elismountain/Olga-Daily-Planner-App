//added the function to desplay current time and the day

const timeDisplayEl = $('#time-display');
const currentHour = dayjs().hour();


function displayTime() {
    const rightNow = dayjs().format('hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

  setInterval(displayTime, 150);



$(document).ready(function () {
    function formatHour(hour) {
    return dayjs().hour(hour).format('h A');
    }

    setInterval(formatHour, 150);

    function createRow(hour) {
    const row = $("<div>").addClass("row time-block");
    const timeCol = $("<div>").addClass("col-md-1 hour").text(formatHour(hour));
    const textArea = $("<textarea>").addClass("col-md-10 description").attr("data-hour", formatHour(hour).replace(/\s+/g, "").toLowerCase());
    const saveBtn = $("<button>").addClass("col-md-1 saveBtn").html("<i class='fas fa-save'></i>");      
    const currentHour = dayjs().hour();
    
    if (hour < currentHour) {
        textArea.addClass("past");
    } else if (hour === currentHour) {
        textArea.addClass("present");
    } else {
        textArea.addClass("future");
    }

    saveBtn.on("click", function () {
        const userInput = textArea.val().trim();
        const currentHour = textArea.data("hour");

        if (userInput !== "") {
        localStorage.setItem(currentHour, userInput);
        } else {
        localStorage.removeItem(currentHour);
        }
    });


    row.append(timeCol, textArea, saveBtn);
    $(".container").append(row);
    }


    function loadEvents() {
    for (let hour = 8; hour <= 20; hour++) {
        createRow(hour);
        const currentHour = formatHour(hour).replace(/\s+/g, "").toLowerCase();
        const savedEvent = localStorage.getItem(currentHour);

        if (savedEvent) {
        $(`textarea[data-hour="${currentHour}"]`).val(savedEvent);
        }
    }
    }

    $("#currentDay").text(dayjs().format("dddd, MMMM D"));
    loadEvents();
});