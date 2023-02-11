import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Eye, EyeSlash } from "iconsax-react";
import { FC, useState } from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import { capitalizeText } from "../../../utils/copitalizeText";

export const FormContolledInput: FC<{
  name: any;
  control: Control<any, any>;
  fieldError?: FieldError;
  isPasswordField?: boolean;
}> = ({ name, control, fieldError, isPasswordField }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          id="outlined-basic"
          label={capitalizeText(name.split(/(?=[A-Z])/).join(" "))}
          variant="outlined"
          InputProps={{
            sx: {
              color: "common.white",
              "&.Mui-focused": { color: "common.white" },
            },
            endAdornment: isPasswordField ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={(e) => {
                    handleClickShowPassword();
                    e.preventDefault();
                  }}
                  edge="end"
                  color="primary"
                >
                  {showPassword ? <EyeSlash /> : <Eye />}
                </IconButton>
              </InputAdornment>
            ) : null,
          }}
          InputLabelProps={{
            sx: {
              color: "common.white",
              "&.Mui-focused": { color: "common.white" },
            },
          }}
          error={!!fieldError}
          helperText={!!fieldError && `${fieldError.message}`}
        />
      )}
    />
  );
};
