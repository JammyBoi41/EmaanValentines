import { backend_url } from '../constants/urls';

async function deleteGrievance(id) {
    try {
        const res = await fetch(`${backend_url}/grievances/delete/${id}`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch (err) {
        return {error: err};
    }
}

export default deleteGrievance;