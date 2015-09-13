(function() {
    var curdate = utils.getDate();
    chrome.storage.sync.get("date", function(date) {
        if (date.date !== curdate) { //check if stored date is the same as current date
            utils.thing.value = ""; //if not, reset thing to empty string
            utils.setThingValue();
            chrome.storage.sync.set({ //and set stored date to current date
                date: (function() {
                    return utils.getDate(); 
                })()
            })
        }
    });
})()