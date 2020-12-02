export default io => ({
    createBook: async data => {
        await io.db.put({
            PK: 'book',
            SK: 'function12345',
            name: 'function 1',
            description: 'is good'
        })
        return 'Hello ' + data.name
    },

    getBook: async data => {
        const book = await io.db.get({
            PK: 'book',
            SK: 'function12345',
        })
        return 'Goodbye ' + book.name;
    }
})
