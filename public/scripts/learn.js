/**
 * Created by Jeevjyot on 6/30/16.
 */

function call_to_rest(){
    var xhr= new XMLHttpRequest();
    method="GET";
    url="https://developer.api.autodesk.com/oss/v2/buckets/wt_whitingturner/details";
    console.log('im here');
    console.log('UNSENT',xhr.readyState); // Ready State Status
    xhr.open(method,url,true);
    xhr.setRequestHeader("Authorization","Bearer dXe0AYm9BneP4mg8NOV4nWzsJo4A");
    xhr.setRequestHeader("Content-Type","application/json")
    console.log('OPENED',xhr.readyState); // Ready State Status
    xhr.onprogress = function () {
        console.log('LOADING', xhr.readyState); // readyState will be 3
    };
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status == 200)
        {
            console.log(JSON.parse(xhr.responseText));      //displaying the contents returned by the
        }
        else
        {
            console.log(xhr.statusText)     // Ready State Status
        }
    };
    xhr.onload = function () {
        console.log('DONE', xhr.readyState); // readyState will be 4
    };
    xhr.send();
}