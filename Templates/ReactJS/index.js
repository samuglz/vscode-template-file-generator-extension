const rfcTemplate = `import React from 'react'

export default function #name#() {
    return (
        <div>
            
        </div>
    )
}
`

const rafceTemplate = `import React from 'react'

const #name# = () => {
    return (
        <div>
            
        </div>
    )
}

export default #name#`

module.exports = {
    rfc: {
        template: rfcTemplate,
        extension: 'jsx'
    },
    rafce: {
        template: rafceTemplate,
        extension: 'jsx'
    }
}


