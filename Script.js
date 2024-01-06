document.addEventListener("DOMContentLoaded", function () {
    const songGrid = document.getElementById("song-grid");
    const songsData = [
        { name: "HUSN", image: "Song1.png", link: "https://youtu.be/gJLVTKhTnog?si=oTtJPs_evTfPoLbE"},
        { name: "SATRANGA", image: "Song2.jpg", link: "https://youtu.be/HrnrqYxYrbk?si=jZrrInCUkcOCr10w"},
        { name: "PEHLE BHI MAIN", image: "Song3.jpg", link: "https://youtu.be/iAIBF2ngbWY?si=xbN-8WpirlqSRbqv" },
        { name: "TU HAI KAHAN", image: "Song4.jpg", link: "https://youtu.be/AX6OrbgS8lI?si=iO1uTAP52RBAkigd" },

    ];

    songsData.forEach(song => {
        const songElement = document.createElement("div");
        songElement.classList.add("grid-item");

        songElement.innerHTML = `
            <a href="${song.link}" target="_blank">
                <img src="${song.image}" alt="${song.name}">
                <p>${song.name}</p>
            </a>
        `;
        songGrid.appendChild(songElement);
    });

    const singerGrid = document.getElementById("singer-grid");
    const singersData = [
        { name: "ARIJIT SINGH", image: "Singer1.png" },
        { name: "VISHAL MISHRA", image: "Singer2.jpeg" },
        { name: "ARMAAN MALIK", image: "Singer3.jpg" },
        { name: "SONU NIGAM", image: "Singer4.jpg" },

    ];

    singersData.forEach(singer => {
        const singerElement = document.createElement("div");
        singerElement.classList.add("grid-item");
        singerElement.innerHTML = `
            <img src="${singer.image}" alt="${singer.name}">
            <p>${singer.name}</p>
        `;
        singerGrid.appendChild(singerElement);
    });
});
