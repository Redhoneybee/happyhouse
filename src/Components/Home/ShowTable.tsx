import React from "react";
import { reducersType } from "../../reducers/root";
import { HappyHouse, OptStatus } from "../../types";
import { useSelector } from "react-redux";
import "./ShowTable.css";
interface TbodyProps {
    houses: HappyHouse[]
}
const ShowTbody: React.FC<TbodyProps> = ({ houses }) => {
    return (
        <>
            {houses.map((house, index) =>
                <tr key={index} >
                    <td>{house.PAN_NM}</td>
                    <td>{house.PAN_NT_ST_DT}</td>
                </tr>
            )

            }
        </>
    );
}


const ShowTable: React.FC = () => {
    const opts = useSelector<reducersType, OptStatus>(state => state.optStatus);
    const houses = useSelector<reducersType, HappyHouse[]>(state => state.happyHouse);
    return (
        <section className="contents_wrap">
            <div className="houses_title">
                <h3> - {opts.pan_ss} - </h3>
            </div>

            <div className="houses">

                {houses.length > 0 ?
                    <table className="house">
                        <thead>
                            <tr>
                                <th>공고 글</th>
                                <th>공고 날짜</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ShowTbody houses={houses} />
                        </tbody>
                    </table>
                    :
                    <div className="not_found">죄송합니다.<br />관련된 공고가 현재 없습니다.</div>
                }
            </div>
        </section>
    );
}

export default ShowTable;