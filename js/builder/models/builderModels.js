class Form {
    constructor(controls, action){
        this.controls = controls;
        this.action = action;
    };
    getContent(){
        return `
        <form action="post" action="${this.action}">
            ${this.controls.reduce((ac,e)=>{
                return ac + `<div>
                    ${this.getLabel(e)}
                    ${this.getInput(e)}
                </div>`
            },"")}
            <button type="submit">Enviar</button>
        </form>
        `;
    };
    getLabel(control){
        return `<label>${control.text}</label>`;
    };
    getInput(control){
        return `<input type="${control.type}" name="${control.name}" />`
    }
};

export class FormBuilder {
    constructor(){
        this.reset();
    };
    reset(){
        this.controls = [];
        this.action = "";
        return this;
    }

    setAction(action){
        this.action = action;
        return this;
    };

    setText(name, text){
        this.controls.push({
            name:name,
            text:text,
            type: "text"
        });
        return this;
    };
    setEmail(name, text){
        this.controls.push({
            name:name,
            text:text,
            type: "email"
        });
        return this;
    };
    setPassword(name, text){
        this.controls.push({
            name:name,
            text:text,
            type: "password"
        });
        return this;
    };
    setCheckbox(name, text){
        this.controls.push({
            name:name,
            text:text,
            type: "checkbox"
        });
        return this;
    }
    setColor(name, text){
        this.controls.push({
            name:name,
            text:text,
            type: "color"
        });
        return this;
    };
    setButton(name, text){
        this.controls.push({
            name:name,
            text:text,
            type: "submit"
        });
        return this;
    }
    build(){
        const form = new Form(this.controls, this.action);
        this.reset();
        return form;
    }
};

export class FormDirector {
    constructor(formBuilder){
        this.setBuilder(formBuilder);
    };

    setBuilder(formBuilder){
        this.formBuilder = formBuilder;
    };

    createPeopleForm(){
        this.formBuilder.reset();
        this.formBuilder.setText("firstName", "Nombre")
                        .setText("lastName", "Apellidos");
    };
    createLoginForm(){
        this.formBuilder.reset();
        this.formBuilder
            .setEmail("email", "Email: ")
            .setPassword("password", "Contraseña: ")
    };
    createContactForm(){
        this.formBuilder.reset();
        this.formBuilder
            .setText("name", "Name: ")
            .setEmail("email", "Email: ")
            .setText("message", "Mensaje: ")
    };
};
