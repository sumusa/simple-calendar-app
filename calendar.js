const daysElement = document.getElementById("calendar-days");
const monthYearElement = document.getElementById("month-year");
const monthSelect = document.getElementById("month-select");
const yearSelect = document.getElementById("year-select");

let currentDate = new Date();

function renderCalendar() {
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayIndex = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay() - 1;

    const prevLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
    ];

    monthYearElement.textContent = `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    monthSelect.value = currentDate.getMonth();
    populateYearSelect();

    let days = "";
    let dayNames = "";

    const dayNamesArray = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    for (let i = 0; i < dayNamesArray.length; i++) {
        dayNames += `<div>${dayNamesArray[i]}</div>`;
    }

    for (let i = firstDayIndex; i > 0; i--) {
        days += `<div class="prev-date">${prevLastDay - i + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && currentDate.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    document.querySelector(".days-header").innerHTML = dayNames;
    daysElement.innerHTML = days;
}

function populateYearSelect() {
    const startYear = 2020; // You can adjust the start year as needed
    const endYear = 2030; // You can adjust the end year as needed

    for (let year = startYear; year <= endYear; year++) {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }

    yearSelect.value = currentDate.getFullYear();
}

function changeMonth() {
    currentDate.setMonth(parseInt(monthSelect.value));
    renderCalendar();
}

function changeYear() {
    currentDate.setFullYear(parseInt(yearSelect.value));
    renderCalendar();
}

function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}

renderCalendar();
