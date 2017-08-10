/* @flow */

import React from 'react';
import {Link} from 'react-router-dom';


class Tree extends React.Component {
    render(): React.Element<any> {
        console.log(this.props.INDI.find(ii => ii.NAME.indexOf('Allan Noel') !== -1));
        return <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Born</th>
                    <th>Died</th>
                </tr>
            </thead>
            {this.props.INDI
                .sortBy(ii => new Date(ii.BIRT.get('DATE')))
                .map(ii => {
                    // console.log(ii.DEAT, ii);
                    return <tr key={ii.pointer}>
                        <td><Link to={`/individual/${ii.pointer}`}>{ii.forename} {ii.surname}</Link></td>
                        <td>{ii.BIRT.get('DATE')}</td>
                        <td>{ii.DEAT.get('DATE')}</td>
                    </tr>
                })}
        </table>;
    }
}


export default Tree;
