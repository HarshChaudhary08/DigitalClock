function upDate(){
    let dateTime = new Date();
    let hour = dateTime.getHours() %12 || 12
    let minutes = dateTime.getMinutes()
    let seconds = dateTime.getSeconds()
    let am_or_pm = document.getElementById("am-or-pm")

    if(hours>=12){
        am_or_pm.innerHTML = "AM"
    }else{
        am_or_pm.innerHTML = "PM"
    }

    document.getElementById("hours").innerHTML = hour
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds

}

setInterval(upDate,1000)