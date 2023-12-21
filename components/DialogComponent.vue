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
              <VCol cols="12">
                <VTextField
                  v-if="type === 'EDIT'"
                  v-model="editedItem"
                  label="Title"
                  single-line
                  class="mb-2"
                />
                <VTextField
                  v-else
                  v-model="addNewFieldTitle"
                  label="Title"
                  single-line
                  class="mb-2"
                />
                <p v-if="isError" class="text-error">{{ isError }}</p>
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
            @click="createNewField(type, field, editedItem)"
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
const { dialog, editedItem, addNewFieldTitle, isError } = storeToRefs(productStore);
const { getCategory, createNewField } = productStore;
const retrievedCategoryData = ref([]);

onMounted(() => {
  getCategory();
  const storedCategoryData = JSON.parse(localStorage.getItem('categoryData') || '{}')
  if (storedCategoryData) {
    retrievedCategoryData.value = storedCategoryData;
  }
});
</script>

<style>
</style>