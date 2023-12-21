<template>
  <div>
    <v-data-table :headers="headers" :items="product" class="mt-3">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Products page</v-toolbar-title>
          <v-spacer></v-spacer>
          <VBtn
            color="primary"
            dark
            class="mb-2"
            v-bind="props"
            @click="openProductDialog(null, 'CREATE')"
          >
            ADD New Product
          </VBtn>
        </v-toolbar>
      </template>
      <template v-slot:item.id="{ item }">
        {{ item.id }}
      </template>
      <template v-slot:item.name="{ item }">
        {{ item.title }}
      </template>
      <template v-slot:item.price="{ item }">
        {{ item.price }}
      </template>
      <template v-slot:item.qt="{ item }">
        {{ item.quantity }}
      </template>
      <template v-slot:item.category="{ item }">
        {{ item.category }}
      </template>
      <template v-slot:item.desc="{ item }">
        {{ item.description }}
      </template>
      
      <template v-slot:item.actions="{ item }">
        <MdiIcon icon="mdiPencil"  @click="openProductDialog(item, 'EDIT')"/>
        <MdiIcon
          icon="mdiEye"
          class="mx-2"
          @click="router.push(`/products/${item.id}`)"
        />
        <MdiIcon icon="mdiDelete" @click="deleteProduct(item.id)" />
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn variant="text" @click="dialogDelete = false">Cancel</v-btn>
              <v-btn variant="text" @click="deleteProductConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
    </v-data-table>
    <ProductDialog
      :is-visible="dialog"
      :type="dialogType"
      @click="ProductDialog = false"
      :field="productData"
    />
  </div>
</template>

<script setup>
const router = useRouter();
import { useProductStore } from "../../store/pinia";
import { storeToRefs } from "pinia";
const productStore = useProductStore();
const { headers, dynamicFields,categoryData, dialog, dialogDelete,editedItem, product,price, quantity, desc,selectedItem } =
  storeToRefs(productStore);
const { deleteProduct, getProduct, deleteProductConfirm } = productStore;
const dialogType = ref("EDIT");
 const productData = ref({});
 const openProductDialog = (data, type) => {
  dialogType.value = type;

  if (type === "EDIT") {
    editedItem.value = data.title;
    price.value=data.price;
    quantity.value = data.quantity;
    desc.value = data.description;
    selectedItem.value = data.category;
    productData.value = data;
    dialog.value = true;
  } else {
    dialog.value = true;
  }
};
onMounted(() => {
  getProduct();
  
});
</script>

<style>
</style>


