const req = new XMLHttpRequest();

req.open("GET", "https://catfact.ninja/facts");
req.responseType = "json";

req.onload = function () {
    if (req.status === 200) {
        const responseData = req.response;
        // console.log(responseData); // You can access the response data here

        // You can store the response data in a variable or use it for further processing
        const catFacts = responseData;
        console.log(catFacts); // This will log the array of cat facts

        // You can access individual facts like this
        // console.log(catFacts[0].fact); // Access the first cat fact
    } else {
        console.error("Request failed with status:", req.status);
    }
};

req.send();
