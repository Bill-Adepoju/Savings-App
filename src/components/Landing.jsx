import React from "react"
export default function Landing(){
   
    const [formData, setFormData] = React.useState(
        {
            name: "", 
            tier: ""
        }
    )
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }
   
   
   
    return(
        <section>
            <div className="landing-words">
                <h1 className="land-header">Welcome to Savings App</h1>
                <p className="land-para">Input your Name and choose the savings tier you want</p>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Input Name"
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
               />

               <br />
               <br />

                <label htmlFor="tier">What tier do you prefer?</label>
                <br />
                <select 
                    id="tier" 
                    value={formData.tier}
                    onChange={handleChange}
                    name="tier"
                >
                    <option value="Tier1">Tier 1</option>
                    <option value="Tier2">Tier 2</option>
                    <option value="Tier3">Tier 3</option>
                  
                </select>
                <br />
                <br />
                <button>Submit</button>

            </form>

        </section>
    )
}