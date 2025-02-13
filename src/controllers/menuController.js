const menuList = require("../models/menuList");
const menu = require("../models/menu");

const cardapio = new menuList();

cardapio.addMenu(new menu(1 , "Café Expresso", 4.50 , 12));
cardapio.addMenu(new menu(2 , "Café Latte", 7.80 , 10));
cardapio.addMenu(new menu(3 , "Café Mocha", 8.00 , 8));
cardapio.addMenu(new menu(4 , "Café com leite", 5.00 , 8));

const router = {
    getAllMenu: (req, res) => {
        try {
            const menu = cardapio.getAllMenu();
            return res.status(200).json(menu);
        } catch (error) {
            res.status(400).json({ message: "Erro ao buscar cardápio", error});
        }
    },
};

module.exports = router;