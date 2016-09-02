export interface ChildInfo {
  COMMAND: string,
  PPID: string,
  PID: string,
  STAT: string  
}

/**
 * Retrieves information about clild processes for given `pid`
 *
 * @param {number} pid PID of the process
 */
export function psTree (
  pid: number, 
  callback: (err: any, childrenOfPid: ChildInfo[]) => any) : void

/**
 * Retrieves information about clild processes for given `pids`
 *
 * @param {number[]} pids Array of PIDs of the processes
 */
export function psTree (
  pids: number[], 
  callback: (err: any, childrenOfPids: ChildInfo[][]) => any) : void

export default psTree

