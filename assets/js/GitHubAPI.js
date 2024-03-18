var nexusConnect = document.getElementById("nexusConnect");
var guardianLock = document.getElementById("guardianLock");
var clonePilot = document.getElementById("clonePilot");
var completionCompass = document.getElementById("completionCompass");
var luxeLoft = document.getElementById("luxeLoft");

const url = 'https://api.github.com/repos/Vexelior/';
const headers = {
    'User-Agent': 'Vexelior',
    // 'Authorization': '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'
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
getRepoInfo("GuardianLock").then(data => {
    var date = new Date(data.pushed_at);
    var dateSplit = date.toLocaleDateString().split("/");
    var dateFormatted = dateSplit[0] + "/" + dateSplit[1] + "/" + dateSplit[2];
    guardianLock.innerHTML = "Updated: " + dateFormatted;
});

// Clone Pilot
getRepoInfo("ClonePilot").then(data => {
    var date = new Date(data.pushed_at);
    var dateSplit = date.toLocaleDateString().split("/");
    var dateFormatted = dateSplit[0] + "/" + dateSplit[1] + "/" + dateSplit[2];
    clonePilot.innerHTML = "Updated: " + dateFormatted;
});

// Luxe Loft
getRepoInfo("LuxeLoft").then(data => {
    var date = new Date(data.pushed_at);
    var dateSplit = date.toLocaleDateString().split("/");
    var dateFormatted = dateSplit[0] + "/" + dateSplit[1] + "/" + dateSplit[2];
    luxeLoft.innerHTML = "Updated: " + dateFormatted;
});
