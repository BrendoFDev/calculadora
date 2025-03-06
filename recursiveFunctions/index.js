const contador = (max) => {
    const valor = 0;
    if(valor>=max) return;

    contador(max);
    valor +=1;
}

contador(10);