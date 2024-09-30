<script setup lang="ts">
import { ref, type Ref } from 'vue'
import BuilderForm from './FormContent/BuilderForm.vue'
import XmlTextArea from './XmlContent/XmlTextArea.vue';
const activeKey: Ref = ref('1')
</script>

<template>
    <v-card>
        <v-tabs v-model="activeKey">
            <v-tab value="1">XML</v-tab>
            <v-tab value="2">Form</v-tab>
        </v-tabs>
        <v-card-text>
            <v-tabs-window v-model="activeKey">
                <v-tabs-window-item value="1">
                    <XmlTextArea />
                </v-tabs-window-item>
                <v-tabs-window-item value="2">
                    <BuilderForm />
                </v-tabs-window-item>
            </v-tabs-window>
        </v-card-text>
    </v-card>
</template>
<style scoped></style>