let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton");

const generatePassword = (len) => {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?`~<>+=|-";

    const data = lowerAlphabet + upperAlphabet + numeric + symbols;
    let generator = "";

    for (let i = 0; i < len; i++) {
        generator += data[Math.floor(Math.random() * data.length)];
    }

    return generator;
};

const getPassword = () => {
    const newPassword = generatePassword(passwordLength.value);
    password.value = newPassword;
    alert("Password generated!");
};

const savePassword = () => {
    if (password.value === "") {
        alert("Generate password dulu!");
        return;
    }

    const text = `Password Saya : ${password.value}`;

    saveButton.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    saveButton.setAttribute("download", "MyPasswordGeneratorLOG.txt");

    alert("Password Tersimpan!");
};
