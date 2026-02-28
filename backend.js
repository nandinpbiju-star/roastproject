function roast() {
    let name = document.getElementById("nameInput").value;

    if(name === "") {
        alert("Type your name first 😏");
        return;
    }

    let roasts = [
        `${name}, you don’t need GPS — you’re already lost in life.`,
        `${name}, even Google can’t find your talent.`,
        `${name}, you have the confidence of someone who doesn’t know what’s going on.`,
        `${name}, you look like you clap when the plane lands.`,
        `${name}, your brain runs on airplane mode permanently.`
    ];

    let randomRoast = roasts[Math.floor(Math.random() * roasts.length)];

    document.getElementById("roast").innerText = randomRoast;
}
