function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    function getT(h) {
        return Math.round(2 * Math.PI * Math.sqrt(((h + earthRadius) ** 3) / GM))
    }

    return arr.map(i => {
        let j = {...i};
        j.orbitalPeriod = getT(j.avgAlt)
        delete j.avgAlt;
        return j
    })

}

console.log(orbitalPeriod([{name: "sputnik", avgAlt: 35873.5553}]))



























