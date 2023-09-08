    /* 
    Fazer requisição para solicitar token de acesso / verifica se existe na url da
    pagina caso nao ira direcionar para o cliente autorizar e assim gerar o token de 
    acesso/ logo é redirecionado para pagina home
    */

window.addEventListener('DOMContentLoaded',()=>{

    const urlReturn = document.location.hash;

    if(urlReturn.search(/(#access_token=)/ig) != -1){
        const urlReturncut = urlReturn.replace(/(#access_token=)/ig,'')
        const acess_token = urlReturncut.slice(0,30)
        localStorage.setItem('Id_user',JSON.stringify(acess_token) );
        window.location.href = "http://localhost:8080/home"

    }else{
        window.location.href = "https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=jf3m5uz1o2zpd8qpf5xgjoshstmk0w&redirect_uri=http://localhost:8080/&scope=user:read:follows&force_verify=true"
    }
    
    
});