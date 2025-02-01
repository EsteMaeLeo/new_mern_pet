const Patient = ({patient}) => {
    const {email, registerDate, name, owner, symptoms, _id} = patient
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-0 py-10 rounded-xl">
        <p className="font-bold uppercase">Name:
            <span>{name}</span>
        </p>
    </div>
  );
};

export default Patient;
