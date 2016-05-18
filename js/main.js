(function(){
    $(document).ready(function(){
        $('#add').click(function(event){
           
            
            event.preventDefault();
            
            var etiqueta = $('#nombre')[0].value; 
            var clase = $('#addclass')[0].value;
            var atributo = $('#attr')[0].value
            var elemento = $("<"+etiqueta+"></"+etiqueta+">");
            var id = $('#id')[0].value
            
            elemento.addClass(clase);
           elemento.attr("id",id); elemento.attr(atributo,"hola");
            elemento.text("hola");
            elemento.appendTo("#vista");
        })
    })
})()