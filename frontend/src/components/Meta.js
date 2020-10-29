import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: "Butcher Shop",
    description: "Fresh steaks, chicken and sausages.",
    keywords: 'art, design, code'
}

export default Meta
