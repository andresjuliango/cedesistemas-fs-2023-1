import { WearItemContainer, WearItemImagen } from "./styles"

export const WearItem = ({ image, name, target, gender }) => {
  return (
    <WearItemContainer>
      <WearItemImagen>
        <div>
          <img width="100px" alt="wear" src={image} />
        </div>
      </WearItemImagen>
      <h3>{name}</h3>
      <h5>{target} / {gender}</h5>
    </WearItemContainer>
  )
}
