
export async function getViews(token) {
    let json_result = {
        status: true,
        views: '',
    };
    let URL = process.env.URL;

    URL += "get_views";
    const result = await fetch(URL, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token,
        },
    })
        .then((response) => {
            const status = response.status;
            console.log("status"+status);
            if (status == 200)
                return response;
            json_result.status = false;
            return null;
        })
        .catch((error) => {
            console.log("Error");
            json_result.status = false;
            return null;
            return error.message;
        });
    if (result) {
        const json = await result.json();
        json_result.views = json.views;
    }
    return json_result;
}

export async function addView(token) {
    let json_result = null;
    let URL = process.env.URL;

    URL += "add_view";
    const result = await fetch(URL, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token,
        },
    })
        .then((response) => {
            const status = response.status;
            return response;
        })
        .catch((error) => {
            console.log("Error");
            return error.message;
        });

    if (result) {
        json_result = await result.json();
        json_result = json_result.message;
    }
    return json_result;
}