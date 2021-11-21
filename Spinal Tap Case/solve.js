function spinalCase(str) {
    let a = str.replace(/([a-z])([A-Z])/g, "$1 $2")
    let b = a.replace(/[\s|_]/g, "-")
    return b.toLowerCase()


}

spinalCase('This Is Spinal Tap');