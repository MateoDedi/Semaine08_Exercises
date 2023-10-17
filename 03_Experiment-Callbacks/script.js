fakeCallToAnAPI(
    // The fake url of the fake API
    "api/movies",
    // The callback if it's a success
    (data) => {
        console.log("SUCCESS");
        console.log(data);
    }, // The callback if there was an error
    (data) => {
        console.log("ERROR");
        console.log(data);
    }
);