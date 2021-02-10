const os = require('os');
function cpuCount() {
    let cpuNum = os.cpus();
    return cpuNum.length;
}

function cpu() {
    let cpu_contain = os.cpus();
    let cpu_arr = [];
    for ( i = 0 ; i<cpu_contain.length ; i++){
        let new_cpu_obj = {
            "Model" : cpu_contain[i].model,
            "Speed (MHz)" : cpu_contain[i].speed,
            "user mode (milliseconds)" : cpu_contain[i].times.user,
            "idle mode (milliseconds)" : cpu_contain[i].times.idle,
            "nice mode (milliseconds)" : cpu_contain[i].times.nice,
            "sys mode (milliseconds)" : cpu_contain[i].times.sys,
            "irq mode (milliseconds)" : cpu_contain[i].times.irq,
        };
        cpu_arr.push(new_cpu_obj);
    }
    return cpu_arr;
}
let cpuDetails = cpu();
const cpuCnt = [
    {
        "Number of logical CPU core(s)" : cpuCount()
    }
]

module.exports = {
    number_of_cpus : cpuCnt,
    details_of_cpus : cpuDetails
}
