import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import SignInForm from "../forms/SignInForm";
import { SignInFormInputsType } from "../types/SignInInputs.types";
import signInImage from "../../../assets/sign-in.png";
import signInImage2 from "../../../assets/unimpressed.png";
import { Link } from "react-router-dom";

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
  const onSubmit: SubmitHandler<SignInFormInputsType> = (data) =>
    console.log(data);

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
          borderRadius:'0 20rem 0 0',
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
        <Typography fontWeight={600} variant="h2" mb={4} textAlign="left">
          Hello 👋🏾, <br></br>Welcome Back
        </Typography>
        <SignInForm
          formState={formState}
          handleSubmit={handleSubmit}
          control={control}
          onSubmit={onSubmit}
        />
        <Typography variant="caption">
        © A Town Hall 2022 · <Link to="#"> Privacy Policy</Link> ·{" "}
          <Link to="#"> Terms & Conditions</Link>
        </Typography>
      </Box>
    </Box>
  );
};
