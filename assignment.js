function anaToVori(ana){
    // error handle
    if(typeof ana !== "number"){
        return 'Please enter valided number';
    }
    let totalVori = ana / 16;
    return totalVori;
}
const totalAna = 32;
console.log(anaToVori(totalAna));

function pandaCost(singara, somocha, jhilapi){
    // error handle
    if(typeof (singara, somocha, jhilapi) !== "number"){
        return 'Please enter valided number';
    }

    let totalCost;

    const perKgSingara = 7 * singara;
    const perKgSomocha = 10 * somocha;
    const perKgJhilapi = 15 * jhilapi;
    const totalQuantity = perKgSingara + perKgSomocha + perKgJhilapi;

    totalCost = totalQuantity;
    
    return totalCost;
}
const quantity = pandaCost(2, 0, 2);
console.log(quantity);

function picnicBudget(people){
    // error handle
    if(typeof people !== "number"){
        return 'Please enter valided number';
    }
    if(people <= 0){
        return 'Please enter Positive number';
    }

    let perCost;
    if(people <= 100){
        perCost = people * 5000;
    }else if(people > 100 && people <= 200){
        let firstCost = 100 * 5000;
        let remainingCost = (people - 100) * 4000;
        
        perCost = firstCost + remainingCost;
    }
    else if(people > 200){
        let first100Cost = 100 * 5000;
        let second200Cost = 100 * 4000;
        let remainingCost = (people - 200) * 3000;

        perCost = first100Cost + second200Cost + remainingCost;
    }
    return perCost;
}
console.log(picnicBudget(1));

function oddFriend(friends){
    // error handeling
    if(typeof friends === String){
        return "Please enter a valid value";
    }

    let oddName = [];
    for(i = 0; i < friends.length; i++){
        let element = friends[i];
        if(element.length % 2 !== 0){
            oddName = oddName + element;
            lenghtOfCharacters = oddName.length;
            console.log(lenghtOfCharacters);

            break;
        }
    }
    return oddName;
}
const firends = ["Jubayer Hosain", "Uzza Mia", "Tanvir Mama", "Tamim", "Mosharof"];
console.log(oddFriend(firends));