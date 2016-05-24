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
            
            var texto = $('#texto')[0].value;
            
            var elemento = $("<"+etiqueta+"></"+etiqueta+">");
            var id = $('#id')[0].value;
            
            elemento.addClass(clase);
            
          if(id.length !== 0){ elemento.attr("id",id);}
           
            elemento.text(texto);
            elemento.appendTo("#vista");
        })
        $('#editaretiqueta').click(function(event){
            event.preventDefault();
            var selectEtiqueta = $("#vista "+$('#selectetiqueta')[0].value);
            addEfecto(selectEtiqueta,$('#effects1')[0].value);
        });
        $("#editarid").click(function(event){
            event.preventDefault();
            var selectId = $("#"+$("#selectId")[0].value);
            addEfecto(selectId,$("#effects2")[0].value);
        })
        $("#editclass").click(function(event){
            event.preventDefault();
            var inputclass=$('.'+$('#inputclass')[0].value);
            addEfecto(inputclass,$('#effects3')[0].value);
        })
    })
})()