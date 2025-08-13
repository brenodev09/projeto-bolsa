
// cards das fileiras
document.addEventListener('DOMContentLoaded', () =>{
    const dados1 =[
        {bagName: 'Backpack SandraFull', preco: '80 USD', imagem: '/img/bolsas/1.webp' },
        {bagName: 'Backpack EmilyFull', preco: '90 USD', imagem: '/img/bolsas/2.webp' },
        {bagName: 'Backpack NatalieFull', preco: '95 USD', imagem: '/img/bolsas/3.webp' },
        {bagName: 'Backpack LilyFull', preco: '110 USD', imagem: '/img/bolsas/4.webp' },
    ]

    const dados2 = [
        {bagName: 'Backpack AnaFull', preco: '50 USD', imagem: '/img/bolsas/5.webp' },
        {bagName: 'Backpack JennyFull', preco: '70 USD', imagem: '/img/bolsas/6.webp' },
        {bagName: 'Backpack CatherineFull', preco: '125 USD', imagem: '/img/bolsas/7.webp' },
        {bagName: 'Backpack MaryFull', preco: '150 USD', imagem: '/img/bolsas/8.webp' },
    ]



    const fileira1 = document.querySelector('.fileira1')
    const fileira2 = document.querySelector('.fileira2')

    dados1.forEach(bags1 =>{
        const cardBag = document.createElement('div')
        cardBag.classList.add('card-bag')

        cardBag.innerHTML = `
            <img src = "${bags1.imagem}" alt = "img bolsa ${bags1.bagName}">
            <h3 style="text-align: center;"> ${bags1.bagName}</h3>
            <p style="text-align: center; font-size: 0.95rem"> ${bags1.preco}</p>
            <button >Comprar</button>
        `

        fileira1.appendChild(cardBag)
    })

     dados2.forEach(bags2 =>{
        const cardBag = document.createElement('div')
        cardBag.classList.add('card-bag')

        cardBag.innerHTML = `
            <img src = "${bags2.imagem}" alt = "img bolsa ${bags2.bagName}">
            <h3 style="text-align: center;"> ${bags2.bagName}</h3>
            <p style="text-align: center; font-size: 0.95rem"> ${bags2.preco}</p>
            <button >Comprar</button>
        `

        fileira2.appendChild(cardBag)
    })
})