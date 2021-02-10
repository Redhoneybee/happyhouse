import React, { ChangeEvent, useEffect } from "react";
import "./SelectNavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { CNP_CD_LIST, PAN_SS_LIST } from "../types";
import { useDispatch } from "react-redux";
import { changeCnp, changePan } from "../reducers/optStatus";

// 네비게이션 내려오는 버튼 
const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    const nav: any = document.querySelector('nav.select_nav');

    const classNames = nav.className.split(' ');

    let finded: string = "";

    finded = classNames.find((className: string) => className === "visible");

    if (finded) nav.classList.remove('visible');
    else nav.classList.add('visible');
}





const OptionCNPCD: React.FC = () => {
    const dispatch = useDispatch();
    const onChange = (e: any): void => {
        e.preventDefault();
        const values = [...e.target.options];

        const code = values
            .filter(option => option.selected)
            .map(option => option.getAttribute('data-code'))

        dispatch(changeCnp(Number(code[0]) as number));
    }
    return (
        <select onChange={onChange} id="cnp_cd" className="cnp_cd" name="cnp_cd">
            {CNP_CD_LIST.map((cnp_cd) =>
                <option
                    key={cnp_cd.code}
                    value={cnp_cd.desc}
                    data-code={cnp_cd.code}>
                    {cnp_cd.desc}
                </option>
            )}
        </select>
    );
}

const OptionPANSS: React.FC = () => {
    const dispatch = useDispatch();
    const onChange = (e: any): void => {
        e.preventDefault();
        const values = [...e.target.options];

        const code = values
            .filter(option => option.selected)
            .map(option => option.getAttribute('data-code'))

        dispatch(changePan(code[0] as string));
    }
    return (
        <select onChange={onChange} id="pan_ss" className="pan_ss" name="pan_ss">
            {PAN_SS_LIST.map((pan_ss) =>
                <option
                    key={pan_ss.code}
                    value={pan_ss.code}
                    data-code={pan_ss.code}>
                    {pan_ss.desc}
                </option>
            )}
        </select>
    )
}



const SelectNavBar: React.FC = () => {
    const dispatch = useDispatch();

    const initialOptions = () => {
        const cnpCd = (document.getElementById('cnp_cd') as HTMLSelectElement);
        const panss = (document.getElementById('pan_ss') as HTMLSelectElement);

        const cnpCdCode: string | null = cnpCd.options[cnpCd.selectedIndex].getAttribute('data-code');
        const panssCode: string | null = panss.options[panss.selectedIndex].getAttribute('data-code');


        dispatch(changeCnp(Number(cnpCdCode) as number));
        dispatch(changePan(panssCode as string));

    }

    useEffect(() => {
        initialOptions();
    }, []);

    return (
        <nav className="select_nav animated">
            <div className="bar">
                <h3 className="title">
                    <strong>H</strong>appy<strong>H</strong>ouse</h3>
                <button
                    className="btn set"
                    onClick={handleClick}
                >
                    <FontAwesomeIcon icon={faCog} />
                </button>
            </div>

            <ul className="gnb">
                <li>
                    {
                        CNP_CD_LIST.length > 0 && <OptionCNPCD />
                    }
                </li>
                <li>
                    {
                        PAN_SS_LIST.length > 0 && <OptionPANSS />
                    }
                </li>
            </ul>
        </nav>
    );
}

export default SelectNavBar;