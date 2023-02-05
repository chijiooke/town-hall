import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import signInImage2 from "../../../assets/unimpressed.png";
import { SignUpForm } from "../forms/SignUpForm";
import { SignUpFormInputsType } from "../types/signUpInputs.types";

const signInDataSchema = yup
  .object({
    fullName: yup.string().required(),
    emailAddress: yup
      .string()
      .email("Kindly Enter A Valid Email Address")
      .required(
        "Kindly fill this Field, We need your email to verify your account"
      ),
    password: yup
      .string()
      .required()
      .min(8)
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Minimum eight characters, at least one letter, one number and one special character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

export const SignUpPage = () => {
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      fullName: "",
      emailAddress: "",
      password: "",
      confirmPassword: "",
    },
    mode: "all",
    resolver: yupResolver<yup.AnyObjectSchema>(signInDataSchema),
  });
  const onSubmit: SubmitHandler<SignUpFormInputsType> = (data) =>
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
        <Typography fontWeight={600} variant="h2" mb={4} textAlign="left">
          Join The <br></br>Town Hall 🚀
        </Typography>
        <SignUpForm
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
