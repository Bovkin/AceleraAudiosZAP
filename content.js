const interval = setInterval(() => {
    const header = document.querySelector("._3euVJ");
    if(header){
        console.log(header);
        clearInterval(interval);


        const button1x = document.createElement("button");
        const button1Halfx = document.createElement("button");
        const button2x = document.createElement("button");
        

        button1x.innerHTML = "1x";
        button1x.classList.add("oneTimesButton");

        button1Halfx.innerHTML = "1.5x";
        button1Halfx.classList.add("oneHalfTimesButton");

        button2x.innerHTML = "2x";
        button2x.classList.add("twoTimesButton");

        button1x.style.color = '#66ff33';
        
        button2x.addEventListener("click", () => {
            const audios = document.querySelectorAll("audio");
            audios.forEach((audio) => {
                audio.playbackRate = 2;
            })
            button2x.style.color = '#66ff33';
            button1Halfx.style.color = '#D3D0CF';
            button1x.style.color = '#D3D0CF';
        });

        button1Halfx.addEventListener("click", () => {
            const audios = document.querySelectorAll("audio");
            audios.forEach((audio) => {
                audio.playbackRate = 1.5;
            })
            button1Halfx.style.color = '#66ff33';
            button2x.style.color = '#D3D0CF';
            button1x.style.color = '#D3D0CF';
        });

        button1x.addEventListener("click", () => {
            const audios = document.querySelectorAll("audio");
            audios.forEach((audio) => {
                audio.playbackRate = 1;
            })
            button1x.style.color = '#66ff33';
            button1Halfx.style.color = '#D3D0CF';
            button2x.style.color = '#D3D0CF';
        });
                
        header.appendChild(button1x);
        header.appendChild(button1Halfx);
        header.appendChild(button2x);
    }

}, 100)