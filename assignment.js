// Problem 1.
function anaToVori(input){
    if(typeof(input) != "number" || input < 0){
        return "Please enter a value in numbers";
    }else{
        const vori = input / 16 ;
        return vori;
    }
}
const ana = 64;
const vori = anaToVori(ana);
console.log(vori);

// Problem 2. 
function pandaCost(shingara, somucha, jilapi){
    if(typeof(shingara) != "number" || shingara < 0){
        return "Please enter a valid quantity of shingara";
    }else if(typeof(somucha) != "number" || somucha < 0){
        return "Please enter a valid quantity of somucha";
    }else if(typeof(jilapi) != "number" || jilapi < 0){
        return "Please enter a valid quantity of jilapi";
    }else{
        const shingaraPrice = 7;
        const somuchaPrice = 10;
        const jilapiPrice = 15;
        const totalShingaraPrice = shingara * shingaraPrice;    
        const totalSomuchaPrice = somucha * somuchaPrice;    
        const totalJipaliPrice = jilapi * jilapiPrice;
        const total = totalShingaraPrice + totalSomuchaPrice + totalJipaliPrice;
        return total;        
    }
}
const shingaraQuantity = 15;
const somuchaQuantity = 10;
const jilapiQuantity = 15;
const totalCost = pandaCost(shingaraQuantity, somuchaQuantity, jilapiQuantity);
console.log(totalCost);

//  Problem 3.
function picnicBudget(members){
    if(typeof(members) != "number" || members < 0){
        return 'Please enter a valid number of members'
    }
    else{
        if(members <= 100){
            const first100Cost = 5000;
            const totalFirst100Cost = members * first100Cost;
            return totalFirst100Cost;
        }
        else if(members <= 200){
            const first100Cost = 5000;
            const totalFirst100Cost = 100 * first100Cost;
            const second100Cost = 4000;
            const totalSecond100Cost = (members - 100) * second100Cost;
            return totalFirst100Cost + totalSecond100Cost;
        }
        else if(members > 200){
            const first100Cost = 5000;
            const second100Cost = 4000;
            const thirdCost = 3000;
            const totalSecond100Cost = 100 * second100Cost;
            const totalFirst100Cost = 100 * first100Cost;
            const totalThirdCost = (members - 200) * thirdCost;
            return totalFirst100Cost + totalSecond100Cost + totalThirdCost;
        }
    }
}
    const totalMembers = 1000;
    const totalPicnicCost = picnicBudget(totalMembers);
    console.log(totalPicnicCost);


// Problem 4.
function oddFriend(friends){
    if(Array.isArray(friends) == false){
        return 'please enter a valid array containing names'
    }
    else{
        for(const friend of friends){
            if(typeof(friend) != "string"){
                return 'Please enter the names of the array in string'
            }
            else{
                if(friend.length % 2 != 0){
                    return friend;
                }
            }                 
        }
        return "No odd friend found";    
    }
}

const friends = ['evan', 'nasima', "rumi", 'rifat', 'miad'];
const myOddFriend = oddFriend(friends);
console.log(myOddFriend);