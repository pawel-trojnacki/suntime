import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

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
            sex
            images {
              fixed(width: 800) {
                ...GatsbyDatoCmsFixed
              }
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
        ({name, price, promoprice, desc, images, sex}) => {
          return (
            <div key={name}>
              <h2>{name}</h2>
              <p>{price}</p>
              {promoprice ? <p>{promoprice}</p> : null}
              <p>{desc}</p>
              <p>{sex}</p>
              {images.map((image, id) => (
                <Img key={id} fixed={image.fixed} />
              ))}
            </div>
          )
        }
      )}
    </div>
  )
}

export default IndexPage
