function gradeInterpreter(int) {
    A = []
    B= []
    C = []
    D = []
    E = []
    F = []

    for (let index = 70; index <= 100; index++) {
        A.push(index);
    }

    for (let index = 60; index <= 69; index++) {
        B.push(index);
    }

    for (let index = 50; index <= 59; index++) {
        C.push(index);
    }

    for (let index = 45; index <= 49; index++) {
        D.push(index);
    }

    for (let index = 40; index <= 44; index++) {
        E.push(index);
    }

    for (let index = 0; index <= 39; index++) {
        F.push(index);
    }

    if (A.includes(int)) {
        return('A');
    } else if (B.includes(int)) {
        return('B');
    } else if (C.includes(int)) {
        return('C');
    } else if (D.includes(int)) {
        return('D');
    } else if (E.includes(int)) {
        return('E');
    } else if (F.includes(int)) {
        return('F');
    } else {
        return("Number entered must be in the range of 0-100.");
    }


}

gradeInterpreter(70);


function phScale(int) {
    if(int< 0 || int > 14) {
        return("invalid");
    } else if (int < 7) {
        return("acidic")
    } else if(int > 7) {
        return("alkaline");
    } else if(int === 7){
        return("neutral")
    }else {
        return("Enter a number between 0-14.");
    }
}

phScale(14);

