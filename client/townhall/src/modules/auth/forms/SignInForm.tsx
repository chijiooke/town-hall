import {
  Box,
  Button,
  GlobalStyles, Paper, Typography
} from "@mui/material";
import { FC, useState } from "react";
import {
  Control, FormState,
  SubmitHandler,
  UseFormHandleSubmit
} from "react-hook-form";
import { Link } from "react-router-dom";
import { FormContolledInput } from "../components/FormContolledInput";
import { SignInFormInputsType } from "../types/SignInInputs.types";

const SignInForm: FC<{
  handleSubmit: UseFormHandleSubmit<SignInFormInputsType>;
  onSubmit: SubmitHandler<SignInFormInputsType>;
  control: Control<SignInFormInputsType, any>;
  formState: FormState<SignInFormInputsType>;
}> = ({ handleSubmit, onSubmit, control, formState: { errors } }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
            Sign In
          </Typography>
        </Box>

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

        <Button
          type="submit"
          sx={{
            textTransform: "none",
            backgroundColor: "common.black",
            color: "common.white",
          }}
        >
          Sign In
        </Button>
        <Typography>
          Don't have an account? <Link to="/sign-up">Create One</Link>{" "}
        </Typography>
      </Paper>
    </form>
  );
};

export default SignInForm;
