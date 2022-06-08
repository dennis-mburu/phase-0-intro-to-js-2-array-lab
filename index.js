// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name = "Ralph"){
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name = "Bob"){
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}

function appendCat(name='Broom'){
    const cats2 = [...cats, name];
    return cats2;
}

function prependCat(name='Arnold'){
    const cats3 = [name, ...cats];
    return cats3;
}

function removeLastCat(){
    const cats4 = cats.slice(0, -1);
    return cats4;    
}

function removeFirstCat(){
    const cats5 = cats.slice(1)
    return cats5;
}


// let cats = ["Milo", "Otis", "Garfield"];
// cats.push("Ralph");
// console.log(cats);
// cats.unshift("Bob");
// console.log(cats);
// cats.pop();
// console.log(cats);
// cats.shift();
// console.log(cats);
// const cats2 = [...cats, "Broom"];
// console.log(cats);
// const cats3=["Arnold", ...cats];
// console.log(cats);
// cats.slice(-1);
// console.log(cats);
// cats.slice(0,1);
// console.log(cats);

    // return ([...cats, name]);

    // return ([name, ...cats]);
