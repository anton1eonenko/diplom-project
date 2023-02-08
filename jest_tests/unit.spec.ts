import { RegForm } from "../registrationForm"
describe ('Name', () => {
    test ('liquid name', () => {
        let expected = 'Anton'
        let actual = new RegForm().FirstName('Anton')
        expect(actual).toBe(expected)
    })
    test ('liquid name', () => {
        let expected = 'anton'
        let actual = new RegForm().FirstName('anton')
        expect(actual).toBe(expected)
    })
    test ('liquid name', () => {
        let expected = 'Антон'
        let actual = new RegForm().FirstName('Антон')
        expect(actual).toBe(expected)
    })
    test ('illiquid name', () =>{
        let expected = 'Anton'
        let actual = new RegForm().FirstName(false)
        expect(actual).toBe(expected)
    })
    test ('illiquid name', () =>{
        let expected = 'Anton'
        let actual = new RegForm().FirstName(123)
        expect(actual).toBe(expected)
    })
})

describe ('LastName', () => {
    test ('liquid Lastname', () => {
        let expected = 'Leonenko'
        let actual = new RegForm().FirstName('Leonenko')
        expect(actual).toBe(expected)
    })
    test ('liquid Lastname', () => {
        let expected = 'leonenko'
        let actual = new RegForm().FirstName('leonenko')
        expect(actual).toBe(expected)
    })
    test ('liquid Lastname', () => {
        let expected = 'Леоненко'
        let actual = new RegForm().FirstName('Леоненко')
        expect(actual).toBe(expected)
    })
    test ('illiquid Lastname', () =>{
        let expected = 'Leonenko'
        let actual = new RegForm().FirstName(true)
        expect(actual).toBe(expected)
    })
    test ('illiquid Lastname', () =>{
        let expected = 'Leonenko'
        let actual = new RegForm().FirstName(123)
        expect(actual).toBe(expected)
    })
})

describe ('Country', () => {
    test ('liquid Country', () => {
        let expected = 'Belarus'
        let actual = new RegForm().Country('Belarus')
        expect(actual).toBe(expected)
    })
    test ('liquid Country', () => {
        let expected = 'Belarus'
        let actual = new RegForm().Country('USA')
        expect(actual).toBe(expected)
    })
    test ('illiquid Country', () => {
        let expected = 'Belarus'
        let actual = new RegForm().Country(123)
        expect(actual).toBe(expected)
    })
    test ('illiquid Country', () => {
        let expected = 'Belarus'
        let actual = new RegForm().Country('')
        expect(actual).toBe(expected)
    })
    test ('illiquid Country', () => {
        let expected = 'Belarus'
        let actual = new RegForm().Country('belarus')
        expect(actual).toBe(expected)
    })
})

describe ('EMail', () => {
    test ('liquid EMail', () => {
        let expected = 'Ok'
        let actual = new RegForm().EMail('antonleon@mail.com')
        expect(actual).toBe(expected)
    })
    test ('liquid EMail', () => {
        let expected = 'Ok'
        let actual = new RegForm().EMail('vasyapup@mail.ru')
        expect(actual).toBe(expected)
    })
    test ('liquid EMail', () => {
        let expected = 'Данный адрес уже занят'
        let actual = new RegForm().EMail('anton@tut.by')
        expect(actual).toBe(expected)
    })
    test ('illiquid EMail', () => {
        let expected = 'Проверьте введенные данные'
        let actual = new RegForm().EMail('anton@@tut.by')
        expect(actual).toBe(expected)
    })
    test ('illiquid EMail', () => {
        let expected = 'Проверьте введенные данные'
        let actual = new RegForm().EMail('antontut.by')
        expect(actual).toBe(expected)
    })
    test ('illiquid EMail', () => {
        let expected = 'Проверьте введенные данные'
        let actual = new RegForm().EMail('anton@tutby')
        expect(actual).toBe(expected)
    })
})

describe ('PhoneNumber', () => {
    test ('liquid PhoneNumber', () => {
        let expected = 'Телефон верный'
        let actual = new RegForm().PhoneNumber('+375(29)374-08-28')
        expect(actual).toBe(expected)
    })
    test ('liquid PhoneNumber', () => {
        let expected = 'Телефон верный'
        let actual = new RegForm().PhoneNumber('+375(33)374-85-28')
        expect(actual).toBe(expected)
    })
    test ('illiquid PhoneNumber', () => {
        let expected = 'Телефон неверный, введите в формате +375(**)***-**-**'
        let actual = new RegForm().PhoneNumber('+375(293)374-08-28')
        expect(actual).toBe(expected)
    })
    test ('illiquid PhoneNumber', () => {
        let expected = 'Телефон неверный, введите в формате +375(**)***-**-**'
        let actual = new RegForm().PhoneNumber('+375(29)374-08-28-82')
        expect(actual).toBe(expected)
    })
    test ('illiquid PhoneNumber', () => {
        let expected = 'Телефон неверный, введите в формате +375(**)***-**-**'
        let actual = new RegForm().PhoneNumber('+37529374-08-28')
        expect(actual).toBe(expected)
    })
})

describe ('Gender', () => {
    test ('liquid Gender', () => {
        let expected = 'Ok'
        let actual = new RegForm().Gender('Male')
        expect(actual).toBe(expected)
    })
    test ('liquid Gender', () => {
        let expected = 'Ok'
        let actual = new RegForm().Gender('Female')
        expect(actual).toBe(expected)
    })
    test ('illiquid Gender', () => {
        let expected = 'Error'
        let actual = new RegForm().Gender('-')
        expect(actual).toBe(expected)
    })
    test ('illiquid Gender', () => {
        let expected = 'Error'
        let actual = new RegForm().Gender('')
        expect(actual).toBe(expected)
    })
})