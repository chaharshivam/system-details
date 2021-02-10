const os = require('os');

function check_platform(){
    let platform = os.platform();
    let platform_name = null;
    switch(platform) {
        case 'aix':
            platform_name = "IBM AIX";
            break;
        case 'darwin':
            platform_name = "Darwin (MacOS, IOS etc)";
            break;
        case 'freebsd':
            platform_name = "FreeBSD";
            break;
        case 'linux':
            platform_name = "Linux";
            break;
        case 'openbsd':
            platform_name = "OpenBSD";
            break;
        case 'sunos':
            platform_name = "SunOS";
            break;
        case 'win32':
            platform_name = "Windows";
            break;
        default:
            platform_name = "Unknown";
    }
    return platform_name;
}

function totalMemory(){
    let total_memory = os.totalmem();
    let total_mem_in_kb = total_memory/1024;
    let total_mem_in_mb = total_mem_in_kb/1024;
    let total_mem_in_gb = total_mem_in_mb/1024;

    total_mem_in_kb = Math.floor(total_mem_in_kb);
    total_mem_in_mb = Math.floor(total_mem_in_mb);

    let memObj = {
        total_mem_in_gb : Math.floor(total_mem_in_gb),
        total_mem_in_mb : total_mem_in_mb%1024,
        total_mem_in_kb : total_mem_in_kb%1024,
        total_memory : total_memory%1024
    }
    return memObj;
}
function FreeMemory(){
    let free_memory = os.freemem();
    let free_mem_in_kb = free_memory/1024;
    let free_mem_in_mb = free_mem_in_kb/1024;
    let free_mem_in_gb = free_mem_in_mb/1024;

    free_mem_in_kb = Math.floor(free_mem_in_kb);
    free_mem_in_mb = Math.floor(free_mem_in_mb);

    let freeMemObj = {
        free_mem_in_gb : Math.floor(free_mem_in_gb),
        free_mem_in_mb : free_mem_in_mb%1024,
        free_mem_in_kb : free_mem_in_kb%1024,
        free_memory : free_memory%1024
    }
    return freeMemObj;
}
function sysUptime () {
    let uptimeInSec = os.uptime();
    let uptimeInMin = uptimeInSec/60;
    let uptimeInHrs = uptimeInMin/60;
    let uptimeInDays = uptimeInHrs/24;
    uptimeInSec = Math.floor(uptimeInSec);
    uptimeInMin = Math.floor(uptimeInMin);
    uptimeInHrs = Math.floor(uptimeInHrs);
    uptimeInDays = Math.floor(uptimeInDays);
    uptimeInDays = uptimeInDays%24;
    uptimeInHrs = uptimeInHrs%24;
    uptimeInMin = uptimeInMin%60;
    uptimeInSec = uptimeInSec%60;
    let uptimeObj = {
        uptime_Seconds : uptimeInSec,
        uptime_Minutes : uptimeInMin,
        uptime_Hrs : uptimeInHrs,
        uptime_days : uptimeInDays
    }
    return uptimeObj
}
function endianness() {
    let endianness = os.endianness();
    switch (endianness){
        case "BE": return "BE (Big endian)";
        case "LE": return "LE (Little endian)";
        default : return "unknown";
    }
}
let platform_name = check_platform();
let totalMem = totalMemory();
let freeMem = FreeMemory();
let system_uptime = sysUptime();
let endian = endianness();

const osInfo = [
    {
        "Property Name": "Platform", "Property Value": platform_name
    },
    {
        "Property Name": "Version", "Property Value": os.release()
    },
    {
        "Property Name": "OS Architecture", "Property Value": os.arch()
    },
    {
        "Property Name": "OS Type", "Property Value": os.type()
    },
    {
        "Property Name": "Total Memory", "Property Value": ` ${totalMem.total_mem_in_gb}GB ${totalMem.total_mem_in_mb}MB ${totalMem.total_mem_in_kb}KB ${totalMem.total_memory}Bytes `
    },
    {
        "Property Name": "Free Memory", "Property Value": ` ${freeMem.free_mem_in_gb}GB ${freeMem.free_mem_in_mb}MB ${freeMem.free_mem_in_kb}KB ${freeMem.free_memory}Bytes `
    },
    {
        "Property Name": "System uptime", "Property Value": ` ${system_uptime.uptime_days}Day(s) ${system_uptime.uptime_Hrs}Hr(s) ${system_uptime.uptime_Minutes}Min(s) ${system_uptime.uptime_Seconds}Sec(s)`
    },
    {
        "Property Name": "Endianness", "Property Value": endian
    },
    {
        "Property Name": "Hostname", "Property Value": os.hostname()
    },
    {
        "Property Name": "Current Directory", "Property Value": os.homedir()
    },
    {
        "Property Name": "System's default directory for temporary files", "Property Value": os.tmpdir()
    },

];


module.exports = osInfo;
