import { mailBase } from "./helpers/unit.helpers"
class RegForm {
    FirstName (value: any) {
        if (typeof value !== 'string') {
            throw new Error ('Firstname must be string')
        }
        else {
            return value
        }
    }
    LastName (value: any) {
          if (typeof value === 'number') {
            throw new Error ('Lastname must be string')
        }
        else {
            return value
        }
    }
    Country (value: any) {
        if (typeof value !== 'string') {
            throw new Error ('Country must be string')
        } else if (value !== 'Belarus') {
            throw new Error ('Country must be Belarus')
        }
        else {
            return value
        }
    }
    EMail (value: any) {
        mailBase.map(
            (value: string, index: number, arr: (string)[]) => {
                return value
            })
        const email = /([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}/.test(value);
        if (mailBase.includes(value)) {
            return 'Данный адрес уже занят'
        } else if (email === false ) {
            return 'Проверьте введенные данные'
        } else {
            return 'Ok'
        }

    }
    PhoneNumber (value: any) {
        const phone = /^\+\d{3}\(\d{2}\)\d{3}-\d{2}-\d{2}$/.test(value)
        if (phone === true) {
            return 'Телефон верный'
        } else {
            return 'Телефон неверный, введите в формате +375(**)***-**-**'
        }

    }
    Gender (value: any) {
        if (value.includes('Male') || value.includes('Female')) {
            return 'Ok'
        }
        else {
            return 'Error'
        }
    }
}
const exemplar = new RegForm()
// console.log(exemplar.Country('belarus'))
export {RegForm}

