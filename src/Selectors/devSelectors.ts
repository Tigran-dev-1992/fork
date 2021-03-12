import { RootState } from "../redux/reduxStore";

export const developersSelector = (state: RootState) => { return state.developersPage.developers }
export const totalCountSelector = (state: RootState) => { return state.developersPage.totalCount }
export const pageSizeSelector = (state: RootState) => { return state.developersPage.pageSize }
export const porcionSizeSelector = (state: RootState) => { return state.developersPage.porcionSize }
export const porceNumberSelector = (state: RootState) => { return state.developersPage.porceNumber }
export const currentPageSelector = (state: RootState) => { return state.developersPage.currentPage }
export const ownerSelector = (state: RootState) => { return state.developersPage.owner }
export const repoSelector = (state: RootState) => { return state.developersPage.repo }
export const loadingSelector = (state: RootState) => { return state.developersPage.loading }
export const errorSelector = (state: RootState) => { return state.developersPage.error }
