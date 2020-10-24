var currDate= moment().format('dddd, MMMM Do');

$('.save').on('click', function(){
    var task= $(this).parent().siblings("textarea").val().trim();
    var time= $(this).parent().siblings("textarea").attr("id");
    localStorage.setItem(time, task);
});

function loadTasks(){
    for(let t=9; t<18; t++){
        $('#time-'+t).val(localStorage.getItem('time-'+t));
    }
}

function ColorcodeSheet(){
    var currH= parseInt(moment().format('hh'));
    var merid= moment().format('a');
    if(merid === "pm" && currH!=12){
        currH+=12;
    }
    $('#time-'+currH).toggleClass("present");
    for(let otherHRs=currH+1; otherHRs<18; otherHRs++){
        $('#time-'+otherHRs).toggleClass("future");
    }
    console.log(moment().format('hh'));
}
$("#currentDay").append(currDate);
ColorcodeSheet();
loadTasks();