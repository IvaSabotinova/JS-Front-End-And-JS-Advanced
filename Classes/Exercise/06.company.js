class Company {
    #errorMessage;

    constructor() {
        this.departments = {};
        this.#errorMessage = 'Invalid input!'
    }

    addEmployee(name, salary, position, department) {
        Array.from(arguments).forEach(x => {
            if (x === '' || x === undefined || x === null) {
                throw new Error(this.#errorMessage)
            }
        })

        if (Number(salary) < 0) {
            throw new Error(this.#errorMessage)
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = {};
            this.departments[department].employees = [];
            this.departments[department].totalSalary = 0;
        }
        this.departments[department].employees.push({
            name: name,
            salary: Number(salary),
            position: position,
        });

        this.departments[department].totalSalary += Number(salary);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {

        //Finding avg salary of each department
        Object.keys(this.departments).forEach(key => {
            const avgDeptSalary = this.departments[key].employees.reduce((acc, current) =>
                (acc + current.salary), 0) / this.departments[key].employees.length;

            this.departments[key].avgSalary = avgDeptSalary;
        })

        const bestAvgSalaryDept = Object.entries(this.departments).sort((a, b) => b[1].avgSalary - a[1].avgSalary)[0];
        const bestAvgSalaryDeptName = bestAvgSalaryDept[0];
        const bestDeptAvgSalary = bestAvgSalaryDept[1].avgSalary.toFixed(2);
        const bestDeptEmployees = bestAvgSalaryDept[1].employees.sort((a,b)=> b.salary - a.salary || a.name.localeCompare(b.name))
       .map(x=>`${x.name} ${x.salary} ${x.position}`);


        return `Best Department is: ${bestAvgSalaryDeptName}\nAverage salary: ${bestDeptAvgSalary}\n${bestDeptEmployees.join('\n')}`;
    }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
