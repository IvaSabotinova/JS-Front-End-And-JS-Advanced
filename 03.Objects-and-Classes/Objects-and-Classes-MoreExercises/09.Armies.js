function armies(input) {
    let leaders = {};
    for (const item of input) {

        if (item.includes('arrives')) {
            let leader = item.slice(0, item.length - 8);
            if (!leaders.hasOwnProperty(leader)) {
                leaders[leader] = {};
                leaders[leader].armies = [];
                leaders[leader].totalArmyCount = 0;
            }
        }
        else if (item.includes(':')) {
            let index = item.indexOf(':');
            let leaderName = item.slice(0, index);
            let army = item.slice(index + 2).split(', ')[0];
            let armyCount = Number(item.slice(index + 2).split(', ')[1]);
            if (leaders.hasOwnProperty(leaderName)) {
                leaders[leaderName].armies.push({ armyName: army, armyCount: armyCount });
                leaders[leaderName].totalArmyCount += armyCount;
            }
        }
        else if (item.includes('+')) {
            let index = item.indexOf('+');
            let armyName = item.slice(0, index - 1);
            let armyAddCount = Number(item.slice(index + 2));
            for (const key in leaders) {
                let foundArmy = leaders[key].armies.find(x => x.armyName === armyName);
                if (foundArmy) {
                    foundArmy.armyCount += armyAddCount;
                    leaders[key].totalArmyCount += armyAddCount;
                }
            }
        }
        else if (item.includes('defeated')) {
            let index = item.indexOf('defeated');
            let leaderName = item.slice(0, index - 1);
            delete leaders[leaderName];
        }
    }

    for (const [leaderName, _armyInfo] of Object.entries(leaders).sort((a, b) => b[1].totalArmyCount - a[1].totalArmyCount)) {
        console.log(`${leaderName}: ${leaders[leaderName].totalArmyCount}`);
        for (const army of leaders[leaderName].armies.sort((a,b) => b.armyCount - a.armyCount)) {
            console.log(`>>> ${army.armyName} - ${army.armyCount}`);
        }
    }
}



armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);

armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']);