var BASE_URL = 'http://dummy.restapiexample.com/api/v1';

function deleteById() {
    //pergunte ao usuário se ele deseja remover aquele usuário (apresente o nome), exclua-o e remova-o da tabela

    var id_empregado = document.getElementById("id_emp").value;

    if (!id_empregado) {
        alert('Please, fill in the field =)');
        return;
    }

    if (confirm("Are you sure delete this employee?")) {
        $.ajax({
            url: BASE_URL + '/delete/' + id_empregado,
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

    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var salary = document.getElementById("salary").value;
    var age = document.getElementById("age").value;
    //tere o registro e mostre o elemento alterado na tabela junto aos elementos do GET.
    $.ajax({
        url: BASE_URL + '/update/' + id,
        type: 'PUT',
        dataType: 'JSON',
        data: { 'name': name, 'salary': salary, 'age': age },
        success: function(response) {
            console.log(response);
            insertEmployeeInTable(response);
            alert('Success! Yeeep');
        },
        error: function(msg) {
            console.log(msg);
            alert('Ooops, an error occour');
        }
    })
}


function post() {
    // insira o elemento e mostre o elemento inserido na tabela junto aos elementos do GET.
    //PROBLEMA
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var salary = document.getElementById("salary").value;
    var age = document.getElementById("age").value;

    $.ajax({
        url: BASE_URL + '/create',
        type: 'POST',
        dataType: 'JSON',
        data: { "id": id, 'employee_name': name, 'employee_salary': salary, 'employee_age': age },
        success: function(response) {
            console.log(response);
            insertEmployeeInTable(response);
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