import usePatient from "../hooks/usePatient"

const PatientList = () => {

  const {patients} = usePatient()

  return (
    <>
      {patients.length }
    </>
  )
}

export default PatientList
