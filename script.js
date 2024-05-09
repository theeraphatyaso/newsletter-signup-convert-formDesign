let rightImg = document.querySelector(`.right-content`);
document.getElementById(`submit-button`).onmouseover = () => {
    rightImg.style.borderRadius = `${0}px`;
}
document.getElementById(`submit-button`).onmouseout = () => {   
    rightImg.style.borderRadius = null;
}

document.getElementById(`submit-button`).onclick = () => {
    let inputData = document.getElementById(`emailInput`).value;
    inputData = inputData.toLowerCase();
    function validationEmail(email) {
        let email_tag = ["gmail","outlook","hotmail","icloud","live4"]
        function checkIfHaveAt() {
            if(!String(email).includes("@")) {
                return false;
            }else {
                for(let i=0; i<email.length; i++) {
                    if(email[i] == "@" && i > 0) {
                        for(let j=0; j<email_tag.length; j++) {
                            if(String(email).includes(email_tag[j]) && String(email).indexOf(email_tag[j]) > i) {
                                return true;
                            }
                        }
                    }
                }
            }
        }
        function checkIfDotCom() {
            if(String(email).includes(".com") && String(email).endsWith(".com")) {
                return true;
            }else {
                return false;
            }
        }
        if(checkIfHaveAt() && checkIfDotCom()) {
            return false;
        }else {
            return true;
        }
    }
    if(inputData == "" || validationEmail(inputData)) {
        document.getElementById(`valid-error`).style.display = "block";
    }else {
        document.getElementById(`valid-error`).style.display = "none";
        document.querySelector(`.information-receive`).style.display = "none";
        document.querySelector(`.thanks-service`).style.display = "block";
    }
}

document.getElementById(`dismiss-button`).onclick = () => {
    document.querySelector(`.thanks-service`).style.display = "none";
    document.querySelector(`.information-receive`).style.display = null;
}