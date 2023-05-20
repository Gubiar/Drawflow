function selectTab(element) {
    const tabButtonList = document.getElementsByClassName("tab_button");
    const tabContentList = document.getElementsByClassName("tab_content");

    for (const cada of tabButtonList) {
        if (cada.getAttribute("index") == element.getAttribute("index")) {
            cada.classList.add("selected");
        } else {
            cada.classList.remove("selected");
        }
    }

    for (const cada of tabContentList) {
        if (cada.getAttribute("index") == element.getAttribute("index")) {
            cada.classList.remove("hidden");
        } else {
            cada.classList.add("hidden");
        }
    }
}
