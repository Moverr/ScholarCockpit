export const setSchoolName = (payload) => {
    return {
        type: "ADD_SCHOOLNAME",
        payload: payload
    }
}

export const getSchoolName = () => {
    return {
        type: "GET_SCHOOL_NAME"
    }
}