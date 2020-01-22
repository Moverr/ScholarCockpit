


let defaultNagigation = {
    nextScreen: null,
    currentScreen: null,
    previousScreen: null,
};

let endpoints = {
    
        users: "user/v1/",
        roles: "roles/v1/",
        account: "account/v1/",
        user: "user/v1",
        streams: "streams/v1",
        curriculum: "curriculum/v1",
        subjects: "subjects/v1",
        subjects_papers: "subjects/papers/v1",
        grading: "grading/v1",
        grading_details: "grading/details/v1",
        studyyear: "studyyear/v1",
        terms: "terms/v1",
        departments: "departments/v1",
        staff: "staff/v1",
        permissions: "permissions/v1",
        exams: "exams/v1",
        exams_classes: "exams/classes/v1",
        exams_terms: "exams/terms/v1",
        exams_grading: "exams/grading/v1",
        exams_timetable: "exams/timetable/v1",
        teaching_timetable: "teaching/timetable/v1",
        marksheet: "marksheet/v1",
        admissions: "admissions/v1",
        registration_term: "registration/term/v1",
        report: "report/v1"
     
}
let baseUrlConfig = {
    development: "http://localhost:9776/",
    staging: "http://scholarengine.us-east-2.elasticbeanstalk.com/",
    live: ""

}

let appConfig = {
    apiversion: "v1.0.0.1",
    baseUrl: baseUrlConfig,
    endpoints: endpoints,
    navigation: defaultNagigation
};




export const AppReducer = (state = appConfig, action) => {

    return state;
};



export const NavigationReducer = (state = defaultNagigation, action) => {
    switch (action.type) {
        case 'ADD_CURRENT_SCREEN':

            state = { ...state, currentScreen: action.payload };

            break;
        case 'ADD_PREVIOUS_SCREEN':
            state = { ...state, previousScreen: action.payload };
            break;

        case 'ADD_NEXT_SCREEN':
            state = { ...state, nextScreen: action.payload };
            break;

        default:
            break;
    }
    return state;
};





