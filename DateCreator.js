var currDate= moment().format('dddd, MMMM Do');
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