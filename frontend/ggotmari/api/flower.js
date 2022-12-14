import { apiInstance } from "./index";

const api = apiInstance();

async function getFlowerDetail(subjectId, success, fail) {
  await api
    .get(`flower/${subjectId}`, {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    })
    .then(success)
    .catch(fail);
}

async function postFlowerCollection(info, success, fail) {
  await api
    .post(`flower`, info, {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    })
    .then(success)
    .catch(fail);
}

async function getDailyFlower(success, fail) {
  await api.get(`flower/daily`).then(success).catch(fail);
}

async function getSearchFlower(searchText, success, fail) {
  await api.get(`flower/search/${searchText}`).then(success).catch(fail);
}

export {
  getFlowerDetail,
  postFlowerCollection,
  getDailyFlower,
  getSearchFlower,
};
