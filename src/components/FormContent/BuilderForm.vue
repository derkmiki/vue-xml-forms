<script setup lang="ts">
import { JsonForms } from '@jsonforms/vue'
import { markRaw, type Raw } from 'vue'
import { extendedVuetifyRenderers } from '@jsonforms/vue-vuetify'
import schema from '../../json/schema.json'
import uischema from '../../json/uischema.json'
import { useFormDataStore } from '@/store/formData'
import { storeToRefs } from 'pinia'
import type { JsonFormsRendererRegistryEntry } from '@jsonforms/core'

const formDataStore = useFormDataStore();
const { data } = storeToRefs(formDataStore);

const renderers: Raw<JsonFormsRendererRegistryEntry[]> = markRaw([
    ...extendedVuetifyRenderers,
    // here you can add custom renderers
]);

</script>

<template>
    <JsonForms :renderers="renderers" :schema="schema" :uischema="uischema" :data="data"
        @change="(event) => formDataStore.setData(event.data)" />
</template>


<style scoped>
@import '@jsonforms/vue-vuetify/lib/jsonforms-vue-vuetify.css';
</style>