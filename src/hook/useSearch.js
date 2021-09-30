import React, { useContext } from "react"
import {activeStatusContext, searchContext} from "App"
import uuid from 'uuid'
import data from 'data.json'

export default function useSearch() {
    const [activeStatus] = useContext(activeStatusContext)
    const [search] = useContext(searchContext)

    const isFiltered = (task) => {
        const active = (activeStatus !== "All" ? task.category === activeStatus : true)
        const searched = (
            task.category.toLowerCase().includes(search) ||
            task.desc.toLowerCase().includes(search) ||
            task.title.toLowerCase().includes(search)
        )
        if (active) {
            if (search.trim().toLowerCase() !== "") {
                if (!searched) {
                    return task.tags.some((_tag, i) => task.tags[i].includes(search))
                }
                return searched
            }
            return active
        }
        return false
    }
    const activeTaskList = data.tasks.filter(task => { return isFiltered(task) })
    


    return { activeTaskList }
}