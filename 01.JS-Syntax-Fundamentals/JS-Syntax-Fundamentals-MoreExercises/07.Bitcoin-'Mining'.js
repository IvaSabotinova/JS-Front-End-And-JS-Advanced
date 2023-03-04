function bitcoinMining(gramsEachDay) {
    const bitcoinPrice = 11949.16;
    const gramGoldPrice = 67.51;
    let currentAmount = 0;
    let bitcoinsCount = 0;
    let daysCount = 0;
    let dayFirstBitCoin = 0;    

    for (let grams of gramsEachDay) {   
        daysCount++;  
        if (daysCount % 3 === 0) {
            grams *= 0.70;
        }
        currentAmount += grams * gramGoldPrice;

        while (currentAmount >= bitcoinPrice) {
            currentAmount -= bitcoinPrice;
            bitcoinsCount++;
            if (bitcoinsCount === 1) {
                dayFirstBitCoin = daysCount;
            }
        }
        
    }
    let output = `Bought bitcoins: ${bitcoinsCount}\n`;
    if (bitcoinsCount !== 0) {
        output += `Day of the first purchased bitcoin: ${dayFirstBitCoin}\n`;
    }
    output += `Left money: ${currentAmount.toFixed(2)} lv.`;
    console.log(output);
}



bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);