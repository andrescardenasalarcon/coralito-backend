import { Response } from "express";
import RolEsquema from "../../../compartido/esquema/RolEsquema";
import { Types } from "mongoose";
import Menu from "../../../compartido/entidad/Menu";
import MenuEsquema from "../../../compartido/esquema/MenuEsquema";

class MenuDAO {
    protected static async consultar(res: Response): Promise<any> {
        const menus = await MenuEsquema.find().populate('productosMenu')
            .populate({ path: "codRestaurante" });
        const arrMenu: Menu[] = [];

        menus.map(async (menu: any) => {
            arrMenu.push(new Menu(menu._id, menu.nombreMenu, menu.codCiudad, menu.productosMenu));
        })

        res.status(200).json(arrMenu);
    }
    protected static async consultarPorRestaurante(restId: string, res: Response): Promise<any> {

        try {
            const menus = await MenuEsquema.find({ codRestaurante: restId })
                .populate('productosMenu')
                .populate({ path: "codRestaurante" });

            const arrMenu: Menu[] = [];

            menus.map((menu: any) => {
                arrMenu.push(new Menu(menu._id, menu.nombreMenu, menu.codRestaurante, menu.productosMenu));
            });

            res.status(200).json(arrMenu);
        } catch (error) {
            res.status(500).json({ message: 'Error al consultar menús por restaurante', error });
        }
    }


}

export default MenuDAO;
