//asynchronous function to load config.json file
async function loadConfig(){
    let result = await fetch("../../config.json");
    return result.json();
}