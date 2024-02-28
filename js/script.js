function verificarCPF() {

    let cpf = $("#cpf").val().trim();

    let cont = 0;
    let num = "0123456789";
    for (let i = 0; i < cpf.length; i++) {
        if (num.includes(cpf[i])) {
            cont++;
        }
    }
    if (cpf.length == 14 && cpf[3] == "." && cpf[7] == "." && cpf[11] == "-" && cont == 11) {  // 000.000.000-00
        $("#cpf").css("border-color", "green")
        return true;

    }
    else {
        if (cpf.length == 11 && cont == 11) { //00000000000
            formtCpf = cpf.substring(0, 3) + "." + cpf.substring(3, 6) + "." + cpf.substring(6, 9) + "-";
            $("#cpf").val(formtCpf);
            $("#cpf").css("border-color", "green")
            return true;
        }
        else {
            if (cpf == null) {
                $("#cpf").css("border-color", "red")
                return false;
            }
            else {
                $("#cpf").css("border-color", "red")
                return false;
            }
        }
    }
}

function verificarNome() {
    let nome = $("#nomeCompleto").val().trim();
    while (nome.includes("  ")) {
        nome = nome.replace("  ", " ");
    }
    let num = "0123456789"
    temnum = false;
    for (i = 0; i < nome.length; i++) {
        if (num.includes(nome[i])) {
            temnum = true;
        }
    }
    $("#nomeCompleto").val(nome);
    let partesNome = nome.split(" ");
    if (temnum = true) {
        $("#imsg").css("border-color", "red");
        $("#imsg").html("por favor apenas letras")
        return false;
    } else {
        if (partesNome.length == 2 && partesNome[partesNome.length - 1].length > 3) {
            $("#imsg").css("border-color", "green");
            return true;
        } else {
            if (partesNome.length == 3 && partesNome[partesNome.length - 1].length >= 2) {
                $("#imsg").html("Nome cadastrado: " + nome);
            } else {
                if (partesNome.length == 3) {
                    $("#imsg").html("Nome cadastrado: " + nome);
                } else {
                    if (partesNome.length > 3) {
                        $("#imsg").html("Nome cadastrado: " + partesNome[0] + " " + partesNome[partesNome.length - 1])
                    }
                }
            }
        }
    }
}
