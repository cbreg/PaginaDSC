var BASE_URL = 'http://dummy.restapiexample.com/api/v1';

function listAll() {
    var employees = getAll();
    var old_tbody = document.getElementById('empregados').getElementsByTagName('tbody')[0];
    var new_tbody = document.createElement('tbody');
    old_tbody.parentNode.replaceChild(new_tbody, old_tbody);
    if (employees) {
        for (i = 0; i < employees.length; i++) {
            insertEmployeeInTable(employees[i]);
        }
    }

}

function getAll() {
    var jqXHR = $.ajax({
        url: BASE_URL + '/employees',
        type: 'GET',
        async: false,
        error: function(msg) {
            console.log(msg);
        }
    })
    return JSON.parse(jqXHR.responseText);
}

function insertEmployeeInTable(employee) {
    var table = document.getElementById('empregados').getElementsByTagName('tbody')[0];
    var row = table.insertRow(0);
    row.insertCell(0).innerHTML = employee['id'];
    row.insertCell(1).innerHTML = employee['employee_name'];
    row.insertCell(2).innerHTML = employee['employee_salary'];
}

function deleteById() {
    var id_employee = document.getElementById('id_emp').value;

    if (!id_employee) {
        alert('Please, fill in the field =)');
        return;
    }
    deleteEmployee(id_employee);
    document.getElementById('id_emp').value = '';
}

function deleteByName() {
    var name_employee = document.getElementById('name_emp').value;
    var employee = searchEmployeeByName(name_employee);

    if (employee.length > 0) {
        deleteEmployee(employee[0]['id']);
    } else {
        alert('Employee not found');
    }
    document.getElementById('name_emp').value = '';
}

function searchEmployeeByName(name) {
    var employees = getAll();
    return employees.filter(
        function(emp) { return emp.employee_name == name }
    );
}

function deleteEmployee(id_employee) {
    if (confirm('Are you sure delete this employee?')) {
        $.ajax({
            url: BASE_URL + '/delete/' + id_employee,
            type: 'DELETE',
            success: function(response) {
                alert('Employee deleted');
                listAll();
                console.log(response);
            },
            error: function(msg) {
                alert('Not deleted');
                console.log(msg);
            }
        })
    }
}

function get() {
    var id_empregado = document.getElementById('id_employee').value;

    if (!id_empregado) {
        alert('Please, fill in the field =)');
        return;
    }
    $.ajax({
        url: BASE_URL + '/employee/' + id_empregado,
        type: 'GET',
        success: function(response) {
            response = JSON.parse(response);

            if (!response) {
                alert('Oooops employee not found ;(');
                return;
            }
            document.getElementById('info_employee').innerHTML = '<b>Id:</b>' + response['id'] + '</br>' +
                '<b>Name:</b>' + response['employee_name'] + '</br>' +
                '<b>Salary:</b>' + response['employee_salary'] + '</br>' +
                '<b>Age:</b>' + response['employee_age'] + '</br>';
        },
        error: function(msg) {
            alert('Oooops employee not found ;(');
            return;
        }
    })

    document.getElementById('id_employee').value = '';

}

function put() {
    var id = document.getElementById('id').value;
    var data = {
        'name': document.getElementById('name').value,
        'salary': document.getElementById('salary').value,
        'age': document.getElementById('age').value
    };
    $.ajax({
        url: BASE_URL + '/update/' + id,
        data: JSON.stringify(data),
        type: 'PUT',
        success: function(response) {
            clearEmployee();
            listAll();
            alert('Success! Yeeep');
        },
        error: function(msg) {
            alert('Ooops, an error occour ;(. Error: ' + msg);
        }
    })
}


function post() {
    var data = {
        'name': document.getElementById('name').value,
        'salary': document.getElementById('salary').value,
        'age': document.getElementById('age').value,
        'id': document.getElementById('id').value
    };
    $.ajax({
        url: BASE_URL + '/create',
        type: 'POST',
        data: JSON.stringify(data),
        dataType: 'json',
        contentType: 'json',
        success: function(response) {
            console.log(response);
            clearEmployee();
            listAll();
            alert('Success! Yeeep');
        },
        error: function(msg) {
            alert('Ooops, an error occour ;(. Error: ' + JSON.stringify(msg));
        }
    })

}

function clearEmployee() {
    document.getElementById('name').value = '';
    document.getElementById('salary').value = '';
    document.getElementById('age').value = '';
    document.getElementById('id').value = '';
}