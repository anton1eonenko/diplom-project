import { RegForm } from "../registrationForm"
describe ('FirstName', () => {
    test ('+1', () => {
        let expected = 'Anton'
        let actual = new RegForm().FirstName('Anton')
        expect(actual).toBe(expected)
    })
    test ('+2', () => {
        let expected = 'anton'
        let actual = new RegForm().FirstName('anton')
        expect(actual).toBe(expected)
    })
    test ('+3', () => {
        let expected = 'Антон'
        let actual = new RegForm().FirstName('Антон')
        expect(actual).toBe(expected)
    })
    test ('-1', () =>{
        let expected = 'Anton'
        let actual = new RegForm().FirstName(false)
        expect(actual).toBe(expected)
    })
    test ('-2', () =>{
        let expected = 'Anton'
        let actual = new RegForm().FirstName(123)
        expect(actual).toBe(expected)
    })
})

describe ('LastName', () => {
    test ('+1', () => {
        let expected = 'Leonenko'
        let actual = new RegForm().FirstName('Leonenko')
        expect(actual).toBe(expected)
    })
    test ('+2', () => {
        let expected = 'leonenko'
        let actual = new RegForm().FirstName('leonenko')
        expect(actual).toBe(expected)
    })
    test ('+3', () => {
        let expected = 'Леоненко'
        let actual = new RegForm().FirstName('Леоненко')
        expect(actual).toBe(expected)
    })
    test ('-1', () =>{
        let expected = 'Leonenko'
        let actual = new RegForm().FirstName(true)
        expect(actual).toBe(expected)
    })
    test ('-2', () =>{
        let expected = 'Leonenko'
        let actual = new RegForm().FirstName(123)
        expect(actual).toBe(expected)
    })
})

describe ('Country', () => {
    test ('+1', () => {
        let expected = 'Belarus'
        let actual = new RegForm().Country('Belarus')
        expect(actual).toBe(expected)
    })
    test ('+2', () => {
        let expected = 'Belarus'
        let actual = new RegForm().Country('USA')
        expect(actual).toBe(expected)
    })
    test ('-1', () => {
        let expected = 'Belarus'
        let actual = new RegForm().Country(123)
        expect(actual).toBe(expected)
    })
    test ('-2', () => {
        let expected = 'Belarus'
        let actual = new RegForm().Country('')
        expect(actual).toBe(expected)
    })
    test ('-3', () => {
        let expected = 'Belarus'
        let actual = new RegForm().Country('belarus')
        expect(actual).toBe(expected)
    })
})

describe ('EMail', () => {
    test ('+1', () => {
        let expected = 'Ok'
        let actual = new RegForm().EMail('antonleon@mail.com')
        expect(actual).toBe(expected)
    })
    test ('+2', () => {
        let expected = 'Ok'
        let actual = new RegForm().EMail('vasyapup@mail.ru')
        expect(actual).toBe(expected)
    })
    test ('+3', () => {
        let expected = 'Данный адрес уже занят'
        let actual = new RegForm().EMail('anton@tut.by')
        expect(actual).toBe(expected)
    })
    test ('-1', () => {
        let expected = 'Проверьте введенные данные'
        let actual = new RegForm().EMail('anton@@tut.by')
        expect(actual).toBe(expected)
    })
    test ('-2', () => {
        let expected = 'Проверьте введенные данные'
        let actual = new RegForm().EMail('antontut.by')
        expect(actual).toBe(expected)
    })
    test ('-3', () => {
        let expected = 'Проверьте введенные данные'
        let actual = new RegForm().EMail('anton@tutby')
        expect(actual).toBe(expected)
    })
})

describe ('PhoneNumber', () => {
    test ('+1', () => {
        let expected = 'Телефон верный'
        let actual = new RegForm().PhoneNumber('+375(29)374-08-28')
        expect(actual).toBe(expected)
    })
    test ('+2', () => {
        let expected = 'Телефон верный'
        let actual = new RegForm().PhoneNumber('+375(33)374-85-28')
        expect(actual).toBe(expected)
    })
    test ('-1', () => {
        let expected = 'Телефон неверный, введите в формате +375(**)***-**-**'
        let actual = new RegForm().PhoneNumber('+375(293)374-08-28')
        expect(actual).toBe(expected)
    })
    test ('-2', () => {
        let expected = 'Телефон неверный, введите в формате +375(**)***-**-**'
        let actual = new RegForm().PhoneNumber('+375(29)374-08-28-82')
        expect(actual).toBe(expected)
    })
    test ('-3', () => {
        let expected = 'Телефон неверный, введите в формате +375(**)***-**-**'
        let actual = new RegForm().PhoneNumber('+37529374-08-28')
        expect(actual).toBe(expected)
    })
})

describe ('Gender', () => {
    test ('+1', () => {
        let expected = 'Ok'
        let actual = new RegForm().Gender('Male')
        expect(actual).toBe(expected)
    })
    test ('+2', () => {
        let expected = 'Ok'
        let actual = new RegForm().Gender('Female')
        expect(actual).toBe(expected)
    })
    test ('-1', () => {
        let expected = 'Error'
        let actual = new RegForm().Gender('-')
        expect(actual).toBe(expected)
    })
    test ('-2', () => {
        let expected = 'Error'
        let actual = new RegForm().Gender('')
        expect(actual).toBe(expected)
    })
})