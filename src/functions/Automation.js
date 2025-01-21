import { db } from "../firebase" 

async function automation() {
    try {
        await db.collection('i23742').doc('parent').set({})
    }
    catch (error) {
        console.log(error)
    }
}