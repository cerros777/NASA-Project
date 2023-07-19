const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'kepler exploration Y',
    rocket: "xplorer",
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442b',
    customers: ['ZTM', 'Nasa'],
    upcoming: true,
    success: true
};

launches.set(launch.flightNumber, launch);



function getAllLaunches(){
    return Array.from(launches.values());
}

function addNewLaunch(launch){
    latestFlightNumber++;
    launches.set(
        launch.flightNumber, 
        Object.assign(launch, {
            success: true,
            upcoming: true,
            customers: ['ztm', 'Nasa'],
            flightNumber : latestFlightNumber,
            
        }));
    }
    
    function existsLaunchWithId(launchId){
        console.log("Checking launchId:", launchId);
        const exists = launches.has(launchId);
        console.log("Launch ID exists:", exists);
        return exists;
    }

function abortLaunchById(launchId){
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    existsLaunchWithId,
    abortLaunchById,
}