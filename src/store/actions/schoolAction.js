export const addSchoolName = (payload) => {
    return {
        type: "ADD_SCHOOLNAME",
        data: payload
    }
}

export const getSchoolName = () => {
    return {
        type: "GET_SCHOOL_NAME"
    }
}