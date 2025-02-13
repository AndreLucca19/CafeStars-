# CoffeeStars

CoffeeStars é uma API para gerenciar um cardápio de café e pedidos.

## Endpoints

### Menu

- **GET /api/menu**
  - Retorna todos os itens do cardápio.

### Item

- **GET /api/item**
  - Retorna todos os itens pedidos.

- **GET /api/item/:id**
  - Retorna o status de um item específico pelo ID.

- **POST /api/item**
  - Adiciona um novo item ao pedido.
  - Exemplo de corpo da requisição:
    ```json
    {
      "quantity": 1,
      "item": "Café expresso",
      "price": 4.50
    }
    ```

- **DELETE /api/item/:id**
  - Deleta um item do pedido pelo ID.
