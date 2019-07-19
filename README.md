English:
-- Put the select inside a container;
-- In the select structure, define an ID;
-- Mount the select normally;

pt_Br:
-- Colocar o select dentro de um recipiente;
-- Na estrutura do select, defina um ID;
-- Monte o select normalmente

<select name="" id="select-terceiro">
    <option value="v2">Alguns</option>
    <option value="v3">Parcial</option>
</select>

----------------------------------------
CSS--
English:
-- There is a default css, which can be modified as needed

pt_Br:
-- Há um css padrão, podendo ser modificado conforme sua necessidade

----------------------------------------
JS--
English:
-- There is a default css, which can be modified as needed:
    multi:true ->  will be multiple select, without this option will be a simple select;
    todos:true -> you will have the option to select "all";
    classSelect:["class1 class2 classe3"] -> Used to put class in "select";
    classLinhas:["linhaTal linhaSuper"] -> Used to place class in rows;
    classCheckbox:["checkTal checkSuper"] -> Used to put class in checkbox;
    classDescricao:["descricaoTal"] -> Used to put class in the "select" field;

pt_Br:
-- Utilizado jquery, tendo opções que podem ser personalizadas:
    multi:true -> será multiplo select, sem essa opção será um simples select;
    todos:true -> terá o opção de seleção "todos";
    classSelect:["class1 class2 classe3"] -> Utilizado para colocar class no "select";
    classLinhas:["linhaTal linhaSuper"] -> Utilizado para colocar class nas linhas;
    classCheckbox:["checkTal checkSuper"] -> Utilizado para colocar class nos checkbox;
    classDescricao:["descricaoTal"] -> Utilizado para colocar class no campo descricao do "select"


<!-- Simple call / Chamada simples: -->
<!-- ID select que será montado / ID select to be mounted -->
$('#select-terceiro').criaSelect({});

<!-- Multiple select, with "all" / Multiplo select, com "todos" -->
<!-- ID select que será montado / ID select to be mounted -->
$('#select-primeiro').criaSelect({
    multi:true,
    todos:true,
    classSelect:["class1 class2 classe3"],
    classLinhas:["linhaTal linhaSuper"],
    classCheckbox:["checkTal checkSuper"],
    classDescricao:["descricaoTal"]
});