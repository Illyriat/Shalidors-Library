import React from 'react';
import './table.css'


function PvpRankTable({data}) {
    return (
        <section className='wrapper-main'>
            <table className='table'>
                <tbody>
                    <tr className=''>
                        <th>Rank</th>
                        <th>Rank Name</th>
                        <th>Grade</th>
                        <th>AP to Rank</th>
                    </tr>
                    {data.map((rank) => (
                        <tr key={rank.id}>
                            <td>{rank.rank}</td>
                            <td>{rank.name}</td>
                            <td>{rank.grade}</td>
                            <td>{rank.apToRank}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default PvpRankTable;