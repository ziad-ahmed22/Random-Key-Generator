document.getElementById("btn").addEventListener('click', e => {
    let preview = document.querySelector("form .value");
    let numCount = document.querySelector("input[type='number']").value;
    let chekboxes = document.querySelectorAll("input[type='checkbox']");
    
    let capitalLetter = "ABCDEFGHIJKLMNOBQRSTUVWXYX";
    let smallLetter = "abcdefghhijklmnopqrstuvwxyz";
    let number = "0123456789";
    let specialChar = "!@#&$_!@#&$_";

    let target = "";
    let randomPass = "";

    e.preventDefault();
    preview.textContent = "";

    chekboxes.forEach(chekbox => {
        if (chekbox.checked) {
            chekbox.name === 'capital' ? target += capitalLetter : "";
            chekbox.name === 'small' ? target += smallLetter : "";
            chekbox.name === 'number' ? target += number : "";
            chekbox.name === 'special' ? target += specialChar : "";
        }
    });
    
    for (let i = 0; i < numCount; i++) {
        randomPass += target[Math.floor(Math.random() * target.length)];
    }

    preview.textContent = randomPass;
});

document.querySelector("form .value").onclick = () => {
    navigator.clipboard.writeText(document.querySelector("form .value").textContent);
    document.querySelector(".copy").textContent = "password copied to clipboard";
    document.querySelector(".copy").classList.add("green");
    setTimeout(() => {
        document.querySelector(".copy").textContent = "click up to copy Password"
        document.querySelector(".copy").classList.remove("green");
    },2000)
}