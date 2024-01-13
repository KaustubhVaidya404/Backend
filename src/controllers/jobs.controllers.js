
import db from "../db/firestore.js";

const docRef = db.collection('jobs');
const getdoc = await docRef.get();

const getAllJobs = async (req, res)=>{
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


const postJob = async (req,res) => {
    try{
        const jobJson = {
            jobtitle: req.body.jobtitle,
            jobdesc: req.body.jobdesc,
            jobskills: req.body.jobskills,
            jobduration: req.body.jobduration,
            jobstipend: req.body.jobstipend,
            postdate: req.body.postdate
        };
        const response = docRef.add(jobJson);
        req.send(response)
    } catch (error) {
        res.send(error);
    }
};

export {getAllJobs, postJob}