export class Clothes {
  clothes!: Clothe[]
}

export class Clothe{
  _id!:string
  name!:string
  target!:string
  gender!:string
  price!:number
  sellerId!:string
  image!:string
  description!:string
  status!:string
  isRemoved!:boolean
  createdAt!: Date
  updatedAt!: Date
  __v!:number
}


