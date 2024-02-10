import axios from "axios";

const API_KEY = "jiou7j1pqUwuM3ymVX-W9avYR-qFF513RvTf0Bc95GM";
const BASE_URL = "https://api.unsplash.com/";

export const fetchData = async (query, page) => {
    const option = new URLSearchParams(
        {
            query,
            page: page,
            per_page: 10,
            client_id: API_KEY,
        });

    const response = await axios.get(`${BASE_URL}search/photos/?${option}`
    );
    // console.log(response.data);
    return response.data.results;
}