import { LOGIN_SERVICE } from "@/const/endpoints";
import { LoginCredentials } from "@/const/env";

export const authUser = async (): Promise<any> => {
    const resp = await fetch(LOGIN_SERVICE, {
        method: "POST",
        body: JSON.stringify(LoginCredentials),
        mode: "no-cors",
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if (!resp.ok) {
        console.log("resp!ok", resp)
        throw resp
    }
    console.log("resp json", await resp.json(), "resp.body", resp.body)
    return await resp.json()
};