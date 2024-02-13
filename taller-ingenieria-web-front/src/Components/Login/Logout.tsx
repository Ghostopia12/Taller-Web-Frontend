import  { useEffect } from "react";
import { deleteToken } from "../../utils/Authentication";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Logout = () => {

  useEffect(() => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: <p>Cerrando sesion, esto puede tardar un poco</p>,
      didOpen: async () => {
        MySwal.showLoading();
        setTimeout(() => {
            deleteToken();
            MySwal.close();
            window.location.href = "/login";
        }, 1000);
      },
    });
  });

  return <></>;
};

export default Logout;
