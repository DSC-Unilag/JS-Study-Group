



//gradeInterpreter

function showMessage(score){
    
    if (score >= 70 && score <= 100){
        console.log('A');
        return showMessage();
    }
    
    else if(score >= 60 && score <= 69){
        console.log('B');
    }

    else if(score >= 50 && score <= 59){
        console.log('C');
    }

    else if(score >= 49 && score <= 45){
        console.log('D');
    }

    else if(score >= 40 && score <= 44){
        console.log('E');
    }

    else if(score <= 39){
        console.log('F');
    }



};

showMessage();




//phScale

function showMessage(value){

    

    if (value > 7 && value <= 14){

        console.log('A');

        return('alkaline');

    }

    

    else if(value < 7 && value >= 0){

        return( "acidic")

    }

    else if(value = 7){

        return('neutral')

    }

    else if(value < 0 || value > 14){

return('invalid')    }

};

showMessage();
