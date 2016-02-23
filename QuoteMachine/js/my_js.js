


function getQuote() {
    var output = $.ajax({
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
        type: 'POST',
        data: {},
        dataType: 'json',
        success: function (data) {
            document.getElementById("text").innerHTML = '<i class="fa fa-quote-left"></i>&nbsp;' + data.quote;
            document.getElementById("author").innerHTML = data.author;
        },
        error: function (err) {
            alert(err);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "Qlgnm0T4FWmshfjo2kZow7HeVg0Op1VTYLvjsnwD2JCsataLMe"); // Enter here your Mashape key
        }
    });
}