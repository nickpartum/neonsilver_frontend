export const getDiscountPrice = (price: number, discountInPercent: number) => {
    return ((price / 100) * discountInPercent)
}

export const getPriceWithDiscount = (price: number, discountInPercent: number) => {
    return (price - getDiscountPrice(price, discountInPercent))
}


// export const sortByName =<T>(arrObj: Array<T>) => {
//     return arrObj.sort((a:T, b:T) => {
//         if (b['name'] < a.name) return 1;
//         if (b.name > a.name) return -1;
//         return 0;
//     })}
//
// }


export const addOpacityToHexColor = (hexColor: string, opacityInProcent: number) => {
    if (hexColor.length !== 4 && hexColor.length !== 7) return null

    let arr= Array.from(hexColor.slice(1))

    if (arr.length === 3) {
        arr = arr.reduce<string[]>((acc, cur) => [...acc, cur, cur], [])
    }

    const opacityInHex = `0${Math.round((255 / 100) * opacityInProcent).toString(16)}`.slice(-2)

    arr.push(opacityInHex)
    arr.unshift('#')

    return arr.join('')
}