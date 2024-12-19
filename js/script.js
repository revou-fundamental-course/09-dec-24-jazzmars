console.log('Javascript success');

//script for slider
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("img-slideshow");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length};
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x[slideIndex - 1].style.display ="block";
}

setInterval(() => {
    plusDivs(1);
}, 2000)


//Form

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Mengambil nilai input
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const options = document.getElementById('options').value;

    // Menghapus pesan kesalahan sebelumnya
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('optionsError').textContent = '';

    let valid = true;

    // Validasi nama
    if (name == "") {
        document.getElementById('nameError').textContent = "Please enter your name.";
        valid = false;
    }

    // Validasi email
    if (!email) {
        document.getElementById('emailError').textContent = "Please enter your email.";
        valid = false;
    } else if (!email.includes('@')) {
        document.getElementById('emailError').textContent = "Please enter a valid email address with '@'.";
        valid = false;
    }

    // Validasi opsi
    if (!options) {
        document.getElementById('optionsError').textContent = "Please select an option.";
        valid = false;
    }

    // Jika semua valid, tampilkan pesan sukses
    if (valid) {
        showToast("Your request is being processed.");
        // Di sini Anda bisa menambahkan logika untuk mengirim data ke server jika diperlukan.
        this.reset(); // Mengatur ulang form setelah pengiriman sukses
    }
});

// Fungsi untuk menampilkan toast message
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = "toast show";

    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 3000); // Toast akan hilang setelah 3 detik
}