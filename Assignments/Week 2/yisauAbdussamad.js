function gradeInterpreter(int) {
    function range(start, stop, step) {
        var a = [start], b = start;
        while (b < stop) {
            a.push(b += step || 1);
        }
        return a;
    }

    A = range(70,100);
    B = range(60,69);
    C = range(50, 59);
    D = range(45,49);
    E = range(40,44);
    F = range(0,39);


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
        return("neutral");
    }else {
        return("Enter a number between 0-14.");
    }
}

phScale(14);

