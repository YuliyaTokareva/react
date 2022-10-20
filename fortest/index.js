const obj = {
    name: 'bob',
    age: 22,
}
// console.log('age' in obj)
// console.log(typeof obj['age'] !== 'undefined')
// console.log(Object.keys(obj).includes('age'))
// console.log(Object.keys(obj))

// for (let [key, value] of Object.entries(obj)) {
//     console.log(`${key}:`, value)
// }
// console.log(obj['age'] !== 'indefined')
// console.log(Object.keys(obj).includes('age'))
// console.log('age' in obj)
// console.log(Object.keys(obj).some((x) => x == 'age'))

// const arr = [1, 2, [3]]
// console.log([].concat(...arr))
// console.log(
//     arr.reduce((acc, el) => {
//         return acc.concat(el)
//     }, []),
// )

// const toSort = [0, 2, 4, 5, 10]
// console.log(toSort.sort((a, b) => a - b))
//const toSort = [0, 2, 4, 5, 10].splice()
// const newCopy = toSort.slice()
//console.log(toSort)
// function sendEmail(userName) {
//     console.log('Gromcode party invitation was sent to ' + userName + '!')
// }

//const arr = [1, 2, 3, 4]
// const res = arr.filter((el) => el % 2)
// console.log(obj)
//const arr1 = [1, 2, 3, 4, 3, 2]
// const arr2 = [5, 6, 3, 4]
// function res(a, b) {
//     return b.filter((element) => a.includes(element))
// }
// console.log(res(arr1, arr2))
function findNeedle(haystack) {
    const position = haystack.indexOf('needle')
    return position === -1
        ? "Your function didn't return anything"
        : `found the needle at position ${position}`
}

console.log(
    findNeedle([
        '283497238987234',
        'a dog',
        'a cat',
        'some random junk',
        'a piece of hay',
        'needle',
        'something somebody lost a while ago',
    ]),
)
