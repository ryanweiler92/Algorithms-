//Remove duplicate members from an array

function removeDuplicate(array){

    let memberArray = []

    for (const name of array){
        if (!memberArray.includes(name)){
            memberArray.push(name)
        }
    }
return memberArray;
}

console.log(removeDuplicate(['Ryan', 'Fred', 'Sol', 'Ryan', 'Shake', 'Frylock', 'Ryan', 'Amanda']))