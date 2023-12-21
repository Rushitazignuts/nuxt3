<template>
  <div>
    <VDataTable
      :headers="categoryHeaders"
      :items="categoryData"
      class="mt-3"
    >
      <template v-slot:top>
        <VToolbar flat>
          <VToolbarTitle>Products page</VToolbarTitle>
          <VSpacer></VSpacer>
          <VBtn
            color="primary"
            dark
            class="mb-2"
            v-bind="props"
            @click="openDialog(null, 'CREATE')"
          >
            ADD New Category
          </VBtn>
        </VToolbar>
      </template>
      <template v-slot:item.id="{ item }">
        {{ item.id }}
      </template>
      <template v-slot:item.name="{ item }">
        {{ item.title }}
      </template>
      <template v-slot:item.status="{ item }">
        <VSwitch v-model="item.status" color="info"></VSwitch>
      </template>
      <template v-slot:item.actions="{ item }">
        <MdiIcon
          icon="mdiPencil"
          class="mx-2"
          @click="openDialog(item, 'EDIT')"
        />
        <MdiIcon icon="mdiDelete" @click="deleteCategory(item.id)" />
        <VDialog v-model="dialogDelete" max-width="500px">
          <VCard>
            <VCardTitle>Are you sure you want to delete this item?</VCardTitle>
            <VCardActions>
              <VSpacer></VSpacer>
              <VBtn variant="text" @click="dialogDelete = false">Cancel</VBtn>
              <VBtn variant="text" @click="deleteCategoryConfirm">OK</VBtn>
              <VSpacer></VSpacer>
            </VCardActions>
          </VCard>
        </VDialog>
      </template>
    </VDataTable>
    <DialogComponent
      :is-visible="dialog"
      :type="dialogType"
      @click="dialog = false"
      :field="fieldData"
    />
  </div>
</template>
  
<script setup>
import { useProductStore } from "../../store/pinia";
import { storeToRefs } from "pinia";

const productStore = useProductStore();
const {
  categoryData,
  categoryHeaders,
  dialog,
  dialogDelete,
  editedItem,
  retrievedCategoryData,
} = storeToRefs(productStore);
const { deleteCategory, getCategory, deleteCategoryConfirm } = productStore;

const dialogType = ref("EDIT");
const fieldData = ref({});
const openDialog = (data, type) => {
  dialogType.value = type;

  if (type === "EDIT") {
    editedItem.value = data.title;
    fieldData.value = data;
    dialog.value = true;
  } else {
    dialog.value = true;
  }
};

// const getLocalStorageData = () => {
//   // const storedCategoryData = JSON.parse(localStorage.getItem("categoryData"));

//   // retrievedCategoryData.value = storedCategoryData;

//   // if (!storedCategoryData) {
//   //   localStorage.setItem("categoryData", JSON.stringify(categoryData.value));
//   // }
// };
onMounted(() => {
  getCategory();
});
</script>
  
<style></style>