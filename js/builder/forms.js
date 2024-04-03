import { FormBuilder, FormDirector } from "./models/builderModels.js";

const frmBuilder = new FormBuilder();
const formPeople = frmBuilder.setAction("add.person")
                             .setText("firstName", "Nombre")
                             .setText("lastName", "Apellidos")
                             .setCheckbox("isGay", "Sos gay?")
                             .setColor("color", "Color")
                             .build();

const formMail = frmBuilder.setAction("login.php")
                            .setText("email", "Email: ")
                            .setPassword("password", "Contraseña: ")
                            .build();

form1.innerHTML = formPeople.getContent();
form2.innerHTML = formMail.getContent();

const director = new FormDirector(frmBuilder);

director.createPeopleForm();
form3.innerHTML = frmBuilder.build().getContent();

director.createLoginForm();
form4.innerHTML = frmBuilder.build().getContent();

director.createContactForm();
form5.innerHTML = frmBuilder.build().getContent();
    
const handleForm = (form) => {

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        console.log("Formulario:", formData);
    });
};

const forms = [form1, form2, form3, form4, form5];
forms.forEach(handleForm);
