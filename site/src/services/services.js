export function abreviar(nome){
    let resp = ''
    for(let i = 0; i < nome.length; i++){
        resp = resp + nome[i]
        if(nome[i] == ' '){
            if(nome[i+1] == 'd' && nome[i+2] == 'a')
                i = i + 3
            else if(nome[i+1] == 'd' && nome[i+2] == 'e')
                i = i + 3
            else if(nome[i+1] == 'd' && nome[i+2] == 'o')
                i = i + 3
            resp = resp + nome[i+1] + '.'
            break;
        }
    }
    return resp
}