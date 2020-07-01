//actions
export const NAME_ADDED = "NAME_ADDED"
export const FNAME_ADDED = "FNAME_ADDED"
export const PASS_ADDED = "PASS_ADDED"
//action creaters
export const addname = (name) => ({
    type: NAME_ADDED,
    payload: name
})
export const addfname = (fname) => ({
    type: FNAME_ADDED,
    payload: fname
})
export const addpass = (pass) => {
    return {
    type: PASS_ADDED,
    payload: pass
}}
