import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db } from './config'

export const addNewUserIntoDb = async (collectionName, user) => {

    const docRef = await addDoc(collection(db, collectionName), {
        ...user
    });
    console.log("Document written with ID: ", docRef.id);
}