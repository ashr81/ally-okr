// @ts-nocheck
import { IOKRDataType, IOKRGroupData } from "../types";

/**
 * Groups data and also returns available filters.
 */
export type groupByParentObjectiveReturnType = {
  data: IOKRGroupData[];
  filters: string[];
}
export const groupByParentObjective = (data: IOKRDataType[]): groupByParentObjectiveReturnType => {
  const filters = new Set()
  const groupObj = data.reduce((acc: IOKRGroupData, cur: IOKRDataType) => {
    filters.add(cur.category)
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
  return {
    data: Object.values(groupObj).filter((obj) => obj.id) as IOKRGroupData[],
    filters: Array.from(filters)
  }
}