


function MyAuthToken(env)
{
    if (env === "PROD") {

        this.tokenService = "https://bim-auth.herokuapp.com/auth";
    }
    this.token = "";
    this.expires_in = 0;
    this.timestamp = 0;
}

// FUNC value():
// return the value of the token

MyAuthToken.prototype.value = function()
{
    // if we've never retrieved it, do it the first time
    if (this.token === "") {
        console.log("AUTH TOKEN: Getting for first time...");
        this.get();
    }
    else {
        // get current timestamp and see if we've expired yet
        var curTimestamp = Math.round(new Date() / 1000);   // time in seconds
        var secsElapsed = curTimestamp - this.timestamp;

        if (secsElapsed > (this.expires_in - 10)) { // if we are within 10 secs of expiring, get new token
            console.log("AUTH TOKEN: expired, refreshing...");
            this.get();
        }
        else {
            var secsLeft = this.expires_in - secsElapsed;
            console.log("AUTH TOKEN: still valid (" + secsLeft + " secs)");
        }
    }

    return this.token;
};

// FUNC get():
// get the token from the Authentication service and cache it, along with the expiration time

MyAuthToken.prototype.get = function()
{
    var retVal = "";
    var expires_in = 0;

    console.log("getting from url " + this.tokenService );

    var jqxhr = $.ajax({
        url: this.tokenService,
        type: 'GET',
        async: false,
        success: function(ajax_data) {
            console.log("AUTH TOKEN: " + ajax_data.access_token);
            retVal = ajax_data.access_token;  // NOTE: this only works because we've made the ajax call Synchronous (and "this" is not valid in this scope!)
            expires_in = ajax_data.expires_in;

        },
        error: function(jqXHR, textStatus) {
            console.log(jqXHR);
            alert("AUTH TOKEN: Failed to get new auth token!");
        }
    });

    this.token = retVal;
    this.expires_in = expires_in;
    this.timestamp = Math.round(new Date() / 1000);  // get time in seconds when we retrieved this token
};

