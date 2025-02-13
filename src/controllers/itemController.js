const ItemList = require("../models/itemList");
const Item = require("../models/item");
const e = require("express");

const itemList = new ItemList();


itemList.addItem(new Item(1, "Café Expresso", 4.50, "Pendente"));
itemList.addItem(new Item(2, "Café com Leite", 5.00, "Pendente"));

const router = {
    addItem: (req, res) => {
        try {
            const { quantity, item, price } = req.body;
            if (!quantity || !item || !price) {
                throw new Error("Preencha todos os campos para adicionar um item");
            }
            const newItem = new Item(quantity, item, price, "Pendente");
            itemList.addItem(newItem);
            return res.status(201).json({ message: "Item adicionado com sucesso", newItem });
        } catch (error) {
            res.status(400).json({ message: "Erro ao adicionar item", error });
        }
    },
    getAllItems: (req, res) => {
        try {
            const items = itemList.getAllItems();
            return res.status(200).json(items);
        } catch (error) {
            res.status(400).json({ message: "Erro ao buscar itens", error });
        }
    },
    getItemById: (req, res) => {
        try {
            const { id } = req.params;
            const item = itemList.getItemById(id);
            return res.status(200).json({ status: item.status });
        } catch (error) {
            res.status(400).json({ message: "Erro ao buscar item", error });
        }
    },
    deleteItem: (req, res) => {
        try {
            const { id } = req.params;
            const item = itemList.getItemById(id);
            if (!item) {
                return res.status(404).json({ message: "Item não encontrado" });
            }
            if (item.status !== "Pendente") {
                return res.status(403).json({ message: "Não é possível deletar um item que já está em preparo ou pronto" });
            }
            itemList.deleteItem(id);
            return res.status(200).json({ message: "Item cancelado com sucesso" });
        } catch (error) {
            return res.status(400).json({ message: "Erro ao cancelar item", error });
        }
    }
}

module.exports = router;