import axios from "axios";
import reverseGeocode from "latlng-to-zip";
import qs from "qs";
import JOB_DATA from "./IndeedJobData.json";

import { FETCH_JOBS } from "./types";

const JOB_ROOT_URL = "http://api.indeed.com/ads/apisearch?";
const JOB_QUERY_PARAMS = {
  publisher: "4201738803816157",
  form: "json",
  v: "2",
  latlong: 1,
  radius: 10,
  q: "javascript",
};

const buildJobsUrl = (zip) => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
  return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = (region, callback) => async (dispatch) => {
  try {
    // const zip = await reverseGeocode(region);
    // const url = buildJobsUrl(zip);
    // const { data } = await axios.get(url);
    const data = JOB_DATA;

    dispatch({ type: FETCH_JOBS, payload: data });
    callback();
  } catch (error) {
    console.log(error);
  }
};
