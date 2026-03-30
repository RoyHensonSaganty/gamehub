window.onload = function () {
    let user = localStorage.getItem("u");

    if (user) {
        document.getElementById("welcome").innerText = "Hi, " + user + " 👋";
        document.getElementById("loginBtn").style.display = "none";
        document.getElementById("logoutBtn").style.display = "inline-block";
    }
};

function openLogin() {
    document.getElementById("l").classList.add("active");
}

function submitLogin() {
    let un = document.getElementById("u").value.trim();
    let pa = document.getElementById("p").value.trim();

    if (un === "" || pa === "") {
        alert("Please enter username and password");
        return;
    }

    localStorage.setItem("u", un);

    document.getElementById("l").classList.remove("active");

    location.reload();
}

function logout() {
    localStorage.removeItem("u");
    location.reload();
}

function checkLogin() {
    let user = localStorage.getItem("u");

    if (!user) {
        alert("Please login first!");
        return false;
    }
    return true;
}

function openSimon() {
    if (checkLogin()) {
        window.location.href = "simon.html";
    }
}

function openDrum() {
    if (checkLogin()) {
        window.location.href = "drum.html";
    }
}