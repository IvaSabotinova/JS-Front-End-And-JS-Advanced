function solve(input) {
    const num = input.shift();
    const initialCollection = input.splice(0, num);
    let sprintBoard = {};

    let points = {
        'ToDo': 0,
        'In Progress': 0,
        'Code Review': 0,
        'Done': 0,
    };

    for (let index = 0; index < num; index++) {
        const [assignee, taskId, title, status, estimatedPoints] = initialCollection[index].split(':');

        if (!sprintBoard.hasOwnProperty(assignee)) {
            sprintBoard[assignee] = {};
            sprintBoard[assignee].tasks = [];
        }
        sprintBoard[assignee].tasks.push({ taskId, title, status, estimatedPoints });
        points[status] += Number(estimatedPoints);
    }

    for (let index = 0; index < input.length; index++) {
        const command = input[index].split(':')[0];
        const assignee = input[index].split(':')[1];
        if (!sprintBoard.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
            continue;
        }
        if (command === 'Add New') {
            const [taskId, title, status, estimatedPoints] = input[index].split(':').slice(2);
            sprintBoard[assignee].tasks.push({ taskId, title, status, estimatedPoints })
            points[status] += Number(estimatedPoints);
        }
        else if (command === 'Change Status') {
            const [taskId, newStatus] = input[index].split(':').slice(2);
            const searchedTask = sprintBoard[assignee].tasks.find(x => x.taskId === taskId);
            if (!searchedTask) {
                console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                continue;
            }
            points[searchedTask.status] -= Number(searchedTask.estimatedPoints);
            searchedTask.status = newStatus;
            points[newStatus] += Number(searchedTask.estimatedPoints);
        }
        else if (command === 'Remove Task') {
            const [indexOfTask] = input[index].split(':').slice(2);
            if (Number(indexOfTask) < 0 || Number(indexOfTask) > sprintBoard[assignee].tasks.length - 1) {
                console.log(`Index is out of range!`);
                continue;
            }
            const [{ taskId, title, status, estimatedPoints }] = sprintBoard[assignee].tasks.splice(Number(indexOfTask), 1);
            points[status] -= Number(estimatedPoints);

        }
    }

    for (const key in points) {
        console.log(`${key === 'Done' ? `Done Points` : key}: ${points[key]}pts`);

    }
    const sumTasksPoints = points['ToDo'] + points['In Progress'] + points['Code Review']
    if (points['Done'] >= sumTasksPoints) {
        console.log(`Sprint was successful!`)
    }
    else {
        console.log(`Sprint was unsuccessful...`);
    }
}

solve([
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
]);

solve(['4',
    'Kiril:BOP-1213:Fix Typo:Done:1',
    'Peter:BOP-1214:New Products Page:In Progress:2',
    'Mariya:BOP-1215:Setup Routing:ToDo:8',
    'Georgi:BOP-1216:Add Business Card:Code Review:3',
    'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
    'Change Status:Georgi:BOP-1216:Done',
    'Change Status:Will:BOP-1212:In Progress',
    'Remove Task:Georgi:3',
    'Change Status:Mariya:BOP-1215:Done',]);