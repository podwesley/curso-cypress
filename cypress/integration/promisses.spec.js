it('teste promisses 1', () => {

})

const getSomeThing = callback => {
    setTimeout(() => {
        callback(12);
    }, 1000)
}

const system = () => {
    console.log('init')
    getSomeThing(some => console.log(`something é: ${some}`));
    console.log('end')
}

system();