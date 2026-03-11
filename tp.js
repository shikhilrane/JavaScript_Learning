// initiate the booking
// add he guests
// process the payment

// 1. Function to create booking
function initBooking(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject("Name is required to create booking");
            return;
        }
        setTimeout(() => {
            console.log("Booking initated");
            resolve({                           // if resolved, then add follwing terms in it
                bookingId: "regsf7f6sd7",
                name
            })
        }, 2000);
    })
}

// 2. Function to add guest in the created booking
function addTheGuests(booking, guestInfo) {
    return new Promise((resolve, reject) => {
        if (!guestInfo || guestInfo.length === 0) {
            reject("Guest information missing");
            return;
        }
        setTimeout(() => {
            console.log("Added guest");
            booking.guest = guestInfo;       // add guest(s) in booking object
            resolve(booking);
        }, 2000);
    })
}

// 3. Function to add payment details in the created booking
function processPayments(booking, payment) {
    return new Promise((resolve, reject) => {
        if (!payment || payment.amount <= 0) {
            reject("Invalid payment details");
            return;
        }
        setTimeout(() => {
            console.log("Payment processed");
            booking.payment = payment;       // add payment details in booking object
            resolve(booking);
        }, 2000);
    })
}

// // Using .then() and .catch()
// initBooking()
//     .then((data) => {
//         console.log("Got the booking", data);
//         return addTheGuests(data, ["Shikhil", "Rane"])
//     })
//     .then((booking) => {
//         console.log("Added guest to same booking", booking);
//         return processPayments(booking, {
//             paymentId: "nrjknwtji45rt",
//             amount: 3000
//         })
//     })
//     .then((booking) => {
//         console.log("Got the booking", booking);
//     })
//     .catch((err) => {
//         console.error("Got the error :", err);
//     })


// Using async/await
async function bookingFlow() {
   try {
      let booking1 = await initBooking();
      let booking2 = await addTheGuests(booking1, ["Shikhil", "Rane"]);
      let booking3 = await processPayments(booking2, {
         paymentId: "nrjknwtji45rt",
         amount: 3000
      });
      console.log("Final booking:", booking3);
   } catch (error) {
      console.error("Booking failed:", error);
   }
}
bookingFlow()