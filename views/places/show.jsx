const React = require('react')
const Def = require('../default')

function new_form (data) {
  let message = 'Hello'                 
    if (data.message) {
      message = (
        <h4 className="alert-danger">
          {data.message}
        </h4>
      )
    }
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                {message}                 
            
                <div className="row">
                    
                        <img src={data.place.pic} alt={data.place.name} />

                        <h3>
                        Located in {data.place.city}, {data.place.state}
                        </h3>

                        <h2>
                            Description
                        </h2>

                        <h3>
                            {data.place.showEstablished()}
                        </h3>

                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                </div>
            </main>
        </Def>
    )
}

module.exports = new_form





