import { ThunkAction } from "redux-thunk"
import { devApi, DevDataType } from "../API/api"
import { InferActionsType, RootState } from "./reduxStore"

const SET_DEVELOPERS = "SET_DEVELOPERS"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const SET_PORCE_NUMBER = "SET_PORCE_NUMBER"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_OWNER = "SET_OWNER"
const SET_REPO = "SET_REPO"
const SET_LOADING = "LOADING"
const SET_ERROR="SET_ERROR"





const devInitialState = {
    totalCount: 0,
    pageSize: 30,
    porcionSize: 10,
    porceNumber: 1,
    currentPage: 1,
    developers: [] as DevDataType[],
    owner:"",
    repo:"",
    loading: false,
    error: false
}

type DevInitialStateType = typeof devInitialState

export const devReducer = (state: DevInitialStateType = devInitialState, action: DevActionTypes): DevInitialStateType => {
    switch (action.type) {
        case SET_DEVELOPERS:
            {
                return {
                    ...state, developers: action.developers
                }
            }
        case SET_TOTAL_COUNT:
            {
                return {
                    ...state, totalCount: action.totalCount
                }
            }
        case SET_PORCE_NUMBER:
            {
                return {
                    ...state, porceNumber: action.porceNumber
                }
            }
        case SET_CURRENT_PAGE:
            {
                return {
                    ...state, currentPage: action.currentPage
                }
            }
            case SET_OWNER:
                {
                    return {
                        ...state, owner: action.owner
                    }
                }
                case SET_REPO:
                    {
                        return {
                            ...state, repo: action.repo
                        }
                    }
                    case SET_LOADING:
                    {
                        return {
                            ...state, loading: action.loading
                        }
                    }
                    case SET_ERROR:
                        {
                            return {
                                ...state, error: action.error
                            }
                        }
        default:
            return state
    }

}
export const devActions = {
    setDevelopers: (developers: DevDataType[]) => ({ type: SET_DEVELOPERS, developers } as const),
    setTotalCount: (totalCount: number) => ({ type: SET_TOTAL_COUNT, totalCount } as const),
    setPorceNumber: (porceNumber: number) => ({ type: SET_PORCE_NUMBER, porceNumber } as const),
    setCurrentPage: (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage } as const),
    setOwner: (owner: string) => ({ type: SET_OWNER, owner } as const),
    setRepo: (repo: string) => ({ type: SET_REPO, repo } as const),
    setLoading: (loading: boolean) => ({ type: SET_LOADING, loading } as const),
    setError: (error: boolean) => ({ type: SET_ERROR, error } as const)
}

export type DevActionTypes = InferActionsType<typeof devActions>

export const getDevelopers = (owner: string, repo: string,page:number,porceNumber:number): ThunkAction<void, RootState, unknown, DevActionTypes> => async (dispatch) => {
    try{
        dispatch(devActions.setError(false))
        dispatch(devActions.setLoading(true))
        let data = await devApi.getDevelopersData(owner, repo,page)
        dispatch(devActions.setDevelopers(data))
        dispatch(devActions.setOwner(owner))
        dispatch(devActions.setRepo(repo))
        dispatch(devActions.setPorceNumber(porceNumber))
        dispatch(devActions.setCurrentPage(page))
        dispatch(devActions.setLoading(false))
    }catch{
        dispatch(devActions.setError(true))
        dispatch(devActions.setTotalCount(0))
    }
}
export const getTotalCount = (owner: string, repo: string): ThunkAction<void, RootState, unknown, DevActionTypes> => async (dispatch) => {
    let totalCount = await devApi.getTotalCountData(owner, repo)
    dispatch(devActions.setTotalCount(totalCount))
}



