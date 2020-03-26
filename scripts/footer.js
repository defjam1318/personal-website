function footer() {
    var nextEvent = document.getElementById("nextevent");
    nextEvent.href = "https://www.artful.ly/manhattan-choral-ensemble";
    nextEvent.innerHTML = "Manhattan Choral Ensemble<br />dec 6, 8 2019<br />New York, NY";

    var email = document.getElementById('email');
    email.href = 'mailto:toma@tomailiev.com';
    email.target = '_blank';

    var copyright = document.getElementById('copyright');
    copyright.innerHTML = "&copy; tomailiev.com 2016-2019";
}