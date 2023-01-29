import {
  Box,
  Button,
  GlobalStyles,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { FC } from "react";
import {
  Control,
  Controller,
  FormState,
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form";
import { Link } from "react-router-dom";
import { SignInFormInputsType } from "../types/SignInInputs.types";

const SignInForm: FC<{
  handleSubmit: UseFormHandleSubmit<SignInFormInputsType>;
  onSubmit: SubmitHandler<SignInFormInputsType>;
  control: Control<SignInFormInputsType, any>;
  formState: FormState<SignInFormInputsType>;
}> = ({ handleSubmit, onSubmit, control, formState: { errors } }) => {
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
        <Controller
          name="emailAddress"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              InputLabelProps={{
                sx: { color: "white", "&.Mui-focused": { color: "primary.contrastText" } },
              }}
              error={!!errors.emailAddress}
              helperText={
                !!errors.emailAddress && `${errors.emailAddress.message}`
              }
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                    color: "white",
                  },
                },
              }}
              {...field}
              id="outlined-basic"
              label="Password"
              type="password"
              color="primary"
              InputLabelProps={{
                sx: { color: "white", "&.Mui-focused": { color: "primary.contrastText" } },
              }}
            />
          )}
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
