
const getDashboard = (req, res)=>{
    res.send([
        {
            "id": "001",
            "job title": "Java full stack dev",
            "duration": "6 months",
            "stipend": "1000"
        },
        {
            "id": "002",
            "job title": "MERN stack dev",
            "duration": "6 months",
            "stipend": "1000"
        },
        {
            "id": "003",
            "job title": "Frontend dev",
            "duration": "6 months",
            "stipend": "1000"
        },
        {
            "id": "004",
            "job title": "Backend dev",
            "duration": "6 months",
            "stipend": "1000"
        },
    ])
};

export {getDashboard}