/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const BASEURL = "https://www.dnd5eapi.co/api/classes/";

export default {
  search: function (query) {
    return axios.get(BASEURL + query);
  },
};
