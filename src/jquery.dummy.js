/**
 * @fileoverview jQuery Dummy Plugin
 *
 * @author Taner DOGAN <hello@tanerdogan.com>  <github.com/tanerdogan>
 */

;
(function ( $, undefined ) {

    var _text = ["Foo", "Bar", "Join", "Signup", "Register", "Test String",
    "Search", "Invite", "Help","Choose Theme", "Search Results", "Logout",
    "My Messages", "Dashboard", "Applications", "jQuery Plugin", "GitHub",
    "MySQL", "LinkedIn", "Front-end Developer", "Its for fun", "Maintance",
    "User Manager", "Preferences", "Select All", "Replace All", "Find",
    "Click here", "Join us", "Love Your Mommy!", "Kickass jQuery"],

    _lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed libero in nibh vulputate consectetur. Sed congue purus sit amet lectus blandit pulvinar. Quisque ut euismod nisl. Etiam at dolor lectus. Maecenas felis ipsum, vehicula a convallis eget, vehicula et purus. Nulla facilisi. Morbi mollis pellentesque dictum. Vestibulum sit amet ante a dolor laoreet mattis sit amet ut nibh. Curabitur nibh turpis, dictum et molestie non, semper sit amet turpis. Praesent mauris augue, faucibus vel tincidunt sed, cursus vitae tortor. Proin turpis lorem, auctor tincidunt pulvinar vel, gravida a nibh. Donec commodo vestibulum facilisis. Maecenas quam quam, sodales eget rutrum.",

    _textLenght = _text.length - 1,
    _randomNum = function(){
        return Math.ceil(Math.random() * _textLenght );
    },
    _getWord = function(){
        return _text[_randomNum()];
    },
    _getLorem = function(_count){
        return _lorem.split(" ", _count).join(" ");
    },

    dummy = function(element) {
        switch (element.tagName) {
            case "DIV": case "SPAN": case "P":
                _split = $(element).attr("class").split("-");
                $(element).html(_getLorem(_split[2]));
                break;
            case "UL":
                _split = $(element).attr("class").split("-");
                var _append = "";
                for (i = 0; i < _split[2]; i++)
                    if (_split[1] == "li")
                        _append += "<li>"+_getWord()+"</li>";
                    else if (_split[1] == "lia")
                        _append += "<li><a href='#'>"+_getWord()+"</a></li>";

                $(element).append(_append);
                break;
            case "A":
                $(element)
                .attr("href", "#")
                .text(_getWord());
                break;
        }
    };

    $.fn.dummy = function () {
        return this.each(function () {
            dummy(this);
        });
    }
}(jQuery));