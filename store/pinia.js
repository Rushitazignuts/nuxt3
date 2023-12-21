import { defineStore } from "pinia";
import cryptoRandomString from "crypto-random-string";

export const useProductStore = defineStore("lists", () => {
  const dialog = ref(false);
  const isError = ref("");
  const dialogDelete = ref(false);
  const product = ref([]);
  const category = ref([]);
  const editedItem = ref();
  const price = ref();
  const quantity= ref();
  const desc= ref();
  const selectedCategory = ref();
  const select = ref();
  const randomId = ref();
  const addNewFieldTitle = ref();
  const selectedItem = ref();
  const price1 = ref();
  const quantity1 = ref();
  const desc1 = ref();
  const deleteId = ref("");
  const retrievedCategoryData = ref([]);
  const dynamicFields = ref([
    {
      id: 1,
      title: "macBook",
      price: 90000,
      quantity: 1,
      category: 'Electronics',
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      title: "Dell laptop",
      price: 60000,
      quantity: 2,
      category: 'Electronics',
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 3,
      title: "One plus mobile",
      price: 20000,
      quantity: 6,
      category: 'Electronics',
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 4,
      title: "airDopes",
      price: 2000,
      quantity: 4,
      category: 'Electronics',
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 5,
      title: "Bluetooth",
      price: 1300,
      quantity: 5,
      category: 'Electronics',
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 6,
      title: "headPhone",
      price: 5000,
      quantity: 3,
      category: 'Electronics',
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
  ]);
  const categoryData = ref([
    {
      id: 1,
      title: "Electronics",
      status: true,
    },
    {
      id: 2,
      title: "Clothes",
      status: true,
    },
  ]);
  const headers = ref([
    { title: "Id", key: "id" },
    { title: "Product name", key: "name" },
    { title: "Price", key: "price" },
    { title: "Quantity", key: "qt" },
    { title: "Category", key: "category" },
    { title: "Description", key: "desc" },
    { title: "Actions", key: "actions", sortable: false },
  ]);
  const categoryHeaders = ref([
    { title: "Id", key: "id" },
    { title: "Category name", key: "name" },
    { title: "Status", key: "status" },
    { title: "Actions", key: "actions", sortable: false },
  ]);

  const getProduct = () => {
    product.value = dynamicFields.value;
  };
  const getCategory = () => {
    category.value = categoryData.value;
  };
  const deleteCategory = (id) => {
    deleteId.value = id;
    dialogDelete.value = true;
   
  };
  const deleteCategoryConfirm = () => {
    const index = categoryData.value.findIndex((item) => item.id === deleteId.value);
    categoryData.value.splice(index, 1);
    dialogDelete.value = false;

  };
  const deleteProduct = (id) => {
    deleteId.value = id;
    dialogDelete.value = true;

  };

  const deleteProductConfirm = () => {
    const index = dynamicFields.value.findIndex(
      (item) => item.id === deleteId.value
    );
    dynamicFields.value.splice(index, 1);
    dialogDelete.value = false;

  };

  const createNewField = (type, data, title) => {
    if (type === "EDIT") {
      if (!title.trim()) {
        // Empty title validation for editing
        isError.value = "Please enter a title.";
        return;
      }

      const parentContainer = category.value.find(
        (item) => item.id === data.id
      );
      parentContainer.title = title;
      useNuxtApp().$toast.success("category update successfully..", {});
    }
     else {
        const newTitle = (addNewFieldTitle.value || '').trim();
        if (!newTitle) {
        // Empty title validation for creating
        isError.value = "Please enter a title.";
        return;
      }
      const isTitleExists = categoryData.value.some(
        (item) => item.title === newTitle
      );
      if (isTitleExists) {
        // Existing title validation for creating
        isError.value = "Title already exists.";
        return;
      }
      if (addNewFieldTitle.value) {
        category.value.splice(category.value.length, 0, {
          id: cryptoRandomString({ length: 2, type: "url-safe" }),
          title: addNewFieldTitle.value,
          status: true,
        });

        addNewFieldTitle.value = "";
        dialog.value = false;
      }
      useNuxtApp().$toast.success("category added successfully..", {});
    }
    dialog.value = false;
    isError.value = "";
  };

  const createNewProduct = (type, data, title,pri, quant, des, item) => {
    if (type === "EDIT") {
      if (!title.trim()) {
        // Empty title validation for editing
        isError.value = "Please enter a title.";
        return;
      }

      const parentContainer = dynamicFields.value.find(
        (item) => item.id === data.id
      );
      parentContainer.title = title;
      parentContainer.price = pri;
      parentContainer.quantity = quant;
      parentContainer.description = des;
      parentContainer.category = item;
      useNuxtApp().$toast.success("category update successfully..", {});
    } else {
        const newTitle = (addNewFieldTitle.value || '').trim();
        if (!newTitle) {
        // Empty title validation for creating
        isError.value = "Please enter a title.";
        return;
      }
      const isTitleExists = categoryData.value.some(
        (item) => item.title === newTitle
      );
      if (isTitleExists) {
        // Existing title validation for creating
        isError.value = "Title already exists.";
        return;
      }
      if (addNewFieldTitle.value) {
        dynamicFields.value.splice(dynamicFields.value.length, 0, {
          id: cryptoRandomString({ length: 2, type: "url-safe" }),
          title: addNewFieldTitle.value,
          price: price1.value,
          quantity: quantity1.value,
          category: selectedCategory.value,
          description: desc1.value
          
        });

        addNewFieldTitle.value = "";
        dialog.value = false;
      }
      useNuxtApp().$toast.success("category added successfully..", {});
    }
    dialog.value = false;
    isError.value = "";

  };

  
  return {
    dynamicFields,
    headers,
    dialog,
    dialogDelete,
    product,
    deleteProduct,
    getProduct,
    deleteProductConfirm,
    categoryHeaders,
    category,
    getCategory,
    categoryData,
    deleteCategory,
    deleteCategoryConfirm,
    editedItem,
    select,
    randomId,
    addNewFieldTitle,
    createNewField,
    isError,
    createNewProduct,
    price, quantity, desc,
    price1,quantity1,desc1,
    selectedItem,
    selectedCategory,
    retrievedCategoryData
  };
});


