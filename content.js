
const interval = setInterval(() => {
    const header = document.querySelector("._3euVJ");
    if(header){
        console.log(header);
        clearInterval(interval);


        const button1x = document.createElement("button");
        const button2x = document.createElement("button");
        

        button1x.innerHTML = "1x";
        button1x.classList.add("oneTimesButton");

        button2x.innerHTML = "2x";
        button2x.classList.add("twoTimesButton");

        button2x.addEventListener("click", () => {
            const audios = document.querySelectorAll("audio");
            audios.forEach((audio) => {
                audio.playbackRate = 2;
            })
            //button2x.style.color = 'red';
        });
        button1x.addEventListener("click", () => {
            const audios = document.querySelectorAll("audio");
            audios.forEach((audio) => {
                audio.playbackRate = 1;
            })
        });
                
        header.appendChild(button1x);
        header.appendChild(button2x);
    }

}, 1000)
