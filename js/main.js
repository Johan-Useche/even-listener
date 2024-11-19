
function simulator() {
    const campoNombre = document.getElementById("nombres").value;
    const campoEmail = document.getElementById("email").value;
    const campoMontoaInvertir = parseInt(document.getElementById("inversion").value);
    const campoTiempodeInversión = document.getElementById("tiempo").value;
  
  
    const showNombres = document.getElementById("nombre-show");
    const showEmail = document.getElementById("email-show");
    const showTiempo = document.getElementById("tiempo-show");
    const showInteres = document.getElementById("interes-show");
    const showGanancia = document.getElementById("ganancia-show");
    const showTotal = document.getElementById("total-show");
  
    let conPost = document.querySelector("#post");
    let conPre = document.querySelector("#pre");
  
    
  
  
    conPost.classList.remove("disabled");
    conPre.classList.add("disabled");
  
    let tasaInteres = 0;
    let meses = 0;
  
    switch (campoTiempodeInversión) {
      case "1":
        tasaInteres = 0.008; 
        meses = 12;
        showTiempo.innerHTML = "(12 meses)";
        showInteres.innerHTML = "0.8% mensual";
        break;
      case "2":
        tasaInteres = 0.013; 
        meses = 24;
        showTiempo.innerHTML = "(24 meses)";
        showInteres.innerHTML = "1.3% mensual";
        break;
      case "3":
        tasaInteres = 0.017; 
        meses = 36;
        showTiempo.innerHTML = "(36 meses)";
        showInteres.innerHTML = "1.7% mensual";
        break;
      default:
        alert("Por favor, selecciona un tiempo de inversión válido.");
        return;
    }
  
   
    const gananciaMensual = campoMontoaInvertir * tasaInteres * meses;  
    const gananciaTotal = campoMontoaInvertir + gananciaMensual; 
  
    showNombres.innerHTML = campoNombre;
    showEmail.innerHTML = campoEmail;
    showGanancia.innerHTML = gananciaMensual; 
    showTotal.innerHTML =  gananciaTotal; 
  
  }
  
  const btn = document.getElementById("simulador-Btn");
  btn.addEventListener("click", simulator);
  
  
  