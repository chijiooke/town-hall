import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import signInImage2 from "../../../assets/unimpressed.png";
import { signInRoute } from "../../../utils/api-routes/APIRoutes";
import SignInForm from "../forms/SignInForm";
import { SignInFormInputsType } from "../types/SignInInputs.types";

const signInDataSchema = yup
  .object({
    emailAddress: yup
      .string()
      .email("Kindly Enter A Valid Email Address")
      .required(
        "Kindly fill this Field, We need your email to verify your account"
      ),
    password: yup.string().required(),
  })
  .required();

export const SignInPage = () => {
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      emailAddress: "",
      password: "",
    },
    mode: "all",
    resolver: yupResolver<yup.AnyObjectSchema>(signInDataSchema),
  });

  const [isLoading, setisLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignInFormInputsType> = async (data) => {
    setisLoading(true);
    try {
      await axios
        .post(signInRoute, { ...data })
        .then((res) => {
          setisLoading(false);
          navigate("/chat-app");
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    } catch (err) {
      toast.error("Sign In failed");
    } finally {
      setisLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          height: "100%",
          boxSizing: "border-box",
          position: "relative",
          width: "60%",
          maxHeight: "100vh",
          borderRadius: "0 20rem 0 0",
          background:
            " linear-gradient(356deg, rgba(173,107,255,0.4589636538209033) 0%, rgba(252,70,107,0.8) 80%)",
        }}
      >
        <img
          src={signInImage2}
          alt="sign-in"
          style={{
            width: "70%",
            position: "absolute",
            bottom: "0",
            left: "200px",
          }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          right: "20%",
          textAlign: "center",
        }}
      >
        <Typography
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-delay="100"
          fontWeight={600}
          variant="h2"
          mb={4}
          textAlign="left"
        >
          Hello 👋🏾, <br></br>Welcome Back
        </Typography>
        <SignInForm
          formState={formState}
          handleSubmit={handleSubmit}
          control={control}
          onSubmit={onSubmit}
        />
        <Typography variant="caption" data-aos-delay="800" data-aos="fade-up" data-aos-easing="ease-in-sine">
          © A Town Hall 2022 · <Link to="#"> Privacy Policy</Link> ·{" "}
          <Link to="#"> Terms & Conditions</Link>
        </Typography>
      </Box>
    </Box>
  );
};
