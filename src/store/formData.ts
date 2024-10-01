import { defineStore } from "pinia"
import { computed, ref } from "vue"
import initialData from '../data/data.xml?raw'
import convert from 'xml-js'
import xmlFormat from 'xml-formatter'

export const useFormDataStore = defineStore('formData', () => {
    const data = ref<Object>(convert.xml2js(initialData, { 'compact': true, 'ignoreDeclaration': true, alwaysArray: true }))
    const setData = (newData: Object) => {
        console.log(JSON.stringify(newData));
        data.value = newData
    }
    const xmlData = computed(() => {
        return xmlFormat(convert.js2xml(data.value, { 'compact': true, 'ignoreDeclaration': true }))
    });

    return { data, setData, xmlData }

})
