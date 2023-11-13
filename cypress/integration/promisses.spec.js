it('teste promisses 1', () => {

})

const getSomeThing = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12);
        }, 1000)
    })

}

const system = () => {
    console.log('init')
    const prom = getSomeThing();
    prom.then(some => {
        console.log(`something é: ${some}`)
        console.log('end')
    })


}

system();