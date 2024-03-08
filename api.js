import sanityClient from './sanity'

let sanityQuery = (query, params) => sanityClient.fetch(query, params)

export const getFeaturedRestaurants = () => {
  sanityQuery(`
    *[_type=='featured']{
      ...,
      dishes[]->{
        name
      }
    }
  `)
}

export const getCategories = () => {
  return sanityClient(`
    *[_type=='category']
  `)
}

export const getFeaturedRestaurantsById = (id) => {
  return sanityQuery(
    `
    *[_type=='featured' && _id == $id]{
      ...,
      restaurants[] -> {
        ...,
        dishes[]->{
          name
        }
      }
    }[0]
    `,
    { id },
  )
}
