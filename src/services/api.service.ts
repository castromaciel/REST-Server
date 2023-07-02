export const getAvailablesApis = () => {
  try {
    const apis = {
      movies: `${process.env.SITE}/api/movies`,
      ecommerce: `${process.env.SITE}/api/e-commerce`
    }
    return apis
  } catch (error) {
    throw Error('Service unavailable')
  }
}
