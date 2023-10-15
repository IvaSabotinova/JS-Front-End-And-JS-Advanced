function ticketsDatabase(ticketsArray, sortingCriterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let tickets = [];
    for (const ticket of ticketsArray) {
        const [destination, price, status] = ticket.split('|');
        let newTicket = new Ticket(destination, Number(price), status);
        tickets.push(newTicket);
    }

    return tickets.sort((a, b) => {
        if (sortingCriterion === 'destination') {
           return  a.destination.localeCompare(b.destination);
        }
        else if (sortingCriterion === 'price') {
           return a.price - b.price;
        }
        else {
           return  a.status.localeCompare(b.status);
        }
    })

}

console.log(ticketsDatabase(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'));

console.log(ticketsDatabase(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'));
