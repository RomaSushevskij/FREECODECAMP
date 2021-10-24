const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // Only change code below this line
    /*const failureItems = [
        `<li class="text-warning">${result.failure[0]}</li>`,
        `<li class="text-warning">${result.failure[1]}</li>`,
        `<li class="text-warning">${result.failure[2]}</li>`
    ];*/
    const failureItems = result.failure.map(el => `<li class="text-warning">${el}</li>`)

    // Only change code above this line

    return failureItems;
}

const failuresList = makeList(result.failure);