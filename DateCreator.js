var currDate= moment().format('dddd, MMMM Do'); //Stores the current date from your computer.

$('.save').on('click', function(){
    var task= $(this).parent().siblings("textarea").val().trim();
    var time= $(this).parent().siblings("textarea").attr("id");
    localStorage.setItem(time, task); //Stores all the events in local storage.
});

function fillSchedule(){
    var currH= parseInt(moment().format('hh')); //Stores the current hour from your computer.
    var merid= moment().format('a'); //Stores the type of day from your computer.
    if(merid === "pm" && currH!=12){
        currH+=12;
    }
    else if(merid === "am" && currH==12){
        currH-=12;
    }

    //Loads all the events recently saved from local storage.
    for(let t=9; t<18; t++){
        $('#time-'+t).val(localStorage.getItem('time-'+t));
    }

    $('#time-'+currH).toggleClass("present");
    for(let otherHRs=currH+1; otherHRs<18; otherHRs++){
        $('#time-'+otherHRs).toggleClass("future");
    }
}
$("#currentDay").append(currDate);
fillSchedule();