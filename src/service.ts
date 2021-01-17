export default io => ({
    createBook: async data => {
        await io.db.put(data)
        return 'Created ' + data.name
    },

    getBook: async data => {
        const book = await io.db.get(data.queryStringParameters)
        return 'Goodbye ' + book.name;
    }
})
