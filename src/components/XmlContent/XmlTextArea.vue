<script lang="ts" setup>
import { useFormDataStore } from '@/store/formData'
import { storeToRefs } from 'pinia'
const formDataStore = useFormDataStore()
const { xmlData } = storeToRefs(formDataStore)
</script>

<template>
    <v-textarea class="xml-text-area" :model-value="xmlData" :readonly="true"></v-textarea>
</template>

<style scoped>
.xml-text-area:deep(textarea) {
    field-sizing: content
}
</style>