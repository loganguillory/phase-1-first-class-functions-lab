// Code your solution in this file!
const returnFirstTwoDrivers = function(arrayOfDrivers){
    return arrayOfDrivers.slice(0, 2);
}

const returnLastTwoDrivers = function(arrayOfDrivers){
    return arrayOfDrivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(i){
    return function(fareMultiplier){
        return fareMultiplier * i
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)    

const selectDifferentDrivers = function(arrayOfDrivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers);
}