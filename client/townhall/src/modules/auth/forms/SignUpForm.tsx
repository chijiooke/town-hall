import {
  Box,
  Button,
  GlobalStyles,
  Paper, Typography
} from "@mui/material";
import { FC, useState } from "react";
import {
  Control, FormState,
  SubmitHandler,
  UseFormHandleSubmit
} from "react-hook-form";
import { Link } from "react-router-dom";
import { FormContolledInput } from "../components/FormContolledInput";
import { SignUpFormInputsType } from "../types/signUpInputs.types";

export const SignUpForm: FC<{
  handleSubmit: UseFormHandleSubmit<SignUpFormInputsType>;
  onSubmit: SubmitHandler<SignUpFormInputsType>;
  control: Control<SignUpFormInputsType, any>;
  formState: FormState<SignUpFormInputsType>;
}> = ({ handleSubmit, onSubmit, control, formState: { errors } }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GlobalStyles
        styles={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
              color: "white",
            },
          },
          "& .MuiFormLabel-root": {
            color: "white",
          },
        }}
      />
      <Paper
        sx={{
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
          width: "400px",
          padding: "2rem 1rem",
          color: "common.white",
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight={600}>
            Sign Up
          </Typography>
        </Box>
        <FormContolledInput
          control={control}
          name="fullName"
          fieldError={errors.fullName}
        />
        <FormContolledInput
          control={control}
          name="emailAddress"
          fieldError={errors.emailAddress}
        />
        <FormContolledInput
          control={control}
          name="password"
          fieldError={errors.password}
          isPasswordField
        />
        <FormContolledInput
          control={control}
          name="confirmPassword"
          fieldError={errors.confirmPassword}
          isPasswordField
        />

        <Button
          type="submit"
          sx={{
            textTransform: "none",
            backgroundColor: "common.black",
            color: "common.white",
          }}
        >
          Sign Up
        </Button>
        <Typography>
          Already have an account? <Link to="/">Sign In</Link>{" "}
        </Typography>
      </Paper>
    </form>
  );
};
