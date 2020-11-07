/*  Create a function that takes a number n and returns the sum 
of all square numbers up to and including n
*/

function squaresSum(n) {

    ans = 0
    for (let index = 1; index <= n; index++) {
        ans += (index ** 2)
    }

    return ans;
}

console.log(squaresSum(3))