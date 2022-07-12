function openTab(evt, tabName, tabType, className) {
    // Declare all variables
    let i, tabinfo, tab;


    // Get all elements with class="tabinfo" and hide them
    tabinfo = document.getElementsByClassName(className);
    for (i = 0; i < tabinfo.length; i++) {
        tabinfo[i].style.display = "none";
    }

    // Get all elements with class="tab" and remove the class "active"
    tab = document.getElementsByClassName(tabType);
    for (i = 0; i < tab.length; i++) {
        tab[i].className = tab[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function load() {
    document.getElementById('openskills').click();
}