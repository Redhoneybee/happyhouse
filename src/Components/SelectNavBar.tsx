import React from "react";
import "./SelectNavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';


const SelectNavBar: React.FC = () => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault();
        const nav: any = document.querySelector('nav.select_nav');

        const classNames = nav.className.split(' ');

        let finded: string = "";

        finded = classNames.find((className: string) => className === "visible");

        if (finded) nav.classList.remove('visible');
        else nav.classList.add('visible');
    }

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
                    <select name="cnp_cd">
                        <option value="soul">서울특별시</option>
                        <option value="busan">부산광역시</option>
                    </select>
                </li>
                <li>
                    <select name="pan_ss">
                        <option value="pan">공고중</option>
                        <option value="acc">접수중</option>
                    </select>
                </li>
            </ul>
        </nav>
    );
}

export default SelectNavBar;