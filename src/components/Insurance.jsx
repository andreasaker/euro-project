import React from "react"
import "./Insurance.css" 

const Insurance = ({insurance}) => (
<div key={insurance.id} className="insurance">
    <h2>{insurance.title}</h2>
    <h3>{insurance.preamble}</h3>
    <p>{insurance.body}</p>
    <a href={insurance.url} className="button">Läs mer</a>
</div>
)

export default Insurance;