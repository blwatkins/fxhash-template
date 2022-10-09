// Random Library with fxhash

function randomFloat(min, max) {
    let r = (fxrand() * (max - min)) + min;
    return r;
}

function randomInt(min, max) {
    let r = randomFloat(min, max);
    let rInt = Math.floor(r);
    return rInt;
}

function randomBoolean() {
    let r = randomInt(0, 2);
    let boolean = true;

    if (r % 2 == 0) {
        boolean = false;
    }

    return boolean;
}

function randomBooleanChance(chanceOfTrue) {
    let r = randomFloat(0, 1);
    let boolean = true;

    if (r > chanceOfTrue) {
        boolean = false;
    }

    return boolean;
}
