export default {
    handler: {
        returnSuccess: x => ({
                statusCode: 200,
                body: JSON.stringify(x)
            }
        )
    }
}