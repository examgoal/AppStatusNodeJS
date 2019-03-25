const express = require('express');

const app = express();

const apps = require('./apps');

//AWS Health Check
app.get('/healthCheck', (req, res, next)=>{
    return res.send({status: 'ok'});
});

//Old Routes of GitHub

app.get('/gateapp/checksys.json', (req, res, next)=>{
    return res.send({
        maintain: false,
        server_alive: true,
        msg: null
    });
});

app.get('/jeemainQ/checksys.json', (req, res, next)=>{
    return res.send({
        maintain: false,
        server_alive: true,
        msg: null
    });
});

app.get('/gateapp/sysevents.json', (req, res, next)=>{
   return res.send(
       {
           "events": [],
           "sample_event":{
               "event_title": null,
               "event_description": null,
               "event_date": null
           }
       });
});

app.get('/jeemainQ/sysevents.json', (req, res, next)=>{
    return res.send(
        {
            "events": [],
            "sample_event":{
                "event_title": null,
                "event_description": null,
                "event_date": null
            }
        });
});

//New Routes
app.use('/apps', apps);

app.use('*', (req, res, next)=>{

   return res.status(404).send("404 Not Found");

});

app.listen(process.env.PORT || 3000, ()=>{
    console.log('App Started at http://localhost:'+(process.env.PORT || 3000));
});