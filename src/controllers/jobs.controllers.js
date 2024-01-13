
import db from "../db/firestore.js";

const docRef = await db.collection('jobs');

const getAllJobs = async (req, res)=>{
    try{
        const jobRef = docRef;
        const getresponse = await jobRef.get();
        let responseArr = [];
        getresponse.forEach(doc => {
            responseArr.push(doc.data())
        });
        res.send(responseArr);
    } catch(e) {
        res.send({error: e})
    }
};

const getByJobTitle = async (req, res) => {
    try{
        const jobRef = docRef.doc(req.params.id);
        const getresponse = await jobRef.get();
        res.send(getresponse.data());
    } catch(e) {
        res.send({error: e})
    }
}


const postJob = async (req,res) => {
    try{
        let rannum = Math.random();
        let rawtitlestr = req.body.jobtitle;
        let titlestr = rawtitlestr.split(" ").join("");
        const id = rannum+"|"+titlestr;
        const jobJson = {
            jobtitle: req.body.jobtitle,
            jobdesc: req.body.jobdesc,
            orgname: req.body.orgname,
            jobduration: req.body.jobduration,
            jobstipend: req.body.jobstipend,
            skills: req.body.skills,
            perks: req.body.perks,
            noofopenings: req.body.noofopenings,
            postdate: req.body.postdate
        };
        const response = docRef.doc(id).set(jobJson);
        req.send(response)
    } catch (error) {
        res.send(error);
    }
};

export {getAllJobs, postJob, getByJobTitle}