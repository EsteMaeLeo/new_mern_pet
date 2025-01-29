import usePatient from "../hooks/usePatient"

const PatientList = () => {

  const {patients} = usePatient()

  return (
    <>
      {patients.length ? 'Patients List':
    (
      <>
        <h2 className="font-black text-3xl text-center">No Patients Found</h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Add patients first! {''}
          <span className="text-indigo-600 font-bold">
            and will show in this page
          </span>
        </p>
      </>
    )  
    
    }
    </>
  )
}

export default PatientList
