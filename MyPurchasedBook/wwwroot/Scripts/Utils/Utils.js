function ToastMessage(msg) {
    Toastify({
        text: msg,
        duration: 3000,
        //destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            //background: "linear-gradient(to right, #00b09b, #96c93d)",
            background: "linear-gradient(to right, #b00000, #b01500)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

function CheckISBN10(digits) {
    let i, s = 0, t = 10;

    for (i = 0; i < 9; i++) {
        s += digits[i] * t;
        t = t - 1;
    }
    return (11 - (s % 11)) % 11;
}

function CheckISBN13(digits) {
    let i, s = 0, t = 0, odd = 1, even = 3;
    for (i = 0; i < 12; ++i) {
        if (i % 2 == 0) t = digits[i] * odd;
        else t = digits[i] * even;
        s += t;
    }

    return 10 - (s % 10) == 10 ? 0 : 10 - (s % 10);
}