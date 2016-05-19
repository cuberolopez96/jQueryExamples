(function(){
    function addEfecto(elemento,accion){
        switch(accion){
            case "slideDown":
                elemento.slideDown(1000);
                break;
            case "slideUp":
                elemento.slideUp(1000);
                break;
            case "fadeIn":
                elemento.fadeIn(1000);
                break;
            case "fadeOut":
                elemento.fadeOut(1000);
                break;
            case "hide":
                elemento.hide(1000);
                break;
            case "show":
                elemento.show(1000);
                break;
        }
    }
    $(document).ready(function(){
        $('#add').click(function(event){
           
            
            event.preventDefault();
            
            var etiqueta = $('#nombre')[0].value; 
            var clase = $('#addclass')[0].value;
            var atributo = $('#attr')[0].value
            var elemento = $("<"+etiqueta+"></"+etiqueta+">");
            var id = $('#id')[0].value;
            
            elemento.addClass(clase);
           elemento.attr("id",id); elemento.attr(atributo,"hola");
            elemento.text("hola");
            elemento.appendTo("#vista");
        })
        $('#editaretiqueta').click(function(event){
            event.preventDefault();
            var selectEtiqueta = $($('#selectetiqueta')[0].value);
            addEfecto(selectEtiqueta,$('#effects1')[0].value);
        });
        $("#editarid").click(function(event){
            event.preventDefault();
            var selectId = $("#"+$("#selectId")[0].value);
            addEfecto(selectId,$("#effects2")[0].value);
        })
    })
})()