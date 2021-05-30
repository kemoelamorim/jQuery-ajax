function consulta(){
    var cep = document.querySelector('#cep').value
    var url = `http://viacep.com.br/ws/${cep}/json/`
    $.ajax({
        url: url,
        typt: "GET",
        success: function(response){
            console.log(response)
            document.querySelector("#bairro").innerHTML = response.bairro
            document.querySelector("#localidade").innerHTML = response.localidade
            document.querySelector("#ddd").innerHTML = response.ddd
            document.querySelector("#logradouro").innerHTML = response.logradouro
            document.querySelector("#uf").innerHTML = response.uf
        }
    })
}