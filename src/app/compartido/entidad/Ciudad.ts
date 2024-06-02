class Ciudad {
    public idCiudad: string;
    public nombreCiudad?: string;
    public publicoFotoCiudad?: string;
    public privadoFotoCiudad?: string;
    public estadoCiudad?: number;
    public base64Ciudad?: string;

    constructor(cod: string, nom?: string, pub?: string, pri?: string, est?: number, base?: string) {
        this.idCiudad = cod;
        this.nombreCiudad = nom;
        this.publicoFotoCiudad = pub;
        this.privadoFotoCiudad = pri;
        this.estadoCiudad = est;
        this.base64Ciudad = base;
    }


}

export default Ciudad;