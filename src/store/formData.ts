import { defineStore } from "pinia";
import { computed, ref } from "vue";
import intialData from '../json/data.json';
import { toXML } from 'jstoxml';
import xmlFormat from 'xml-formatter';

export const useFormDataStore = defineStore('formData', () => {
    const data = ref<Object>(intialData)
    const setData = (newData: Object) => {
        data.value = newData
    }
    const xmlData = computed(() => {
        return xmlFormat('<root>' + toXML(data.value) + '</root>')
    });

    return {data, setData, xmlData}

})
