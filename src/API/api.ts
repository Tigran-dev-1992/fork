import axios from 'axios'

export type DevDataType = {
    id: number
    repoName: string
    userName: string
    starsCount: number
    img: string
    forkLink: string
}
export let instanse = axios.create({
    baseURL: "https://api.github.com/repos/"
})

export const devApi = {
    getDevelopersData(owner: string, repo: string,page:number,) {
        return instanse.get(`${owner}/${repo}/forks?page=${page}`)
            .then((res: any) => {
                const data: DevDataType[] = res.data.map((data: any) => ({
                    id: data.id,
                    repoName: data.full_name,
                    userName: data.owner.login,
                    starsCount: data.watchers,
                    img: data.owner.avatar_url,
                    forkLink: `https://github.com/${data.full_name}`
                }))
                return data
            })

    },
    getTotalCountData(owner: string, repo: string){
       return instanse.get(`${owner}/${repo}`)
        .then((res:any)=>{
            const totalCount:number =res.data.forks_count
            return totalCount

        })
    }

}