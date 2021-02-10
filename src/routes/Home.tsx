import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reducersType } from "../reducers/root";
import { setHappyHouse } from "../reducers/happyHouse";
import { HappyHouse, OptStatus } from "../types";
import { loadHappyHouse } from "../utils/happyhouse";
import ShowTable from "../Components/Home/ShowTable";
import Loading from "../Components/Loading";


const Home: React.FC = () => {
    const opts = useSelector<reducersType, OptStatus>(state => state.optStatus);
    const houseinfo = useSelector<reducersType, HappyHouse[]>(state => state.happyHouse);
    const dispatch = useDispatch();
    const [isloading, setIsloading] = useState<boolean>(false);

    useEffect(() => {
        setIsloading(false);
        // loadHappyHouse(opts.cnp_cd, opts.pan_ss)
        //     .then((data: HappyHouse[] | undefined) => dispatch(setHappyHouse(data as HappyHouse[])));

        loadHappyHouse(opts.cnp_cd, opts.pan_ss)
            .then((data: HappyHouse[] | undefined) => {
                dispatch(setHappyHouse(data as HappyHouse[]));
                setIsloading(true);
            });
    }, [opts]);

    return (
        <>
            {isloading ?
                <ShowTable /> :
                <Loading />
            }
        </>
    );
}

export default Home;

