import {
  Box,
  Button,
  GlobalStyles,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import {
  Control,
  Controller,
  FormState,
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form";
import { Link } from "react-router-dom";
import { SignUpFormInputsType } from "../types/signUpInputs.types";
import { Eye } from "iconsax-react";
import { EyeSlash } from "iconsax-react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

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
        <Controller
          name="fullName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              InputLabelProps={{
                sx: {
                  color: "white",
                  "&.Mui-focused": { color: "primary.contrastText" },
                },
              }}
              error={!!errors.fullName}
              helperText={!!errors.fullName && `${errors?.fullName?.message}`}
            />
          )}
        />
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
                sx: {
                  color: "white",
                  "&.Mui-focused": { color: "primary.contrastText" },
                },
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
              color="primary"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      color="primary"
                    >
                      {showPassword ? <EyeSlash /> : <Eye />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                sx: {
                  color: "white",
                  "&.Mui-focused": { color: "primary.contrastText" },
                },
              }}
              error={!!errors.password}
              helperText={!!errors.password && `${errors.password?.message}`}
            />
          )}
        />
        <Controller
          name="confirmPassword"
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
              label="Confirm Password"
              color="primary"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      color="primary"
                    >
                      {showPassword ? <EyeSlash /> : <Eye />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                sx: {
                  color: "white",
                  "&.Mui-focused": { color: "primary.contrastText" },
                },
              }}
              error={!!errors.confirmPassword}
              helperText={
                !!errors.confirmPassword && `${errors.confirmPassword?.message}`
              }
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
          Sign Up
        </Button>
        <Typography>
          Already have an account? <Link to="/">Sign In</Link>{" "}
        </Typography>
      </Paper>
    </form>
  );
};
