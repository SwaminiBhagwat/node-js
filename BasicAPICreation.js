const http=require('http');
let data =[{
    'name':'swamini',
    'age':21,
    'email':'swamini@gmail.com',
    'marital_status':'unmarried'
},
{
    
    'name':'Kshitij',
    'age':21,
    'email':'swamini@gmail.com',
    'marital_status':'unmarried'
}]

http.createServer(
    function(request,response)
    {
        response.write(JSON.stringify(data));
        response.end();
    }

).listen(2000);