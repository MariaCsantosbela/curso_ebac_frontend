$(document).ready(function(){

    $("#formulario-de-tarefa").on('submit', function(e) {
        e.preventDefault();
        const novaTarefa= $('#nova-tarefa').val();
        $("#lista-de-tarefas").append("<li >"+ novaTarefa +"</li>");
        $("#nova-tarefa").val("");
    });


        $("#lista-de-tarefas").on("click", "li", function(){
        $(this).toggleClass("tarefa-concluida");
    

    })




})