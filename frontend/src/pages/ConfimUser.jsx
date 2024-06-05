import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Alert from "../components/Alert";

const ConfimUser = () => {
  const[accountConfirmm, setAccountConfirm] = useState(false);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  console.log(params);
  const { id } = params;

  useEffect(() => {
    const confirmAccount = async () => {
      try {
        const url = `http://localhost:4005/api/veterinarian/confirm/${id}`;
        const{data} = await axios(url)
        console.log(data)

      } catch (error) {
        console.log(error);
      }
    };

    confirmAccount();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-5xl">
          Confirm your account and Manage your{" "}
          <span className="text-black">Patients</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-xl px-5 py-10 rounded-lg bg-white">
        <Alert />
      </div>
    </>
  );
};

export default ConfimUser;
0;
