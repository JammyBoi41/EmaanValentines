import { backend_url } from '../constants/urls';

async function getNotes() {
    try {
        const res = await fetch(`${backend_url}/grievances`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({token: localStorage.getItem('auth_token')})
        });
        const data = await res.json()

        if (!data.error) {
            return data;
        } else {
            return {error: "Unable to fetch grievances"};
        }
    } catch (err) {
        return {error: err};
    }
}

export default getNotes;