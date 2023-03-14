function browserHistory(obj, array) {
    let objectInput = Object.entries(obj);
    let browserName = objectInput[0][1];
    let openTabs = objectInput[1][1];
    let recentlyClosed = objectInput[2][1];
    let browserLogs = objectInput[3][1];   
    for (const element of array) {    
        if (element === 'Clear History and Cache')  {
            openTabs = [];
            recentlyClosed = [];
            browserLogs = [];
        } 
        let command = element.split(' ')[0];
        let browser = element.split(' ')[1];
        if (command === 'Open' && !openTabs.includes(browser)) {
            openTabs.push(browser)
            browserLogs.push(element);
        }
        else if (command === 'Close' && openTabs.includes(browser)) {
            let index = openTabs.indexOf(browser);
            openTabs.splice(index, 1);
            recentlyClosed.push(browser);
            browserLogs.push(element);
        }
    }
    console.log(browserName);
    console.log(`Open Tabs: ${openTabs.join(', ')}`);
    console.log(`Recently Closed: ${recentlyClosed.join(', ')} `);
    console.log(`Browser Logs: ${browserLogs.join(', ')}`);
}

// browserHistory({
//     "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//     "Recently Closed": ["Yahoo", "Gmail"],
//     "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
// },
//     ["Close Facebook", "Open StackOverFlow", "Open Google"]);

    browserHistory({"Browser Name":"Mozilla Firefox",
    "Open Tabs":["YouTube"],
    "Recently Closed":["Gmail", "Dropbox"],
    "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]);