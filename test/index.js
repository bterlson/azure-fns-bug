module.exports = async function (context, req) {
    context.res = {
        headers: {
            "content-type": "text/plain"
        },
        body: `
            ${JSON.stringify(req.headers)}

            ${JSON.stringify(context.bindingData.headers)}
        `
    }
};