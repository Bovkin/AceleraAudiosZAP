
const interval = setInterval(() => {

    const header = document.querySelector("._2O84H");
    if (header) {
        clearInterval(interval);

        const button1x = document.createElement("button");
        const button1Halfx = document.createElement("button");
        const button2x = document.createElement("button");
        const nightMode = document.createElement("button");

        button1x.innerHTML = "1x";
        button1x.classList.add("oneTimesButton");

        button1Halfx.innerHTML = "1.5x";
        button1Halfx.classList.add("oneHalfTimesButton");

        button2x.innerHTML = "2x";
        button2x.classList.add("twoTimesButton");

        nightMode.innerHTML = "Night Mode";
        nightMode.classList.add("nightMode");

        button1x.style.color = '#66ff33';
        nightMode.style.color = '#66ff33';

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

        nightMode.addEventListener('click', function () {
            cor = nightMode.style.color
            if (cor == 'rgb(102, 255, 51)') {
                nightMode.style.color = '#D3D0CF';

                button2x.addEventListener("click", () => {
                    const audios = document.querySelectorAll("audio");
                    audios.forEach((audio) => {
                        audio.playbackRate = 2;
                    })
                    button2x.style.color = 'darkgreen';
                    button1Halfx.style.color = '#D3D0CF';
                    button1x.style.color = '#D3D0CF';
                });

                button1Halfx.addEventListener("click", () => {
                    const audios = document.querySelectorAll("audio");
                    audios.forEach((audio) => {
                        audio.playbackRate = 1.5;
                    })
                    button1Halfx.style.color = 'darkgreen';
                    button2x.style.color = '#D3D0CF';
                    button1x.style.color = '#D3D0CF';
                });

                button1x.addEventListener("click", () => {
                    const audios = document.querySelectorAll("audio");
                    audios.forEach((audio) => {
                        audio.playbackRate = 1;
                    })
                    button1x.style.color = 'darkgreen';
                    button1Halfx.style.color = '#D3D0CF';
                    button2x.style.color = '#D3D0CF';
                });

            } else if (cor == 'rgb(211, 208, 207)') {

                nightMode.style.color = '#66ff33';

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
            }
        });


        header.appendChild(button1x);
        header.appendChild(button1Halfx);
        header.appendChild(button2x);
        header.appendChild(nightMode);
    }

}, 1)