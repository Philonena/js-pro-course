// you need to write a function, which accepts infinite number parameters
// and returns an array, which has the same parameter only once
function filter(...arr) {
    let array = []
    arr.forEach(element => {
        if (!array.find(el => el === element)) {
            array.push(element)
        }
    });
    return array
}