// @ts-nocheck
import { IOKRDataType, IOKRGroupData } from "../types";

export const groupByParentObjective = (data: IOKRDataType[]): IOKRGroupData[] => {
  const groupObj = data.reduce((acc: IOKRGroupData, cur: IOKRDataType) => {
    if(cur.parent_objective_id) {
      if(acc[cur.parent_objective_id] && Array.isArray(acc[cur.parent_objective_id].keyResults)) {
        acc[cur.parent_objective_id].keyResults.push(cur)
      } else {
        acc[cur.parent_objective_id] = {
          keyResults: cur
        }
      }
    } else {
      if(acc[cur.id]) {
        acc[cur.id] = { ...acc[cur.id], cur }
      } else {
        acc[cur.id] = { ...cur, keyResults: [] }
      }
    }
    return acc;
  }, {})
  return Object.values(groupObj).filter((obj) => obj.id) as IOKRGroupData[]
}