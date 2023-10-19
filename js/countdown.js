document.addEventListener('DOMContentLoaded', function () {
    function updateCounter(elementId, targetDate) {
        var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = targetDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById(elementId).innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";

            if (distance < 0) {
                clearInterval(x);
                document.getElementById(elementId).innerHTML = "EXPIRED";
            }
        }, 1000);
    }

    var weddingDate = new Date("October 31, 2023 21:30:00 GMT+0000").getTime();

    // Update the first counter
    updateCounter("time-remaining-counter", weddingDate);

    // Calculate a different target date for the second counter (for demonstration purposes)
    var newDate = new Date();
    newDate.setDate(newDate.getDate() + 5); // Set it to 5 days from now
    var newTargetDate = newDate.getTime();

    // Update the second counter
    updateCounter("time-remaining-counter-below", newTargetDate);
});
