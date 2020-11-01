function prime(num) {
    if(num % num === 0 && num % 1 === 0){
        return true
    }
    else {
        return false
    }
}