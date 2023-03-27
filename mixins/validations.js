import { extend } from 'vee-validate'
import { email, required } from 'vee-validate/dist/rules'
export const validationFunctions = {
  email() {
    extend('email', {
      ...email,
      message: 'E-mail inválido',
    })
  },
  required() {
    extend('required', {
      ...required,
      message: 'Campo obrigatório',
    })
  },
}

export const validations = () => {
  for (const item in validationFunctions) {
    validationFunctions[item]()
  }
}
