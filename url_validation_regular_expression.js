/* Regex for valid url (not include ip address)
* output will give an array on match and value at index are below
* 0 - Searched url
* 3 - header (http,https,ftp)if any
* 4 -hostname
*/
reg0 = /^(((http|https|ftp):\/+){0,1})((([a-zA-Z0-9][a-zA-Z0-9_-]*[.])+[a-zA-Z]+))+([/]?[a-zA-Z0-9_?=.]+)*/


//------------------------------------------------------------------------------------------------------------

/* Regex for valid ip as url in ip v4
* included all ip classes (private | public also included) 
*/

reg1 = /^(((http|https|ftp):\/+){0,1})(([0-1]([0-9]{0,1})([0-9]{0,1})[.])|([2][0-5][0-5][.])|([3-9][0-9][.]))(([0-1]([0-9]{0,1})([0-9]{0,1})[.])|([2][0-5][0-5][.])|([3-9][0-9][.]))(([0-1]([0-9]{0,1})([0-9]{0,1})[.])|([2][0-5][0-5][.])|([3-9][0-9][.]))(([0-1]([0-9]{0,1})([0-9]{0,1}))|([2][0-5][0-5])|([3-9][0-9])):((([1][0][2][4-9])|([1][0][3-9][0-9])|([1][1-9][0-9][0-9])|([2-9][0-9][0-9][0-9])|([1-5][0-9][0-9][0-9][0-9])|([6][1-4][0-9][0-9][0-9])|([6][5][0-4][0-9][0-9])|([6][5][5][0-2][0-9])|([6][5][5][3][0-5]))$)/;


//------------------------------------------------------------------------------------------------------------

/* Regex for valid url included ip v4
* included all ip classes (private | public also included)
*/

reg2 = /^(((http|https|ftp):\/+){0,1})(((((([0-1]([0-9]{0,1})([0-9]{0,1})[.])|([2][0-5][0-5][.])|([3-9][0-9][.]))(([0-1]([0-9]{0,1})([0-9]{0,1})[.])|([2][0-5][0-5][.])|([3-9][0-9][.]))(([0-1]([0-9]{0,1})([0-9]{0,1})[.])|([2][0-5][0-5][.])|([3-9][0-9][.]))(([0-1]([0-9]{0,1})([0-9]{0,1}))|([2][0-5][0-5])|([3-9][0-9])))|localhost):((([1][0][2][4-9])|([1][0][3-9][0-9])|([1][1-9][0-9][0-9])|([2-9][0-9][0-9][0-9])|([1-5][0-9][0-9][0-9][0-9])|([6][1-4][0-9][0-9][0-9])|([6][5][0-4][0-9][0-9])|([6][5][5][0-2][0-9])|([6][5][5][3][0-5]))$))|((([a-zA-Z0-9][a-zA-Z0-9_-]*[.])+[a-zA-Z]+))+([/]?[a-zA-Z0-9_?=.]+)*)/;


//------------------------------------------------------------------------------------------------------------

/* Simple regex that can return url without any header or arguments 
* for example if any url like http://www.abc.bcd.efg.com/root/boot/folder/link and then this reg can
* give you value 'abc.bcd.efg.com' at index of 4.
* also work with no headers i.e www.abc.bcd.com --> abc.bcd.efg.com
*/

reg3 = /(http:|https:|ftp:)?[/]+((www+)[\.])?([a-z0-9\._-]*)/


/*
* Only for domain validation
*/
reg4 = new RegExp(
  "^" +
    //------Protocol----------
    '(?:(?:https?|ftp)://)?' +

    //------User(Opt)-------------
    "(?:\\S+(?::\\S*)?@)?" +
    "(?:" +
        '(?:' +
        //----------------------------------
            "(?:" +
              "[a-z0-9\\u00a1-\\uffff]" +
              "[a-z0-9\\u00a1-\\uffff_-]{0,62}" +
            ")?" +
            "[a-z0-9\\u00a1-\\uffff]\\."+
        //----------------------------------
        ')+'+
        //Top-level domain format minimum two character
        "(?:[a-z\\u00a1-\\uffff]{2,}\\.?)" +
    ")" +

    //-----Port--------
    "(?::[0-9]{2,5})?" +

    //-----Path--------
    "(?:[/?#]\\S*)?" +

  "$", "i"
);


//------------------------------------------------------------------------------------------------------------
