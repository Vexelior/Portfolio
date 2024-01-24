var nexusConnect = document.getElementById("nexusConnect");
var clearCast = document.getElementById("clearCast");
var clonePilot = document.getElementById("clonePilot");
var completionCompass = document.getElementById("completionCompass");

const url = 'https://api.github.com/repos/Vexelior/';
const headers = {
    'User-Agent': 'Vexelior',
    'Authorization': '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'
};

async function getRepoInfo(repo) {
    const response = await fetch(url + repo, {
        method: 'GET',
        headers: headers
    });
    return response.json();
}

// Nexus Connect
getRepoInfo("NexusConnectCRM").then(data => {
    var date = new Date(data.pushed_at);
    var dateSplit = date.toLocaleDateString().split("/");
    var dateFormatted = dateSplit[0] + "/" + dateSplit[1] + "/" + dateSplit[2];
    nexusConnect.innerHTML = "Updated: " + dateFormatted;
});

// ClearCast
getRepoInfo("ClearCast").then(data => {
    var date = new Date(data.pushed_at);
    var dateSplit = date.toLocaleDateString().split("/");
    var dateFormatted = dateSplit[0] + "/" + dateSplit[1] + "/" + dateSplit[2];
    clearCast.innerHTML = "Updated: " + dateFormatted;
});

// Clone Pilot
getRepoInfo("ClonePilot").then(data => {
    var date = new Date(data.pushed_at);
    var dateSplit = date.toLocaleDateString().split("/");
    var dateFormatted = dateSplit[0] + "/" + dateSplit[1] + "/" + dateSplit[2];
    clonePilot.innerHTML = "Updated: " + dateFormatted;
});

// Completion Compass
getRepoInfo("CompletionCompass").then(data => {
    var date = new Date(data.pushed_at);
    var dateSplit = date.toLocaleDateString().split("/");
    var dateFormatted = dateSplit[0] + "/" + dateSplit[1] + "/" + dateSplit[2];
    completionCompass.innerHTML = "Updated: " + dateFormatted;
});
