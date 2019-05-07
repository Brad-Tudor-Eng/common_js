const includesAll = (master, sample) => {
    //check to see if every element of sample is in master
    // O(N + K)
    const hash = {}

    for(number of master){
        hash[number] = hash[number] ? hash[number] + 1 : 1
    }

    for(number of sample){
        if(!hash[number]){ return false }
    }

    return true
}

const deepCopy = (arry) => {
    //returns a true deep copy without JSON.Parse / JSON.Stringify hack  
    return Array.from(arry, (el)=> Array.isArray(el) ? deepCopy(el) : el)
}

