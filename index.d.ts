type PID = number 

export interface ProcessInfo {
  COMMAND: string,
  PPID: PID,
  PID: PID,
  STAT: string  
}

export function getParent (pid: number, processes: ProcessInfo[]) : PID
export function getChildren (pid: number, processes: ProcessInfo[]) : PID[]
export function getAllProcesses (
  callback: (err: any, childrenOfPid: ProcessInfo[]) => any
)

/**
 * Retrieves information about clild processes for given `pid`
 *
 * @param {number} pid PID of the process
 */
export function psTree (
  pid: PID, 
  callback: (err: any, childrenOfPid: ProcessInfo[]) => any) : void

/**
 * Retrieves information about clild processes for given `pids`
 *
 * @param {number[]} pids Array of PIDs of the processes
 */
export function psTree (
  pids: PID[], 
  callback: (err: any, childrenOfPids: ProcessInfo[][]) => any) : void

export default psTree

