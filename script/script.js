
function displayMenu(){

    let classList = document.getElementsByClassName("drop-down-menu")[0].classList
    let blankCover = document.getElementsByClassName("blank-cover")[0].classList
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
        blankCover.add("blank-cover-on")

    }
    else{
        classList.remove("drop-down-menu-display")
        blankCover.remove("blank-cover-on")
    }
} 
