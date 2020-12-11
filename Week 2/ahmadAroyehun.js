function getGrade() {
    var score = prompt("Enter your score", 50);

    if (score == "" || score == null || score < 0) {
        document.getElementById("grade").innerHTML
            = `Score ${score} is not valid; Please enter a valid score`;
        document.querySelector("button").style.background = "red";
    }
    else {
        var result = (score < 50) ? "F; Fail" : (score < 65) ? "D; Fairly Good; \n You can do better" :
            (score < 75) ? "C; Good" : (score < 85) ? "B; Very Good" : "A; Excellent!";
        document.getElementById("grade").innerHTML = `Your score  ${score}, is ${result} `
        document.querySelector("button").style.background = "steelblue";
    }

    switch (true) {
        case score < 50: alert('Fail');
            break;
        case (score < 65):
            alert('Fairly Good');
            break;
        case (score < 75):
            alert('Good');
            break;
        case (score < 85):
            alert('Very Good');
            break;
        case (score < 100):
            alert('Very Good');
            break;

        default:
            alert("invalid")
    }
}

function phValue(ph) {
    (ph < 7) ? console.log('acidic') : (ph === 7) ? console.log('neutral') :
     (ph < 15) ? console.log('alkaline') : console.log(false);
}