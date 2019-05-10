var BASE_URL = 'http://dummy.restapiexample.com/api/v1';

function deleteById() {

    var id_employee = document.getElementById("id_emp").value;

    if (!id_employee) {
        alert('Please, fill in the field =)');
        return;
    }

    if (confirm("Are you sure delete this employee?")) {
        $.ajax({
            url: BASE_URL + '/delete/' + id_employee,
            type: 'DELETE',
            success: function(response) {
                alert('Employee deleted');
                console.log(response);
            },
            error: function(msg) {
                alert('Not deleted');
                console.log(msg);
            }
        })
    }

}

function deleteByName() {
    //pergunte ao usuário se ele deseja remover aquele usuário (apresente o nome), exclua-o e remova-o da tabela
    //buscar nao
    if (confirm("Are you sure delete this employee?")) {
        $.ajax({
            url: BASE_URL + '/delete/2',
            type: 'DELETE',
            success: function(response) {
                console.log(response);
            },
            error: function(msg) {
                console.log(msg);
            }
        })
    }
}

function getAll() {

    $.ajax({
        url: BASE_URL + '/employees',
        type: 'GET',
        success: function(reponse) {

            reponse = JSON.parse(reponse);
            for (i = 0; i <= 10; i++) {
                console.log(reponse[i]);
                insertEmployeeInTable(reponse[i]);
            }
        },
        error: function(msg) {
            console.log(msg);
        }
    })

}


function get() {

    var id_empregado = document.getElementById("id_employee").value;

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
            document.getElementById("info_employee").innerHTML = '<b>Id:</b>' + response['id'] + '</br>' +
                '<b>Name:</b>' + response['employee_name'] + '</br>' +
                '<b>Salary:</b>' + response['employee_salary'] + '</br>' +
                '<b>Age:</b>' + response['employee_age'] + '</br>';
        },
        error: function(msg) {
            alert('Oooops employee not found ;(');
            return;
        }
    })

    document.getElementById("id_employee").value = "";

}

function put() {
    //nao ta funcionando
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var salary = document.getElementById("salary").value;
    var age = document.getElementById("age").value;

    $.ajax({
        url: BASE_URL + '/update/' + id,
        data: JSON.stringify({ 'name': name, 'salary': salary, 'age': age }),
        dataType: "json",
        contentType: "json",
        success: function(response) {
            var employee = {
                "employee_name": response['name'],
                "employee_salary": response['salary'],
                "id": response['id']
            };
            insertEmployeeInTable(employee);
            alert('Success! Yeeep');
        },
        error: function(msg) {
            console.log(msg);
            alert('Ooops, an error occour');
        }
    })
}


function post() {

    var name = document.getElementById("name").value;
    var salary = document.getElementById("salary").value;
    var age = document.getElementById("age").value;
    var id = document.getElementById("id").value;
    $.ajax({
        url: BASE_URL + '/create',
        type: 'POST',
        data: JSON.stringify({
            "name": name,
            "salary": salary,
            "age": age,
            "id": id
        }),
        dataType: "json",
        contentType: "json",
        success: function(response) {
            console.log(response);
            var employee = {
                "employee_name": response['name'],
                "employee_salary": response['salary'],
                "id": response['id']
            };
            insertEmployeeInTable(employee);
            alert('Success! Yeeep');
        },
        error: function(msg) {
            console.log(msg);
            alert('Não foi possível criar o usuário');
        }
    })

}

function insertEmployeeInTable(employee) {
    var table = document.getElementById("empregados").getElementsByTagName('tbody')[0];
    var row = table.insertRow(0);
    row.insertCell(0).innerHTML = employee['id'];
    row.insertCell(1).innerHTML = employee['employee_name'];
    row.insertCell(2).innerHTML = employee['employee_salary'];
}