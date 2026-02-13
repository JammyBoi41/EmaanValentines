import { backend_url } from '../constants/urls';

async function createGrievance(text) {
    try {
        const res = await fetch(`${backend_url}/grievances/create`, {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({text})
        })
    } catch (err) {
        return {error: err};
    }
}

export default createGrievance;