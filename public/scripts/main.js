/**
 * Created by Jeevjyot on 6/28/16.
 */


var _mytoken = new MyAuthToken("PROD");

$(document).ready(function(){

    console.log(_mytoken.value());
})