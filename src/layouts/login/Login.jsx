import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "firebaseApi/client";
import { useDispatch } from "react-redux";
import { login, logout } from "redux/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { chakra, Flex, Image, Text, Box } from "@chakra-ui/react";

const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const signInWithGoogleToken = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        signInWithGoogle(user);
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            accessToken: user.accessToken,
          })
        );
        navigate("/admin");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
        // ...
      });
  };

  useEffect(() => {
    if (user) {
      navigate("/admin");
    } else {
      dispatch(logout());
      navigate("/login");
    }
  }, [user, dispatch, navigate]);

  // const currentUser = useSelector(currentUser);

  //   useEffect(() => {
  //     auth.onAuthStateChanged((user) => {
  //       if (user) {
  //         dispatch(setCurrentUser({ email: user.email, uid: user.uid }));
  //         console.log("user", user.email);
  //       }
  //     });
  //   }, [currentUser]);
  //   return currentUser?.email ? <LoggedIn /> : <Welcome />;
  // }

  // useEffect(() => {
  //   onAuthStateChanged(auth, (userAuth) => {
  //     if (userAuth) {
  //       // user is logged in, send the user's details to redux, store the current user in the state
  //       dispatch(
  //         setCurrentUser({
  //           email: userAuth.email,
  //           uid: userAuth.uid,
  //           displayName: userAuth.displayName,
  //           photoUrl: userAuth.photoURL,
  //         })
  //       );
  //     } else {
  //       dispatch(removeCurrentUser());
  //     }
  //   });
  // }, []);

  // const logoutHandler = () => {
  //   signOut(auth);
  //   dispatch(logout());
  // };

  return (
    <Flex
      w="100%"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      className="homepage"
    >
      <Flex
        align="center"
        justify="center"
        flexDir="column"
        w="600px"
        h="fit-content"
        mt={10}
        mb={10}
        p={7}
        border="1px"
        borderColor="gray.200"
        borderRadius="5"
        boxShadow="lg"
        className="login"
      >
        <Flex
          w="100%"
          flexDir="column"
          alignItems="center"
          gap={2}
          className="login__container"
        >
          <Flex
            flexDir="row"
            alignItems="center"
            justifyContent="center"
            className="login__logo"
            gap={5}
          >
            <Box
              w="27px"
              h="27px"
              borderRadius="full"
              bgGradient="linear-gradient(to bottom left, #7928CA, #FF0080)"
            ></Box>{" "}
            <Text
              pt={10}
              pb={10}
              bgGradient="linear(to-bl, #7928CA, #FF0080)"
              bgClip="text"
              fontSize={32}
              fontWeight="extrabold"
              className="homepage__logo__text"
            >
              Aquamarine
            </Text>
          </Flex>
          <Flex
            mb={10}
            alignItems="flex-start"
            className="login__container__header"
          >
            <Text
              textAlign={["left", "center"]}
              fontSize="1.5em"
              fontWeight={700}
            >
              Sign In To Enter Admin Panel
            </Text>
          </Flex>

          <chakra.button
            w="210px"
            px="3"
            py="2"
            bg={`gray.200`}
            rounded="5"
            _hover={{ bg: `gray.300` }}
            onClick={signInWithGoogleToken}
          >
            <Flex
              flexDir="row"
              alignItems="center"
              justifyContent="center"
              gap={2}
            >
              <Image
                boxSize="15px"
                objectFit="cover"
                src="/images/googlelogo.png"
                alt="google-logo"
              />
              Continue with Google
            </Flex>
          </chakra.button>
          <Link to="/">
            <chakra.button
              w="210px"
              mt={3}
              mb={10}
              px="3"
              py="2"
              // bg={`gray.200`}
              border="1px solid #e2e8f0"
              rounded="5"
              _hover={{ bg: `gray.300` }}
              variant="outline"
              type="button"
            >
              Go Back To Main Page
            </chakra.button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
