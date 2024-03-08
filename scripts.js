const createProduct = async (event) => {
  event.preventDefault();

  try {
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;

    const product = {
      nome: productName,
      preco: productPrice,
    };

    localStorage.setItem("products", JSON.stringify(product));

    const productsSaved = JSON.parse(localStorage.getItem("products"));

    const response = await api.post("/criar-produto", productsSaved);

    console.log("A requisição deu certo:", productsSaved);
  } catch (error) {
    console.log(`Erro durante a requisição: ${error}`);
  }
};

const getAllProducts = async (event) => {
  event.preventDefault();

  try {
    const response = await api.get("/produtos");
    console.log(response.data);
  } catch (error) {
    console.log(`Erro durante a requisição: ${error}`);
  }
};

const updateProduct = async (event) => {
  event.preventDefault();
  try {
    const oldProductName = document.getElementById("findProductName").value;
    const newProductName = document.getElementById("updateProductName").value;
    const newProductPrice = document.getElementById("updateProductPrice").value;
    const response = await api.put(`/produtos/${oldProductName}`, {
      nome: newProductName,
      preco: newProductPrice,
    });
    console.log(response.data, "Produto atualizado com sucesso");
  } catch (error) {
    console.log(`Erro durante a requisição: ${error}`);
  }
};

const deleteProduct = async (event) => {
  event.preventDefault();

  try {
    const productToDelete = document.getElementById("deleteProductByName").value;

    const response = await api.delete(`/produtos/${productToDelete}`);
    console.log(response.data, "Produto apagado com sucesso");
  } catch (error) {
    console.log(`Erro durante a requisição: ${error}`);
  }
};
