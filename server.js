const express = require('express');
const {instance} = require('./axios-morningstar');

const port = process.env.PORT || 3030;
const fixedQueryParams = "&currencyId=EUR&idtype=isin&frequency=daily&outputType=JSON"
const app = express();

app.get('/', (req, res) => {
    queryParams = req.query;
    instance.get(`/timeseries_price/2nhcdckzon?id=${queryParams.id}&startDate=${queryParams.startDate}&endDate=${queryParams.endDate}${fixedQueryParams}`)
        .then(response => {
            res.status(200).header('Access-Control-Allow-Origin','*').send(response.data);
        })
        .catch(err => {
            console.log(err);
        });
});

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});
