
function displayMenu(){

    let classList = document.getElementsByClassName("drop-down-menu")[0].classList
    let list = Array.from(classList)

    let checker = list.filter(function (a) {

        if (a == "drop-down-menu-display")
        {
            return a;
        }
    })

    if (checker != "drop-down-menu-display")
    {
        classList.add("drop-down-menu-display")
    }
    else{
        classList.remove("drop-down-menu-display")
    }
} 
