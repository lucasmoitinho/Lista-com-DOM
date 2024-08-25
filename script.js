            function adicionarItem() {

                var input = document.getElementById('inputItem');
                var textoItem = input.value.trim();

                var input = document.getElementById('descricao');
                var descricaoItem = input.value.trim();

                var imagem = document.getElementById('arquivoimagem');
                var url = "https://www.google.com/search?q=" + textoItem;

                if (textoItem !== " " && descricaoItem !== " ") {
                    var lista = document.getElementById('listaTarefas');
                    var novoItem = document.createElement('li');
                    var pesquisar = document.createElement('a');
                    //esse comando abaixo define a classe das partes da lista as li como listyle
                    novoItem.classList.add('listyle');
                    pesquisar.href = url
                    pesquisar.textContent = textoItem;
                    novoItem.onclick = function(){
                        novoItem.classList.toggle('mostrar');
                    }
                    
                    var divbotaodescricao = document.createElement('div');
                    divbotaodescricao.classList.add('container2');
                    //cria div para botão e imagem

                    var imgmenu = document.createElement('img');
                    imgmenu.src = 'menu.png';
                    imgmenu.classList = 'imgmenu';
                    //criação da imagem menu

                    var imginput = document.createElement('img');
                    imginput.classList = 'imageinput';
                    imginput.style = 'padding-bottom: 10px; width: 60%; height:auto;'
                    imginput.src = ' ';
                    //criação da imagem menu

                    var dropdowncontent = document.createElement('div');
                    dropdowncontent.classList.add('dropdowncontent');
                    dropdowncontent.id = 'dropdown';
                    //cria div para elementos no dropdown

                    var descricao = document.createElement('p');
                    descricao.textContent = descricaoItem; 

                    var botaoRemover = document.createElement('button');
                    //esse comando abaixo define a classe do botão de remover como buttonr
                    botaoRemover.classList.add('buttonr');
                    botaoRemover.textContent = 'Remover';
                    botaoRemover.onclick = function() {
                        lista.removeChild(novoItem);
                    };
                    
                    divbotaodescricao.appendChild(imgmenu);
                    dropdowncontent.appendChild(descricao);
                    dropdowncontent.appendChild(imginput);
                    const reader = new FileReader(); 
                    reader.onload = function (e){
                        imginput.setAttribute('src',e.target.result)
                    }
                    reader.readAsDataURL(imagem.files[0]);
                    novoItem.appendChild(divbotaodescricao);
                    novoItem.appendChild(botaoRemover);
                    novoItem.appendChild(pesquisar);
                    novoItem.appendChild(dropdowncontent);
                    lista.appendChild(novoItem);
                    
                    input.value = '';
                } else {
                    alert('Por favor, insira um item válido.');
                }
            }
            
