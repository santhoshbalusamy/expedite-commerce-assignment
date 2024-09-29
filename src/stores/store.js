import { createPinia, defineStore } from 'pinia'
import { getProductShowcaseMetadata, getuserProfileMetadata } from '@/api/DataService';

let initData = null;

export const createStore = () => {
  initData = {
    layout: null,
    data: null,
    methods: null,
    isDataFetched: false,
  };
  return createPinia();
};

export const useStore = defineStore('ecStore', {
  id: 'ecStore',
  state: () => initData,
  actions: {
    resetDataFetchFlag() {
      this.isDataFetched = false;
    },
    dataFetchComplete() {
      this.isDataFetched = true;
    },
    /**
     * set data to the store, with layout, data and methods
     * @param {Object} param
     */
    setData({ layout, data, methods }) {
      this.layout = layout;
      this.data = data;
      this.methods = methods;
    },
    /**
     * execute it as anonymus function with in the store
     * @param {String} methodString
     * @returns Function
     */
    processMethod(methodString) {
      try {
        return new Function(`return ${this.methods[methodString]}`).apply(this);
      } catch (ex) {
        console.log('Exception', ex);
      }
    },

    /**
     * execute method from the store
     * @param {String} methodName
     */
    executeMethod(methodName) {
      this.processMethod(methodName);
    },

    /**
     * load the user profile from the API
     */
    async loadUserProfileMetadata() {
      try {
        this.resetDataFetchFlag();
        const response = await getuserProfileMetadata();
        this.setData(response);
        this.dataFetchComplete();
      } catch (ex) {
        this.dataFetchComplete();
        console.log('error loading user profile', ex);
      }

    },

    /**
     * load the product showcase from the API
     */
    async loadProductShowcaseMetadata() {
      try {
        this.resetDataFetchFlag();
        const response = await getProductShowcaseMetadata();
        this.setData(response);
        this.dataFetchComplete();
      }
      catch (ex) {
        this.dataFetchComplete();
        console.log('error loading product', ex);
      }
    }
  },
})
