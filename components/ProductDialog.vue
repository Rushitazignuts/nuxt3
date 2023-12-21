<template>
  <div>
    <VDialog v-model="dialog" max-width="500px">
      <VCard>
        <VCardTitle>
          {{ type === "EDIT" ? "Edit category" : "Create category" }}
        </VCardTitle>

        <VCardText>
          <VContainer>
            <VRow>
              <VCol cols="6">
                <VTextField
                  v-if="type === 'EDIT'"
                  v-model="editedItem"
                  label="Title"
                  single-line
                />
                <VTextField
                  v-else
                  v-model="addNewFieldTitle"
                  label="Title"
                  single-line
                />
                <p v-if="isError" class="text-error">{{ isError }}</p>
              </VCol>
              <VCol cols="6">
                <v-select
                v-if="type === 'EDIT'"
                  v-model="selectedItem"
                  label="Category"
                  :items="productCategory"
                ></v-select>
                <v-select
                v-else
                  v-model="selectedCategory"
                  label="Category"
                  :items="productCategory"
                ></v-select>
              </VCol>
              <VCol cols="6">
                <VTextField
                v-if="type === 'EDIT'"
                  v-model="price"
                  label="Price"
                  single-line
                  class="mb-2"
                />
                <VTextField
                 v-else
                   v-model="price1"
                  label="Price"
                  single-line
                  class="mb-2"
                />
              </VCol>
              <VCol cols="6">
                <VTextField
                v-if="type === 'EDIT'"
                  v-model="quantity"
                  label="Quantity"
                  single-line
                  class="mb-2"
                />
                <VTextField
               v-else
                  v-model="quantity1"
                  label="Quantity"
                  single-line
                  class="mb-2"
                />
              </VCol>
              <VCol cols="12">
                <VTextField
                v-if="type === 'EDIT'"
                  v-model="desc"
                  label="Description"
                  single-line
                  class="mb-2"
                />
                <VTextField
               v-else
                  v-model="desc1"
                  label="Description"
                  single-line
                  class="mb-2"
                />
              </VCol>
            </VRow>
          </VContainer>
        </VCardText>

        <VCardActions>
          <VSpacer></VSpacer>
          <VBtn color="blue-darken-1" variant="text" @click="dialog = false">
            Cancel
          </VBtn>
          <VBtn
            color="blue-darken-1"
            variant="text"
            @click="createNewProduct(type, field, editedItem, price, quantity, desc, selectedItem)"
          >
            {{ type === "EDIT" ? "Save" : "Create" }}
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </div>
</template>
  
  <script setup>
import { useProductStore } from "../../store/pinia";
import { storeToRefs } from "pinia";

const props = defineProps({
  type: String,
  field: Object,
});

const productStore = useProductStore();
const { dialog, editedItem, selectedItem, selectedCategory,addNewFieldTitle, isError, categoryData,price, quantity, desc,price1,quantity1,desc1 } =
  storeToRefs(productStore);
const { getCategory, createNewProduct } = productStore;
const productCategory = categoryData.value.filter(item => item.status ? item.title : '')
onMounted(() => {
  getCategory();
});
</script>
  
  <style>
</style>