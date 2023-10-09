import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import swal from 'sweetalert';

const SocialLinks = () => {
    const {googleSignIn,githubSignIn} = useContext(AuthContext);

    const handleGoogleLogin = () =>{
        googleSignIn()
        .then(result =>{
          console.log(result.user);
          swal({
            title: "Successfully Donated",
            text: "Thanks for the donation!",
            icon: "success",
            button: "Close",
            
          });
        }).catch(error =>{
            console.error(error);
        })
    }

    const handleGithubLogin = () =>{
        githubSignIn()
        .then(result =>{
          console.log(result.user);
          swal({
            title: "Login Successful",
            text: "Enjoy Yourself",
            icon: "success",
            button: "Close",
            
          });
        }).catch(error =>{
            console.error(error);
        })
    }


    return (
        <div>
            <div className="flex flex-row items-center justify-center lg:justify-start">
              <p className="mb-0 mr-4 text-lg font-semibold">Sign in with</p>

              <button className="mx-1 h-9 w-9 rounded-full bg-white " onClick={handleGoogleLogin}>
                <FcGoogle className="mx-auto h-6 w-6"></FcGoogle>
              </button>

              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="mx-1 h-9 w-9 rounded-full bg-gray-600 text-white" onClick={handleGithubLogin}
              >
                <FaGithub className="mx-auto h-6 w-6"></FaGithub>
              </button>
            </div>

            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-black after:mt-0.5 after:flex-1 after:border-t after:border-black">
              <p className="mx-4 mb-0 text-center text-xl font-bold dark:text-black">
                Or
              </p>
            </div>
        </div>
    );
};

export default SocialLinks;