import axios from 'axios';
export var instanse = axios.create({
    baseURL: "https://api.github.com/repos/"
});
export var devApi = {
    getDevelopersData: function (owner, repo, page) {
        return instanse.get(owner + "/" + repo + "/forks?page=" + page)
            .then(function (res) {
            var data = res.data.map(function (data) { return ({
                id: data.id,
                repoName: data.full_name,
                userName: data.owner.login,
                starsCount: data.watchers,
                img: data.owner.avatar_url,
                forkLink: "https://github.com/" + data.full_name
            }); });
            return data;
        });
    },
    getTotalCountData: function (owner, repo) {
        return instanse.get(owner + "/" + repo)
            .then(function (res) {
            var totalCount = res.data.forks_count;
            return totalCount;
        });
    }
};
