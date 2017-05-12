//ppi function calculates pixel per inch for screen monitors
export default function ppi(hRes, vRes, diagSize){
  let diagRes = Math.sqrt(Math.pow(hRes,2) + Math.pow(vRes,2))
  let PPI = Math.round(diagRes / diagSize)
  return PPI
}
