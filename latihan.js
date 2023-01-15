const array = []

for (let i = 1; i <= 500; i++){
    const result = i + (i - 1);
    array.push(result);
}
    //document.writeln(array);

class Deret{
    constructor(deret){
        this.array= deret;
    }

    getArrayIndex(array){
        let arrayIndex = [];
        for (let i = 0; i < array.length; i++ ){
            arrayIndex.push(this.array.indexOf(array[i]))
        }
        return arrayIndex;
    }

    getHighestDeret(){
        return this.array.sort((a, b) => b-a);
    }

    getValueIndex(index){
        return this.array[index]
    }
}

const deret1 = new Deret(array)

console.log(deret1.getArrayIndex([52, 55, 57, 68, 77]));
console.log(deret1.getValueIndex(0))
console.log(deret1.getHighestDeret())

