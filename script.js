function upDate(){
    let dateTime = new Date();
    let hour = dateTime.getHours()
    let minutes = dateTime.getMinutes()
    let seconds = dateTime.getSeconds()
    let am_or_pm = document.getElementById("am-or-pm")

    if(hours>=12){
        am_or_pm.innerHTML = "PM"
    }else{
        am_or_pm.innerHTML = "AM"
    }

    document.getElementById("hours").innerHTML = hour
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds

}

setInterval(upDate,1000)