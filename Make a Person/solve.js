const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFirstName = () => {
        return firstAndLast.split(" ")[0]
    };

    this.getLastName = () => {
        return firstAndLast.split(" ")[1]
    };

    this.getFullName = function() {
        return firstAndLast;
    };

    this.setFirstName = (first) => {
        firstAndLast = firstAndLast.split(" ");
        firstAndLast.splice(0, 1, first);
        firstAndLast = firstAndLast.join(" ")
    };

    this.setLastName = (last) => {
        firstAndLast = firstAndLast.split(" ");
        firstAndLast.splice(1, 1, last);
        firstAndLast = firstAndLast.join(" ")
    };


    this.setFullName = (newfirstAndLast) => {
        firstAndLast = firstAndLast.split(" ");
        firstAndLast.splice(0, 2, newfirstAndLast);
        firstAndLast = firstAndLast.join("")
    }


};
