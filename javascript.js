class form {
    constructor(email, name, message) {
        this.email = email;
        this.name = name;
        this.message = message;
    }
}

//Filtering which date the form can be sent

    const date = new Date();
    const today = date.getDay();

    if (today === 5 || today === 6 || today === 0) {
    document.querySelector("#form").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("You can not submit on this day!");
        console.log("Wrong day");
    });
} 

//Only accepting cphbusiness email

else {
    document.querySelector("#email").addEventListener("blur", (e) => {
        const newValue = e.target.value.trim();
        e.target.value = newValue;
        const emailAttribute = e.target.value.toLowerCase().split("@");
        if (!emailAttribute[1].match("cphbusiness.dk")){
            alert("Please use a cph business email!");
        }
    });
    document.querySelector("#name").addEventListener("blur", (e) => {
        const newValue = e.target.value.trim();
        e.target.value = newValue;
    });

document.querySelector("#form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Perfect day to submit!");
    const emailInput = document.querySelector("#email").value;
    const nameInput = document.querySelector("#name").value;
    const messageInput = document.querySelector("#message").value;
    const Form = new form (emailInput, nameInput, messageInput);
    console.log(Form);
    resetFields();
});
}

//Reseting the fields

function resetFields(){
    document.querySelector("#email").value = "";
    document.querySelector("#name").value = "";
    document.querySelector("#message").value = "";
}