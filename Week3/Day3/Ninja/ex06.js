function createCalendar(year, month) {
    // month: 1-based (1=January, 12=December)
    const table = document.createElement('table');
    const days = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

    // Create table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    days.forEach(day => {
        const th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Get first day of the month (0=Sunday, 1=Monday, ...)
    let date = new Date(year, month - 1, 1);
    let firstDay = (date.getDay() + 6) % 7; // Make Monday=0, Sunday=6

    // Get number of days in the month
    let lastDate = new Date(year, month, 0).getDate();

    // Create table body
    const tbody = document.createElement('tbody');
    let tr = document.createElement('tr');

    // Fill initial empty cells
    for (let i = 0; i < firstDay; i++) {
        tr.appendChild(document.createElement('td'));
    }

    // Fill the days
    for (let day = 1; day <= lastDate; day++) {
        const td = document.createElement('td');
        td.textContent = day;
        tr.appendChild(td);

        // If Sunday, start a new row
        if ((firstDay + day) % 7 === 0) {
            tbody.appendChild(tr);
            tr = document.createElement('tr');
        }
    }

    // Fill remaining empty cells in the last row
    if (tr.children.length > 0) {
        while (tr.children.length < 7) {
            tr.appendChild(document.createElement('td'));
        }
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    document.body.appendChild(table);
}

createCalendar(2012, 9);