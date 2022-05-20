
export class Contacto{
    name='';
    surname='';
    email = '';
    conectado = false;
    
    // creamos el constructor para crear un contacto
    
    constructor(name,surname,email, level){
        this.name= name;
        this.surname = surname;
        this.email = email;
        this.level = level;
    }
}