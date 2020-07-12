import { configApiURL, configHeaderJSON } from "../helper/config";

class userService {

    static login(email, password) {
        return fetch(`${configApiURL}/login`, {
            method: 'POST',
            headers: configHeaderJSON,
            body: JSON.stringify({ email, password }),
        })
            .then((res) => res.json())
            .catch((err) => {
                throw err;
            })
    }

}

export default userService;