var xhr = new  XMLHttpRequest();
xhr.open('GET' ,'https://jsonplaceholder.typicode.com/users');
xhr.setRequestHeader('accept-language' , 'ar');
xhr.send()

xhr.onload = function(){
    if (xhr.status != 200) {
        console.log(xhr.response)
    } else {
        console.log(xhr);
        console.log(xhr.getResponseHeader('content-type'))

    }
    //200 => success
}

// xhr.onerror = function() {
//     console.log('error')
// }