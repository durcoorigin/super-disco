
// ****** Set current date and time ******
$(function() {
    var current = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").append(current)
});

var currentTime = moment().hour();

// ****** 8 ******
function saveTask8(btnId8,taskId8) {
    localStorage.setItem('newTask8', taskId8);
}

function loadTask8(taskId8) {
    document.getElementById('task8').innerHTML = localStorage.getItem('newTask8');
}
loadTask8();

$(".time-block").each(function() {
    if (currentTime === 8) {
        $("#8").addClass("present");
    }
    else if (currentTime > 8) {
        $("#8").addClass("past");
    }
    else if (currentTime < 8) {
        $("#8").addClass("future");
    }
});

// ****** 9 ******
function saveTask9(btnId9,taskId9) {
    localStorage.setItem('newTask9', taskId9);
}

function loadTask9(taskId9) {
    document.getElementById('task9').innerHTML = localStorage.getItem('newTask9');
}
loadTask9();

$(".time-block").each(function() {
    if (currentTime === 9) {
        $("#9").addClass("present");
    }
    else if (currentTime > 9) {
        $("#9").addClass("past");
    }
    else if (currentTime < 9) {
        $("#9").addClass("future");
    }
});

// ****** 10 ******
function saveTask10(btnId10,taskId10) {
    localStorage.setItem('newTask10', taskId10);
}

function loadTask10(taskId10) {
    document.getElementById('task10').innerHTML = localStorage.getItem('newTask10');
}
loadTask10();

$(".time-block").each(function() {
    if (currentTime === 10) {
        $("#10").addClass("present");
    }
    else if (currentTime > 10) {
        $("#10").addClass("past");
    }
    else if (currentTime < 10) {
        $("#10").addClass("future");
    }
});

// ****** 11 ******
function saveTask11(btnId11,taskId11) {
    localStorage.setItem('newTask11', taskId11);
}

function loadTask11(taskId11) {
    document.getElementById('task11').innerHTML = localStorage.getItem('newTask11');
}
loadTask11();

$(".time-block").each(function() {
    if (currentTime === 11) {
        $("#11").addClass("present");
    }
    else if (currentTime > 11) {
        $("#11").addClass("past");
    }
    else if (currentTime < 11) {
        $("#11").addClass("future");
    }
});

// ****** 12 ******
function saveTask12(btnId12,taskId12) {
    localStorage.setItem('newTask12', taskId12);
}

function loadTask12(taskId12) {
    document.getElementById('task12').innerHTML = localStorage.getItem('newTask12');
}
loadTask12();

$(".time-block").each(function() {
    if (currentTime === 12) {
        $("#12").addClass("present");
    }
    else if (currentTime > 12) {
        $("#12").addClass("past");
    }
    else if (currentTime < 12) {
        $("#12").addClass("future");
    }
});

// ****** 13 ******
function saveTask13(btnId13,taskId13) {
    localStorage.setItem('newTask13', taskId13);
}

function loadTask13(taskId13) {
    document.getElementById('task13').innerHTML = localStorage.getItem('newTask13');
}
loadTask13();

$(".time-block").each(function() {
    if (currentTime === 13) {
        $("#13").addClass("present");
    }
    else if (currentTime > 13) {
        $("#13").addClass("past");
    }
    else if (currentTime < 13) {
        $("#13").addClass("future");
    }
});

// ****** 14 ******
function saveTask14(btnId14,taskId14) {
    localStorage.setItem('newTask14', taskId14);
}

function loadTask14(taskId14) {
    document.getElementById('task14').innerHTML = localStorage.getItem('newTask14');
}
loadTask14();

$(".time-block").each(function() {
    if (currentTime === 14) {
        $("#14").addClass("present");
    }
    else if (currentTime > 14) {
        $("#14").addClass("past");
    }
    else if (currentTime < 14) {
        $("#14").addClass("future");
    }
});

// ****** 15 ******
function saveTask15(btnId15,taskId15) {
    localStorage.setItem('newTask15', taskId15);
}

function loadTask15(taskId15) {
    document.getElementById('task15').innerHTML = localStorage.getItem('newTask15');
}
loadTask15();

$(".time-block").each(function() {
    if (currentTime === 15) {
        $("#15").addClass("present");
    }
    else if (currentTime > 15) {
        $("#15").addClass("past");
    }
    else if (currentTime < 15) {
        $("#15").addClass("future");
    }
});

// ****** 16 ******
function saveTask16(btnId16,taskId16) {
    localStorage.setItem('newTask16', taskId16);
}

function loadTask16(taskId16) {
    document.getElementById('task16').innerHTML = localStorage.getItem('newTask16');
}
loadTask16();

$(".time-block").each(function() {
    if (currentTime === 16) {
        $("#16").addClass("present");
    }
    else if (currentTime > 16) {
        $("#16").addClass("past");
    }
    else if (currentTime < 16) {
        $("#16").addClass("future");
    }
});

// ****** 17 ******
function saveTask17(btnId17,taskId17) {
    localStorage.setItem('newTask17', taskId17);
}

function loadTask17(taskId17) {
    document.getElementById('task17').innerHTML = localStorage.getItem('newTask17');
}
loadTask17();

$(".time-block").each(function() {
    if (currentTime === 17) {
        $("#17").addClass("present");
    }
    else if (currentTime > 17) {
        $("#17").addClass("past");
    }
    else if (currentTime < 17) {
        $("#17").addClass("future");
    }
});