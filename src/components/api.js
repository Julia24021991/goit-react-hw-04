import axios from "axios";

export const fetchData = async (query, page) => {
    const API_KEY = "jiou7j1pqUwuM3ymVX-W9avYR-qFF513RvTf0Bc95GM";
    const response = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}`, {
        params:
        {
            query,
            page,
            per_page: 10,

        }
    });
    return response.data.results;
}