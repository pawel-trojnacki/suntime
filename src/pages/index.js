import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const IndexPage = () => {
  const {allDatoCmsProduct} = useStaticQuery(
    graphql`
      query {
        allDatoCmsProduct(sort: {fields: [meta___publishedAt], order: DESC}) {
          nodes {
            name
            price
            promoprice
            shape
            frameColor
            lensesColor
            images {
              url
            }
          }
        }
      }
    `
  )
  return (
    <div>
      <h1>Recent products</h1>
      {allDatoCmsProduct.nodes.map(
        ({name, price, promoprice, desc, images}) => {
          return (
            <div key={name}>
              <h2>{name}</h2>
              <p>{price}</p>
              {promoprice ? <p>{promoprice}</p> : null}
              <p>{desc}</p>
              {images.map((image, id) => (
                <img key={id} src={image.url}></img>
              ))}
            </div>
          )
        }
      )}
    </div>
  )
}

export default IndexPage
