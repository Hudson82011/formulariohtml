


$(document).ready(function(){
    let limit = 2;

$('input.single-checkbox').on('change', function(evt) {
   if($(this).siblings(':checked').length >= limit) {
       this.checked = false;
   }
});
});





var myPokemons = [
    
   
  ];
  
  
    // Builds the HTML Table out of myList.
function buildHtmlTable(selector) {
    
    
    var columns = addAllColumnHeaders(myPokemons, selector);
  
    for (var i = 0; i < myPokemons.length; i++) {
      var row$ = $('<tr/>');
      for (var colIndex = 0; colIndex < columns.length; colIndex++) {
        var cellValue = myPokemons[i][columns[colIndex]];
        if (cellValue == null) cellValue = "";
        row$.append($('<td/>').html(cellValue));
      }
      $(selector).append(row$);
    }
  }
  
  // Adds a header row to the table and returns the set of columns.
  // Need to do union of keys from all records as some records may not contain
  // all records.
  function addAllColumnHeaders(myPokemons, selector) {
    var columnSet = [];
    var headerTr$ = $('<tr/>');
  
    for (var i = 0; i < myPokemons.length; i++) {
      var rowHash = myPokemons[i];
      for (var key in rowHash) {
        if ($.inArray(key, columnSet) == -1) {
          columnSet.push(key);
          headerTr$.append($('<th/>').html(key));
        }
      }
    }
    $(selector).append(headerTr$);
  
    return columnSet;
  }
  





let id=0;

  function submitform(){
    var rem=document.getElementById('tablePok');
    if(rem!=null){
        rem.innerHTML = ""
       
    }
    alert("Pokemon criado");

    

    var val = [];
        $('.single-checkbox:checked').each(function(i){
          val[i] = $(this).val();
        });

    var j = {
         "numero": 0, "nome": document.getElementById('campo-nome').value,
         "tipo1": val[0],
         "tipo2": val[1],
         "total": id, "hp":  document.getElementById('campo-vida').value,
         "ataque": document.getElementById('campo-ataque').value,
          "defesa":document.getElementById('campo-defesa').value,
         "ataque_especial": document.getElementById('campo-ataque-especial').value,
          "defesa_especial":document.getElementById('campo-defesa-especial').value,
         "velocidade": document.getElementById('campo-velocidade').value,
          "geracao": document.getElementById('geracao').value,
        "lendario":document.querySelector('input[name="lendario"]:checked').value, 
        "cor": document.querySelector('input[name="cor"]:checked').value,
        "altura_m":document.getElementById('campo-altura').value,
         "peso_kg":document.getElementById('campo-peso').value,
        "taxa_captura": document.getElementById('campo-tx').value,
    };
    id++;
    
    myPokemons.push(j);
    console.log(myPokemons);
    buildHtmlTable('#tablePok');
    
}

