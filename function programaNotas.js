function programaNotas()
{
    var usuario, nombre, contrasena, cargo;
    var contadorIntentos = 0, cantidadEstudiantesGanaron = 0, cantidadEstudiantesPerdieron = 0, cantidadEstudiantes = 0, cantidadEstudiantesModulo =0, cantidadEstudiantes0y2 = 0, cantidadEstudiantes2y3 = 0, cantidadEstudiantes3y9 = 0, cantidadEstudiantesEntre4y47 = 0, cantidadEstudiantesEntre47y5 = 0;
    var usuarioLogueado = false;
    var promedioEdades = 0, promedioNotas = 0, promedioNotasModulo = 0;
    var modulo = "";    
    var sumaEdades = 0;
    var sumaPromedioNotas = 0;
  
    var Usuarios = 
    [
        {usuario: "Rector@miedu.com", nombre: "Eliza Zapata", contrasena: "Rector1*", cargo: "Rector", edad: "", modulo: {nombre: "", notas: {nota1:0, nota2:0, nota3:0}}},
        {usuario: "Coordinador@miedu.com", nombre: "Eliza Zapata", contrasena: "2*Coordinador", cargo: "Cordinador", edad: "", modulo: {nombre: "", notas: {nota1:0, nota2:0, nota3:0}}},
        {usuario: "Secretaria@miedu.com", nombre: "Eliza Zapata", contrasena: "**Secretaria*", cargo: "Secretaria", edad: "", modulo: {nombre: "", notas: {nota1:0, nota2:0, nota3:0}}},
        {usuario: "Docente@miedu.com", nombre: "Eliza Zapata", contrasena: "123Docente*", cargo: "Docente", edad: "", modulo: {nombre: "", notas: {nota1:0, nota2:0, nota3:0}}},
        {usuario: "Estudiante@miedu.com", nombre: "Eliza Zapata", contrasena: "Estudiante*", cargo: "Estudiante", edad: "22", modulo: {nombre: "Lógica", notas: {nota1:"2", nota2:"3", nota3:"4",}}},
        {usuario: "Estudiante1@miedu.com", nombre: "Eliza Zapata", contrasena: "Estudiante*1", cargo: "Estudiante", edad: "17", modulo: {nombre: "Base Datos", notas: {nota1:"2", nota2:"3", nota3:"4"}}},
        {usuario: "Estudiante2@miedu.com", nombre: "Eliza Zapata", contrasena: "Estudiante*2", cargo: "Estudiante", edad: "16", modulo: {nombre: "Programación", notas: {nota1:"2", nota2:"3", nota3:"4"}}},
        {usuario: "Estudiante3@miedu.com", nombre: "Eliza Zapata", contrasena: "Estudiante*3", cargo: "Estudiante", edad: "15", modulo: {nombre: "Lógica", notas: {nota1:"2", nota2:"3", nota3:"4"}}},
    ];
  
    ValidarUsuarioContrasena();
  
    if(usuarioLogueado == true){
        console.log("Bienvenido "+ nombre + " al sistema de notas, tu cargo es " + cargo);
      
        PedirModulo();
  
        if(modulo != "salir"){
            CalcularDatosParaImprimir();
            Imprimir();
        }
    }
  
    function ValidarUsuarioContrasena(){
        for(var i = 0; i <= 2; i++){  
            contadorIntentos = contadorIntentos + 1;
            usuario = window.prompt("Ingrese el usuario: ");    
            contrasena = window.prompt("Ingrese la contraseña: ");
    
            for(var a = 0; a < Usuarios.length; a++){
                var objUsuario = Usuarios[a];
        
                if(usuario == objUsuario.usuario && contrasena == objUsuario.contrasena){
                    usuario = objUsuario.usuario;
                    nombre = objUsuario.nombre;
                    contrasena = objUsuario.contrasena;
                    cargo = objUsuario.cargo;
            
                    usuarioLogueado = true;
                    break;
                }
            }
            
            if(usuarioLogueado == true)
            {    
                break;
            }
            else
            {
                console.log("usuario y contraseña incorrectos intente de nuevo.");
            }  
    
            if(contadorIntentos == 3 && usuarioLogueado == false)
            {
                console.log("Usuario bloqueado por 24 horas");
            }
        }
    }
  
    function PedirModulo(){
        //Menu = 1. Lógica. 2. Base Datos 3. Programación 4. Salir
    
        var opcion = window.prompt("Para generar el informe final ingrese 1 para Lógica, 2 para Base Datos, 3 para Programación o 4 para Salir.");

        switch (opcion)
        {
            case "1":
                modulo = "Lógica";
                break;

            case "2":
                modulo = "Base Datos";
                break;

            case "3":
                modulo = "Programación";
                break;

            default:
                modulo = "salir";
                break;
        }
    }
  
    function CalcularDatosParaImprimir(){
  
        for(var i = 0; i < Usuarios.length; i++)
        {   
            if("Estudiante" == Usuarios[i].cargo)
            {
                cantidadEstudiantes = cantidadEstudiantes + 1;
                sumaEdades = sumaEdades + Number(Usuarios[i].edad);
                var valorNota1Porcentaje = Usuarios[i].modulo.notas.nota1 * 0.2;
                var valorNota2Porcentaje = Usuarios[i].modulo.notas.nota2 * 0.35;
                var valorNota3Porcentaje = Usuarios[i].modulo.notas.nota3 * 0.45;
    
                var notaDefinitivaEstudiante = (valorNota1Porcentaje + valorNota2Porcentaje + valorNota3Porcentaje) / 3;
                var estudianteGano = notaDefinitivaEstudiante >= 3;
                sumaPromedioNotas = sumaPromedioNotas + notaDefinitivaEstudiante;
  
                if(estudianteGano)
                {
                    cantidadEstudiantesGanaron = cantidadEstudiantesGanaron + 1;
    
                    if(notaDefinitivaEstudiante >= 4.70)
                    {
                        cantidadEstudiantesEntre47y5 = cantidadEstudiantesEntre47y5 + 1;
                    }
                    else
                    {
                        if(notaDefinitivaEstudiante >= 4.00)
                        {
                            cantidadEstudiantesEntre4y47 = cantidadEstudiantesEntre4y47 + 1;
                        }
                        else
                        {
                            cantidadEstudiantes3y9 = cantidadEstudiantes3y9 +1;
                        }             
                    }
                }
                else
                {
                    cantidadEstudiantesPerdieron = cantidadEstudiantesPerdieron + 1;
    
                    if(notaDefinitivaEstudiante >= 2.01)
                    {
                        cantidadEstudiantes2y3 = cantidadEstudiantes2y3 + 1;
                    }
                    else
                    {
                        cantidadEstudiantes0y2 = cantidadEstudiantes0y2 + 1;
                    }
                }
  
                if(modulo == Usuarios[i].modulo.nombre)
                {
                    cantidadEstudiantesModulo = cantidadEstudiantesModulo + 1; 
                    promedioNotasModulo = promedioNotasModulo + notaDefinitivaEstudiante;
                }
            }
        }
    }
  
    function Imprimir(){
        debugger;
        promedioEdades = sumaEdades / cantidadEstudiantes;
        promedioNotas =  sumaPromedioNotas / cantidadEstudiantes;
        promedioNotasModulo = promedioNotasModulo / cantidadEstudiantesModulo;
    
        console.log("Promedio de edad del grupo: " + promedioEdades);
        console.log("Cantidad de estudiantes que ganaron: " + cantidadEstudiantesGanaron);
        console.log("Cantidad de estudiantes que perdieron: " + cantidadEstudiantesPerdieron);
        console.log("Numero de estudiantes por módulos: " + cantidadEstudiantesModulo);
        console.log("Promedio de notas por módulos: " + promedioNotasModulo);
        console.log("Cantidad de estudiantes con nota Definitiva entre 0.00 – 2.00 No pueden recuperar: " + cantidadEstudiantes0y2);
        console.log("Cantidad de estudiantes con nota Definitiva entre 2.01 – 2.99 pueden recuperar: " + cantidadEstudiantes2y3);
        console.log("Cantidad de estudiantes con nota Definitiva entre 3.00 – 3.99 Ganaron: " + cantidadEstudiantes3y9);
        console.log("Cantidad de estudiantes con nota Definitiva entre 4.00 – 4.69 Sobresalientes: " + cantidadEstudiantesEntre4y47);
        console.log("Cantidad de estudiantes con nota Definitiva entre 4.70 – 5.00 Excelentes: " + cantidadEstudiantesEntre47y5);
    }
}
programaNotas()