document.querySelectorAll('.delete').forEach(button => {
    button.addEventListener('click', function(event){

        event.preventDefault();

        const title = document.querySelector('h2')
        const wrapper = this.closest('.contato-wrapper');
        wrapper.remove();

        title.textContent = 'Nenhum Contato Cadastrado';

        
    })
});