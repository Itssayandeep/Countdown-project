const endDate = "31 Dec, 2024 12:00 PM"

document.getElementById("end-Date").innerText = endDate;
const inputs = document.querySelectorAll("input")

function clock(){
    const end= new Date(endDate)
    const now= new Date()
    const diff = (end - now)/1000;
    
    if(diff < 0) return;
    inputs[0].value=(Math.floor(diff/3600/24));
    inputs[1].value=(Math.floor(diff/3600)%24);
    inputs[2].value=(Math.floor(diff/60)%60);
    inputs[3].value=(Math.floor(diff)%60);
}

clock()

/**
 * 1day=24hours
 * 1hr=60 mins
 * 60mins=3600s
 */
setInterval(
    ()=>{
        clock()
    },
    1000
) 


