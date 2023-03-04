function solve(groupNumber, groupType, weekday) {
    let totalPrice = 0;
    switch (weekday) {
        case 'Friday': switch (groupType) {
            case 'Students': totalPrice = groupNumber * 8.45;
                if (groupNumber >= 30) {
                    totalPrice *= 0.85;
                } break;
            case 'Business': totalPrice = groupNumber * 10.90;
                if (groupNumber >= 100) {
                    totalPrice -= 10 * 10.90;
                } break;
            case 'Regular': totalPrice = groupNumber * 15;
                if (groupNumber >= 10 && groupNumber <= 20) {
                    totalPrice *= 0.95;
                } break;
        } break;
        case 'Saturday': switch (groupType) {
            case 'Students': totalPrice = groupNumber * 9.80;
                if (groupNumber >= 30) {
                    totalPrice *= 0.85;
                } break;
            case 'Business': totalPrice = groupNumber * 15.60;
                if (groupNumber >= 100) {
                    totalPrice -= 10 * 15.60;
                } break;
            case 'Regular': totalPrice = groupNumber * 20;
                if (groupNumber >= 10 && groupNumber <= 20) {
                    totalPrice *= 0.95;
                } break;
        } break;
        case 'Sunday': switch (groupType) {
            case 'Students': totalPrice = groupNumber * 10.46;
                if (groupNumber >= 30) {
                    totalPrice *= 0.85;
                } break;
            case 'Business': totalPrice = groupNumber * 16;
                if (groupNumber >= 100) {
                    totalPrice -= 10 * 16;
                } break;
            case 'Regular': totalPrice = groupNumber * 22.50;
                if (groupNumber >= 10 && groupNumber <= 20) {
                    totalPrice *= 0.95;
                } break;
        } break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(30,
    "Students",
    "Sunday"
    );
solve(40,
    "Regular",
    "Saturday"
    );
