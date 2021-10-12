class studentsForm {
    constructor(name, branch, gender) {
        this.name = name;
        this.branch = branch;
        this.gender = gender;
    }
}
class Display {

    add(stForm) {
        let tableBody = document.getElementById("tableBody");
        let uiString = ` <tr>
                            <th>${stForm.name}</th>
                            <td class="table-active">${stForm.branch}</td>
                            <td>${stForm.gender}</td>
                        </tr>`
        tableBody.innerHTML += uiString;
    }
    clear() {
        let studentForm = document.getElementById("studentForm");
        studentForm.reset();
    }
    valiDate(stForm) {
        if (stForm.name.length < 2 || stForm.branch < 2) {
            return false;
        } else {
            return true;
        }
    }
    show(type, showMessage) {
        let message = document.getElementById("message");
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>Message</strong> ${showMessage}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`
        setTimeout( () => {
        message.innerHTML = "";
    }, 3000);
    }

}

let studentForm = document.getElementById("studentForm");
studentForm.addEventListener("submit", submitForm);

function submitForm(e) {
    let name = document.getElementById("formName").value;
    let branch = document.getElementById("branch").value;

    let gender;
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let other = document.getElementById("other");


    if (male.checked) {
        gender = male.value;
    } else if (female.checked) {
        gender = female.value;
    } else if (other.checked) {
        gender = other.value;
    }
    let stForm = new studentsForm(name, branch, gender)
    let display = new Display()
    if (display.valiDate(stForm)) {
        display.add(stForm);
        display.clear();
        display.show("success", "Your form is successfully submitted");
    } else {
        display.show("danger", "Sorry! you can not submit form")
    }

    e.preventDefault();
}
let name = document.getElementById("formName").value;
name.style.color = "red";