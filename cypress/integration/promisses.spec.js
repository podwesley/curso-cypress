it('teste promisses 1', () => {

})

const getSomeThing = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12);
        }, 1000)
    })

}

const system = async () => {
    console.log('init')
    const some = await getSomeThing();
    console.log(`something é: ${some}`)
    console.log('end')
}

system();