import superagent from "superagent"
import {expectedSingleUser, expectedListUsers, expectedObjcreateUser, expectedSingleUserNotFound, expectedUpdate, expectedLoginSuccess, expectedLoginUnsuccessful, expectedregistersuccessful, expectedregisterUnsuccessful, expectedSingleResource, expectedListResource, expectedUpdatePatch } from "../helpers/expected"




describe ('Get', ()=> {
    it ('List Users', async () => {
        const res = await superagent.get ('https://reqres.in/api/users?page=2')
        // console.log(res.body); 
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(expectedListUsers)
    })
    it ('Single User', async () => {
        const res = await superagent.get ('https://reqres.in/api/users/2')
        // console.log(res.body); 
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(expectedSingleUser)
    })

    it ('Single User not found', async () => {
        const res = await superagent.get ('https://reqres.in/api/users/23')
        // console.log(res.body); 
        expect(res.status).toEqual(404);
        expect(res.body).toEqual(expectedSingleUserNotFound)
    })
    it ('Single <Resource>', async () => {
        const res = await superagent.get('https://reqres.in/api/unknown/2')
        expect(res.status).toBe(200); 
        expect(res.body).toStrictEqual(expectedSingleResource)
    })
    it ('List <Resource>', async () => {
        const res = await superagent.get('https://reqres.in/api/unknown')
        expect(res.status).toBe(200); 
        expect(res.body).toStrictEqual(expectedListResource)
    })
})

describe ('Post', () => {
    it ('Create User', async () => {
        const res = await superagent
            .post('https://reqres.in/api/users')
            .set("Content-Type", "application/json")
            .send({name: "morpheus", job: "leader", id: "174"})
        expect(res.statusCode).toEqual(201);
        expect(res.body.name).toEqual(expectedObjcreateUser.name)
        expect(res.body.job).toEqual(expectedObjcreateUser.job)
        expect(res.body.id).toEqual(expectedObjcreateUser.id)
    })
    it ('Register successful', async () => {
        const res = await superagent
            .post('https://reqres.in/api/register')
            .set("Content-Type", "application/json")
            .send({"email": "eve.holt@reqres.in", "password": "cityslicka"})
        expect(res.statusCode).toEqual(200);
        expect(res.body.id).toEqual(expectedregistersuccessful.id)
        expect(res.body.token).toEqual(expectedregistersuccessful.token)
    })

    it ('Register unsuccessful', async () => {
        try {
        const res = await superagent
            .post('https://reqres.in/api/register')
            .set("Content-Type", "application/json")
            .send({"email": "sydney@fife"})
        expect(res.statusCode).toEqual(400);
        expect(res.body.error).toEqual(expectedregisterUnsuccessful.error)
        } catch (err: any) {
            expect(err.message).toEqual('Bad Request')
        }
    })
    it ('Login successful', async () => {
        const res = await superagent
            .post('https://reqres.in/api/login')
            .set("Content-Type", "application/json")
            .send({"email": "eve.holt@reqres.in", "password": "cityslicka"})
        expect(res.statusCode).toEqual(200);
        expect(res.body.token).toEqual(expectedLoginSuccess.token)
    })
    it ('Login unsuccessful', async () => {
        try {
            const res = await superagent
            .post('https://reqres.in/api/login')
            .set("Content-Type", "application/json")
            .send({"email": "peter@klaven"})
        expect(res.statusCode).toEqual(400);
        expect(res.body.error).toEqual(expectedLoginUnsuccessful.error)
        } catch (err: any) {
            expect(err.message).toEqual('Bad Request')
        }
    })
})






describe ('Others', () => {
    it ('Update User', async () => {
        const res = await superagent
            .put('https://reqres.in/api/users/2')
            .set("Content-Type", "application/json")
            .send({name: "morpheus", job: "zion resident"})
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual(expectedUpdate.name)
        expect(res.body.job).toEqual(expectedUpdate.job)
    })

    it ('Delete User', async () => {
        const res = await superagent
            .delete('https://reqres.in/api/users/2')
            .set("Content-Type", "application/json")
        expect(res.statusCode).toEqual(204);
    })
    it ('Update', async () => {
        const res = await superagent 
        .patch('https://reqres.in/api/users/2')
        .set("Content-Type", "application/json")
        .send({name: "morpheus", job: "zion resident"})
        expect(res.status).toBe(200)
        expect(res.body.name).toEqual(expectedUpdatePatch.name); 
        expect(res.body.job).toEqual(expectedUpdatePatch.job);
    })
})