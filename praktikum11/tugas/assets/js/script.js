// mengambil semua element a dengan looping 
document.querySelectorAll("#option a").forEach((a) => {
    // Jika di klik akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element) => {
        computerChoice(element);
    })
})
function computerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element result dengan queryselector untuk menampung nilai hasil dari game
    let pilihanComputer = document.querySelector("#result");

    // membuat array pilihan untuk computer
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random untuk computer
    pilihanComputer.innerHTML = choices[Math.round(Math.random() * choices.length)];
    pilihanComputer = pilihanComputer.innerHTML;


    // jika pilihan komputer sama dengan pilihan user (Draw)
    if(pilihanUser == pilihanComputer){
        alert("DRAW");
    }

    // Jika pilihan user yang menang
    if(pilihanUser == "Rock" && pilihanComputer == "Scissors"){
        alert("YOU WIN");
    }else if (pilihanUser == "Paper" && pilihanComputer == "Rock"){
        alert("YOU WIN");
    }else if (pilihanUser == "Scissors" && pilihanComputer == "Paper"){
        alert("YOU WIN");
    }

    // jika pilihan komputer yang menang
    if(pilihanUser == "Rock" && pilihanComputer == "Paper"){
        alert("COMPUTER WIN");
    }else if (pilihanUser == "Paper" && pilihanComputer == "Scissors"){
        alert("COMPUTER WIN");
    }else if (pilihanUser == "Scissors" && pilihanComputer == "Rock"){
        alert("COMPUTER WIN");
    }
}
// menangkap semua elemen a
document.querySelectorAll("#option a").forEach((a) =>
    // jika di klick akan menjalankan fungsi computerChoice
    a.addEventListener("click", (e) => {
        computerChoice(e);
    })
);

// fungsi untuk menghandle logic pada game 
function computerChoice(e) {
		// menangkap element result pilihan komputer
		const result = document.querySelector("#result");

		// membuat list untuk pilihan komputer
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random untuk computer
    result.innerHTML = choices[Math.floor(Math.random() * choices.length)];

    // jika pilihan komputer == dengan pilihan user (draw)
    if (e.target.innerText.trim() == result.L) {
        setTimeout(() => alert("Draw"), 100);
    }


    // jika pilihan user yg menang
    if (
        (e.target.innerText.trim() == "Rock" && result.innerHTML == "Scissors") ||
        (e.target.innerText.trim() == "Paper" && result.innerHTML == "Rock") ||
        (e.target.innerText.trim() == "Scissors" && result.innerHTML == "Paper")
    ) {
        setTimeout(() => alert("You win"), 100);
    }


    // jika pilihan komputer yg menang
    if (
        (e.target.innerText.trim() == "Rock" && result.innerHTML == "Paper") ||
        (e.target.innerText.trim() == "Paper" && result.innerHTML == "Scissors") ||
        (e.target.innerText.trim() == "Scissors" && result.innerHTML == "Rock")
    ) {
        setTimeout(() => alert("Computer wins"), 100);
    }
}