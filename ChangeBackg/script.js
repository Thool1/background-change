const button = document.querySelector('button')
const body = document.querySelector('body')
let i = 0


button.addEventListener('click', () => {
    let colors = ['red','blue','green','yellow','purple','orange','brown','black','white']
    body.style.background = colors[i++]
    if(i>colors.length){
        i=0
    } 
    
})



// const hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
// function getCharacter(index) {
//     return hexCharacters[index]
// }
// function generateJustOneColor() {
//     let hexColorRep = "#"
//     for (let position = 0; position < 6; position++) {
//         hexColorRep += getCharacter(position)
//     }
//     return hexColorRep
// }
// console.log( generateJustOneColor() )






