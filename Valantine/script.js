let input = "";

function addNum(num) {
    if (input.length < 4) {
        input += num;
        document.getElementById("code").value = "*".repeat(input.length);
    }
}

function clearCode() {
    input = input.slice(0, -1);
    document.getElementById("code").value = "*".repeat(input.length);
}

function checkCode() {
    if (input === "1220") {
        window.location.href = "love.html";
    } else {
        alert("Wrong code baby 💔");
        input = "";
        document.getElementById("code").value = "";
    }
}
