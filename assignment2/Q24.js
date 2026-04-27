let jsonString = '{"name": John" "age": "30"}';
try {
    let obj = JSON.parse(jsonString);
    console.log(obj);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log("Invalid JSON format");
    } else {
        console.log("Error:", error.message);
    }
}