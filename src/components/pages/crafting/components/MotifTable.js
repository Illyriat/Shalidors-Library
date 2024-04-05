import React from 'react';
import './table.css'

function MotifTable({data}) {
    return (
        <section className='wrapper-main'>
            <table className='table'>
                <tbody>
                    <tr className=''>
                        <th>Motif Name</th>
                        <th>Loot Location</th>
                        <th>Material</th>
                        <th>Material Location</th>
                        <th>Skill Level</th>
                        <th>Quality</th>
                    </tr>
                    {data.map((motif)=> (
                        <tr key={motif.id}>
                                <td>{motif.motifName}</td>
                                <td>{motif.location}</td>
                            {motif.material && motif.material.map(motif => (
                                <td key={motif.id}>{motif.materialType}</td>
                            ))}
                            {motif.material && motif.material.map(motif => (
                                <td key={motif.id}>{motif.lootLocation}</td>
                            ))}
                                <td>{motif.skillLevel}</td>
                                <td>{motif.quality}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default MotifTable;