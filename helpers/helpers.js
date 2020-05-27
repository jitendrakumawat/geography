module.exports={
    handleSuccess: function(res, statusCode){
        statusCode = statusCode || 200;
        return function(data){
            return res.send({
                success: true,
                data
            })
        }
    },
    handleError: function(res, statusCode){
        statusCode = statusCode || 500;
        return function(error){
            console.log(error)
            return res.send({
                success: false,
                error
            })
        }
    }
}