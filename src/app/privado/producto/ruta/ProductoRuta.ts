import { Router } from "express";
import productoControlador from "../controlador/ProductoControlador";
import seguridad from "../../../../middleware/Seguridad";

class ProductoRuta {

    public apiRutaProducto: Router;

    constructor() {
        this.apiRutaProducto = Router();
        this.cargarRutas();
    }

    public cargarRutas(): void {
        this.apiRutaProducto.get("/all", productoControlador.obtenerProductos);
        this.apiRutaProducto.get("/one/:codProducto",seguridad.verificarToken, productoControlador.obtenerProducto);
        this.apiRutaProducto.post("/paginate",seguridad.verificarToken, productoControlador.obtenerProductosPaginar);
        this.apiRutaProducto.post("/add",seguridad.verificarToken, productoControlador.crearProducto);
        this.apiRutaProducto.put("/updateinfo",seguridad.verificarToken, productoControlador.editarProducto);
        this.apiRutaProducto.put("/updatephoto",seguridad.verificarToken, productoControlador.editarFotoProducto);
        this.apiRutaProducto.delete("/delete/:codProducto",seguridad.verificarToken, productoControlador.eliminarProducto);
    }


}

const productoRuta = new ProductoRuta();
export default productoRuta.apiRutaProducto;