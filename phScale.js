
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