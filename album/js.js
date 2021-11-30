function pos(n){
    
    album.n = n

    // todos virarem flex-0
    for(i of album.children){
        i.classList.remove("flex-1")
        i.classList.add("flex-0")
    }

    // não permite que saia do intervalor de fotos
    posicao = n
    posicao = Math.abs(posicao)
    posicao %= album.children.length

    // revela a foto da posição
    album.children[posicao].classList.add("flex-1")

}

pos(0)
next = () => pos(++album.n)
prev = () => pos(--album.n)