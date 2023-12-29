class Table {

    constructor (){
        this.id = 1;
        this.arrayTable = [];
    }

    salvar() {
       let table = this.lerDados();

       if (this.validaCampo(table)) {
        this.adicionar(table);
        }
       
        this.listaTable();
        this.cancelar();
        
    }

    cancelar() {
        table.nomeUsuario = document.getElementById('nome').value = '';
        table.dataUsuario = document.getElementById('data_nascimento').value = '';
    }


    adicionar(table){
        this.arrayTable.push(table);
        this.id++;
        
    }

    listaTable(){
        let tbody = document.getElementById('tbody');
        tbody.innerText ='';

        for(let i = 0 ; i < this.arrayTable.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nomeUsuario = tr.insertCell();
            let td_dataUsuario = tr.insertCell();
            let td_excluirUsuario = tr.insertCell();

            td_id.innerText = this.arrayTable[i].id;
            td_nomeUsuario.innerText = this.arrayTable[i].nomeUsuario;
            td_dataUsuario.innerText = this.arrayTable[i].dataUsuario;
            //td_excluirUsuario.innerText = this.arrayTable[i].excluirUsuario;

            let imgDelete = document.createElement('img');
            imgDelete.src ='img/excluir.png';
            imgDelete.setAttribute('onclick','table.excluir ('+ this.arrayTable[i].id +')')

            td_excluirUsuario.appendChild(imgDelete);
      
        }
    }

    lerDados() {
       
        let table = {};
        table.id =this.id;
        table.nomeUsuario = document.getElementById('nome').value;
        table.dataUsuario = document.getElementById('data_nascimento').value;
        return table;
    }

    validaCampo (table){
        let msg = '';

         if(table.nomeUsuario == '') {
            msg += ' - Informe o Nome completo \n'
        }
        if(table.dataUsuario == '') {
            msg += ' - Informe a Data de Nascimento \n'
        }

        if(msg !='') {
            alert(msg)
            return false
        }
        return true;
    }
    
    excluir(id) {
        
        for (let i = 0 ; i < this.arrayTable.length; i++) {

            let tbody = document.getElementById('tbody');

            if(this.arrayTable[i].id == id) {
                this.arrayTable.splice(i,1);
                tbody.deleteRow(i);

            }
        }

    }
    

}
var table = new Table();





