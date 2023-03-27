import Vue from 'vue'

import {
  setInteractionMode,
  ValidationObserver,
  ValidationProvider,
} from 'vee-validate'

import { validations } from '../mixins/validations'

validations()

setInteractionMode('eager')

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
