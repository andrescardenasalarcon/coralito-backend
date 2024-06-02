import { Request, Response } from "express";
import CiudadDAO from "../dao/CiudadDAO";

class CiudadControlador extends CiudadDAO {
    public obtenerCiudades(req: Request, res: Response): void {
        CiudadControlador.consultar(res);
    }
    public obtenerIdCiudades(req: Request, res: Response): void {
        CiudadControlador.consultarSoloId(res);
    }
}
const ciudadControlador = new CiudadControlador();
export default ciudadControlador;