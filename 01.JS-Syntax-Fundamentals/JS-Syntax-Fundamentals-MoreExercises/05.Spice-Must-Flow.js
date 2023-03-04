function spiceMustFlow(dailyYield) {
    let daysCount = 0;
    let amountExtracted = 0;
    const consumedByWorkers = 26;

    while (dailyYield >= 100) {
        amountExtracted += dailyYield - consumedByWorkers;
        dailyYield -= 10;
        daysCount++;
    }
    if (amountExtracted >= consumedByWorkers) {
        amountExtracted -= consumedByWorkers;
    }

    console.log(daysCount);
    console.log(amountExtracted);
}


spiceMustFlow(111);
spiceMustFlow(450);
spiceMustFlow(50);