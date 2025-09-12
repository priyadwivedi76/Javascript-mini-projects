function clock(){
    const Data=new Date();
    let hours=Data.getHours();
    let minutes=Data.getMinutes();
    let seconds=Data.getSeconds();

    //12-hour-format
    hours=hours%12;
    hours=hours?hours:12;

    //consider changing both digit ie ones and tens
    hours=hours < 10 ? '0'+ hours : hours
    minutes=minutes < 10 ? '0'+ minutes : minutes
    seconds=seconds < 10 ? '0'+ seconds : seconds

    document.querySelector('.clock').textContent=`${hours}:${minutes}:${seconds}`
}


setInterval(clock,1000);
clock();
