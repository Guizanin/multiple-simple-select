
$.fn.criaSelect = function(options) { 
  var idSelect = $(this).attr("id");
  // var da nova estrutura
  // var the new structure
  var conteudo = '<divSelect class="selectCustom '+idSelect+'"><topo class="header"><titulo></titulo><icone class="icon-select">></icone></topo><input type="checkbox" class="openCloseLista"><lista></lista></divSelect>';
  // insere a nova estrutura do componente
  // inserts the new component structure
  $(this).parent().prepend(conteudo);
  // monta a estrutura fake do select
  //mounts fake select structure
  if(options.todos == true){
    $(this).prev().find("lista").prepend(
      '<todos data-tipo="todos" class="'+options.classLinhas+'"><label for="inp0-'+idSelect+'"></label><input id="inp0-'+idSelect+'" type="checkbox"><descricao>Todos</descricao></todos>'
    );
  }
  //monta as linhas do componente
  // mounts the lines the component
  $.each($("#"+idSelect+" option"),function(index){
    $("."+idSelect+"  lista").append(
      '<linha data-tipo="'+ $(this).val() +'"class="'+options.classLinhas+'"><label for="inp'+(index+1)+'-'+idSelect+'"></label><input id="inp'+(index+1)+'-'+idSelect+'" type="checkbox" value="'+ $(this).val() +'"><descricao>'+$(this).text()+'</descricao></linha>'
    )
  });
  // pega o texto do primero elemento e coloca no titulo fake select
  // take the text of the first element and put in the title fake select
  $("."+idSelect+" titulo").text($("."+idSelect+" lista").children().first().find("descricao").text());
// remove o elemento select passado na chamada da função
// remove the element select that passed in the function call
  $(this).remove();
  // vericação dos clicks nas linhas
  // checking clicks on rows
  $("."+idSelect+" label").on("click", function(){
    var $this = $(this);
    var $length = $this.closest("lista").find("input").length;
    var $linha = $this.parent();
    var $input = $this.next("input");
    if(options.multi == true){
      var $todos = $this.closest("lista").find("todos").find("input");
      // precisou utilizar o setTimeut para esperar o clik realizar a ação
      //needed to use setTimeout to wait for the click to perform the action
      setTimeout(function(){
        // se linhas tiver a class "todos" e seu input for checked
        if($($linha).attr("data-tipo") == "todos" && $($input).prop("checked") == true){
          $($linha).nextAll().find("input").prop("checked", "true");
          return
        }
        // se linhas tiver a class "todos" e seu input for checked false 
        // if rows have the class "todos" and its input is checked
        if($($linha).attr("data-tipo") == "todos" && $($input).prop("checked") == ""){
          $($linha).nextAll().find("input").prop("checked", "");
          return
        }
        // menor e todos checked true, desmarca "todos"
        // smaller and "todos" checked true, uncheck "todos"
        if($($linha).attr("data-tipo") != "todos" && $($this).closest("lista").find("input:checked").length <= $length && $($todos).prop("checked") == true) {
          $($todos).prop("checked","")
          return
        }
        // maior e "todos" checked false, marca "todos"
        // greater and "todos" checked false, mark "todos"
        if($($linha).attr("data-tipo") != "todos" && $($this).closest("lista").find("input:checked").length == $length -1  && $($todos).prop("checked") == "") {
          $($todos).prop("checked","true");
          return
        }
      }, 10);
      setTimeout(function(){
        // se "todos" estiver checked pega sua "descricao" e coloca no titulo
        // if "all" is checked take your "description" and put in the title
        if(($($todos).prop("checked") == true) || ($("."+idSelect+ " todos").length == 0) && $this.closest("lista").find("input:checked").length == $length){
          $("."+idSelect+" titulo").text("Todos");
          return;
        }
        // se ("todos" estiver checked false ou não existir) && input:checked for maior que 0 e menor que o total de input
        // f ("todos" has checked false or doesn't exist) && the numero of input:checked is greater than 0 and less than the total input
        if(($($todos).prop("checked") == "" || $("."+idSelect+ " todos").length == 0) && $this.closest("lista").find("input:checked").length > 1 && $this.closest("lista").find("input:checked").length < $length){
          $("."+idSelect+" titulo").text("Selecionado "+ $this.closest("lista").find("input:checked").length+"/"+($this.closest("lista").find("input").length-1))
          return;
        }
        // se ("todos" estiver checked false ou não existir)  && o numero input:checked for igual a 0
        // if ("todos" has checked false or doesn't exist) &&  the number of input:checked is equal to 0
        if((($($todos).prop("checked") == "" || $("."+idSelect+ " todos").length == 0) && $this.closest("lista").find("input:checked").length == 0)){
          $("."+idSelect+" titulo").text("Nenhum")
          return;
        }
        // se ("todos" estiver checked false ou não existir)  && o numero de input:checked for igual a 1
        // if ("todos" has checked false or doesn't exist) && the number of input:checked is equal to 1
        if(($($todos).prop("checked") == "" || $("."+idSelect+ " todos").length == 0 ) && $this.closest("lista").find("input:checked").length == 1){
          $("."+idSelect+" titulo").text($("."+idSelect+" linha input:checked").next("descricao").text());
          return;
        }
      }, 10);
    }else{
      setTimeout(function(){
        $("."+idSelect+ " lista input:checked").prop("checked", "");
        $($this).next("input").prop("checked",true);
        $("."+idSelect+" titulo").text($("."+idSelect+ " lista input:checked").next("descricao").text());
      }, 10); 
    }
  });
  // click no primeiro elemento do fake select
  // click the first element of fake select
  $("."+idSelect+" lista").children().first().find("label").click();
  // fecha o select aberto ao tirar o mouse da lista
  // closes open select when mouse is removed from list
  $('.'+idSelect+" lista").on('mouseout', function(){
    $('.'+idSelect+" .openCloseLista").click()
  });
};   

   