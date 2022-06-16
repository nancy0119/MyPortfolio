import './index.scss'
const Cards = ({ srcLink, name }) => {
    return(
        <div className='card'>
            <img src = {srcLink}/>
            <h2>{name}</h2>
        </div>
    )
}
export default Cards