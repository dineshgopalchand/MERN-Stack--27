import React from 'react';

import './Address.css';
const Address = () => {
    return (

        <table>
            <tbody>
                <tr>
                    <td >
                        <i className="fa-solid fa-location-pin icon"></i>
                    </td>
                    <td>
                        #354, 3rd Floor, Aswath Nagar Main Road,
                        Near Kanti Sweets, Marathahalli,
                        Bengaluru, Karnataka - 560037
                    </td>
                </tr>
                <tr>
                    <td >
                        <i className="fa-solid fa-envelope icon"></i>
                    </td>
                    <td>
                        <a href='mailto:hr@sdlctraining.in'>hr@sdlctraining.in</a>
                    </td>
                </tr>
                <tr>
                    <td >
                        <i className="fa-solid fa-envelope icon"></i>
                    </td>
                    <td>
                        <a href='tel:+91-8494840567'>+91-8494840567</a>
                    </td>
                </tr>
            </tbody>
        </table>

    );
}

export default Address;
