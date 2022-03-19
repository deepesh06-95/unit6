// require dependencies
const express = require('express')
// initialize express and port number
const app = express()
const port = 3000;
const schedule = require("node-schedule");
let script=[
	{
		'text': 'textOne',
		'dateTime': '2022-03-19 10:44:00.000'
},
{
		'text': 'textTwo',
		'dateTime': '2020-07-15 10:45:00.000'
},
{
		'text': 'textFinal',
		'dateTime': '2020-07-15 10:46:00.000'
},
{
    'text': 'textOne',
    'dateTime': '2022-03-19 10:47:00.000'
},
{
    'text': 'textTwo',
    'dateTime': '2020-07-15 10:48:00.000'
},
{
    'text': 'textFinal',
    'dateTime': '2020-07-15 10:49:00.000'
},
{
    'text': 'textOne',
    'dateTime': '2022-03-19 10:50:00.000'
},
{
    'text': 'textTwo',
    'dateTime': '2020-07-15 10:51:00.000'
},
{
    'text': 'textFinal',
    'dateTime': '2020-07-15 10:52:00.000'
},
{
    'text': 'textFinal',
    'dateTime': '2020-07-15 10:53:00.000'
}
];

// cron function
function cron(ms, fn) {
    function cb() {
        clearTimeout(timeout)
        fn()
    }
    let timeout = setTimeout(cb, ms)
    return () => {}
}
// setup cron job
   
script.forEach((s)=>{
    // cron(s.text.length*1000, () => console.log(s.text.split("").reverse().join("")));
    // console.log(new Date().toLocaleString());
    let date = new Date(s.dateTime)
    const sch = schedule.scheduleJob(date  , async function () {   
        await cron(s.text.length*1000, () => console.log(s.text.split("").reverse().join("")));
    });
})

// configure routes
app.get("/", (req, res) => {
    res.send("index route")
})
// start the server
app.listen(port, () => console.log(`Server: PORT ${port} active`))