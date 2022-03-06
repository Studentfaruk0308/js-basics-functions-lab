function distanceFromHqInBlocks (someValue) {
        return (Math.abs(someValue - 42));
  }

function distanceFromHqInFeet (someValue) {
    return ((Math.abs(someValue - 42))*264);
}

function distanceTravelledInFeet (x, y) {
    return ((Math.abs(x-y))*264);
}

function calculatesFarePrice(x, y){
    
    if (distanceTravelledInFeet(x,y) <= 400){
        return 0;
    }
    else if(distanceFromHqInFeet(x,y) >400 && distanceTravelledInFeet(x,y) <=2000){
        return ((distanceTravelledInFeet(x,y))-400) * 0.02;
    } 
    else if(distanceTravelledInFeet(x,y) >2000 && distanceTravelledInFeet(x,y) < 2500){
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}

