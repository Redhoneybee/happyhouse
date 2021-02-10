import { HappyHouse } from "../types";
import axios from "axios";


export const loadHappyHouse = async (cnp_cd: number, pan_ss: string): Promise<HappyHouse[] | undefined> => {
    try {

        const { data } = await axios.post("/api", {
            data: {
                cnp_cd,
                pan_ss
            }
        });

        const ret: HappyHouse[] = [];

        Array.prototype.push.apply(ret, data);
        return ret;
    } catch (err) {
        console.log(err);
    }
}
