const Patient = ({ patient }) => {
  const { email, registerDate, name, owner, symptoms, _id } = patient;
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold uppercase text-indigo-700 my-2">
        Name: {""}
        <span className="font-normal normal-case text-black">{name}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-20">
        Owner: {""}
        <span className="font-normal normal-case text-black">{owner}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Email: {""}
        <span className="font-normal normal-case text-black">{email}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Register Date: {""}
        <span className="font-normal normal-case text-black">
          {registerDate}
        </span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Symptoms: {""}
        <span className="font-normal normal-case text-black">{symptoms}</span>
      </p>
    </div>
  );
};

export default Patient;
