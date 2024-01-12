
import db from "../db/firestore.js";

const docRef = db.collection('job').doc('samplejobs');
const getdoc = await docRef.get();

const getDashboard = async (req, res)=>{
    if(getdoc.exists){
        const data = getdoc.data();
        res.json({
            success: true,
            data
        })
    } else {
        res.json({ success: false, message: 'Document not found' });
    }
};



export {getDashboard}