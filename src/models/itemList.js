class itemList {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    getAllItems() {
        return this.items;
    }

    getItemById(id) {
        const item = this.items.find(item => item.id == id);
        if (!item) {
            throw new Error("Pedido não encontrado");
        }
        return item;
    }
    
    deleteItem(itemId) {
        this.items = this.items.filter(item => item.id != itemId);
    }
}

module.exports = itemList;
