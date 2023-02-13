$("#form").submit(function(){

    var name = $("#name").val();
    var email = $("#email").val();
    var asunto = $("#asunto").val();
    var descripcion = $("#descripcion").val();
    var validacion = [];
  
    if ($.trim(name)=== ''){
        validacion.push("Ingrese Nombre y Apellido");
    }
    if ($.trim(email)=== ''){
        validacion.push("Ingrese E-mail");
    }
    
    if ($.trim(asunto)=== ''){
        validacion.push("Ingrese Asunto");
    }
    if ($.trim(descripcion)=== ''){
        validacion.push("Ingrese Descripcion");
    }
   
    if (validacion.length > 0){
        alert("Se detectaron los siguientes errors:\n"+validacion.join("\n")+"\n"+"\nMiskevish Dimas");
        return false;
    
    }else {
        return true;
    }
    
      });

         