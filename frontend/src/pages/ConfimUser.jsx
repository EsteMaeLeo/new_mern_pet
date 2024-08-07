import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Alert from "../components/Alert";
import clientAxios from "../config/axios";

const ConfimUser = () => {
  const [accountConfirmm, setAccountConfirm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState({});

  const params = useParams();
  console.log(params);
  const { id } = params;

  useEffect(() => {
    const confirmAccount = async () => {
      try {
        const url = `/veterinarian/confirm/${id}`;
        const { data } = await clientAxios(url);

        setAccountConfirm(true);
        setAlert({
          msg: data.msg,
        });
      } catch (error) {
        console.log(error.response);
        setAlert({
          msg: error.response.data.msg,
          error: true,
        });
      }
      setLoading(false);
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
        {!loading && <Alert alert={alert} />}
        {accountConfirmm && (
          <Link className="block text-center my-5 text-gray-600" to="/">
            SignIn
          </Link>
        )}
      </div>
    </>
  );
};

export default ConfimUser;
0;
