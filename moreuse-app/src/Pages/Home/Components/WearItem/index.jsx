import { Link } from "react-router-dom"
import { WearItemContainer, WearItemImagen } from "./styles"

export const WearItem = ({ _id, image, name, target, gender, price }) => {
  return (
    <Link to={`/wear-detail/${_id}`}>
      <WearItemContainer>
        <WearItemImagen>
          <div>
            <img width="100px" alt="wear" src={image} />
          </div>
        </WearItemImagen>
        <h3>{name}</h3>
        <h5>{target} / {gender === 'F' ? 'Niña': 'Niño'}</h5>
        <h4>{price}</h4>
      </WearItemContainer>
    </Link>
  )
}
