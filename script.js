/* CLOSE BANNER */

function acceptTerms() {

    const banner =
    document.getElementById("reservationBanner");

    if (banner) {
        banner.style.display = "none";
    }
}


const checkIn =
document.getElementById("checkIn");

const checkOut =
document.getElementById("checkOut");

const reservationForm =
document.querySelector(".reservation-form");


if (checkIn && checkOut && reservationForm) {

    const today =
    new Date().toISOString().split("T")[0];

    checkIn.min = today;

    checkOut.min = today;

    checkIn.addEventListener("change", () => {

        checkOut.min = checkIn.value;

        if (checkOut.value < checkIn.value) {

            checkOut.value = "";
        }
    });

    reservationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const checkInDate = checkIn.value;

        const checkOutDate = checkOut.value;

        const guests =
        document.getElementById("guestCount").value;

        if (!checkInDate || !checkOutDate) {

            alert(
                "Please select your reservation dates."
            );

            return;
        }

        alert(

            "Reservation Information\n\n" +
            "Check In: " + checkInDate + "\n" +
            "Check Out: " + checkOutDate + "\n" +
            "Guests: " + guests
        );

        reservationForm.reset();

        checkOut.min = today;
    });
}


const contactForm =
document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you for your feedback!");

        contactForm.reset();
    });
}